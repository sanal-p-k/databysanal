'use client';

import { createContext, useContext, useState } from 'react';
import { supabase } from '../lib/supabase';

interface StorageContextType {
  uploadFile: (file: File, folderPath: string) => Promise<string>;
  deleteFile: (filePath: string) => Promise<void>;
  getDownloadUrl: (filePath: string) => Promise<string>;
  saveTemplate: (file: File, userId: string) => Promise<void>;
  getTemplateSignedUrl: (filePath: string) => Promise<string>;
  listTemplatesInStorage: (folderPath?: string) => Promise<string[]>;
  listTemplatesInDatabase: () => Promise<any[]>;
}

const StorageContext = createContext<StorageContextType | undefined>(undefined);

export function StorageProvider({ children }: { children: React.ReactNode }) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Upload file to storage, returns public URL
  const uploadFile = async (file: File, folderPath: string): Promise<string> => {
    try {
      setUploading(true);
      setError(null);

      const sanitizedFilename = file.name.replace(/[^a-zA-Z0-9._-]/g, '_');
      const uniqueFileName = `${Date.now()}-${sanitizedFilename}`;
      const filePath = `${folderPath}/${uniqueFileName}`;

      const { data, error } = await supabase.storage
        .from('templates')
        .upload(filePath, file, { cacheControl: '3600', upsert: false });

      if (error) {
        throw new Error(`Upload error: ${error.message}`);
      }

      const { data: publicUrl } = supabase.storage
        .from('templates')
        .getPublicUrl(filePath);

      if (!publicUrl.publicUrl) {
        throw new Error('Could not get public URL');
      }

      return publicUrl.publicUrl;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Unknown upload error';
      setError(message);
      throw new Error(message);
    } finally {
      setUploading(false);
    }
  };

  // Save template metadata to your DB table 'templates'
  const saveTemplate = async (file: File, userId: string): Promise<void> => {
    try {
      const publicUrl = await uploadFile(file, `user-id/${userId}`);

      const { error } = await supabase
        .from('templates')
        .insert([
          {
            user_id: userId,
            file_name: file.name,
            file_url: publicUrl,
            file_type: file.type,
          },
        ]);

      if (error) {
        throw new Error(`DB insert error: ${error.message}`);
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Unknown save error';
      setError(message);
      throw new Error(message);
    }
  };

  // Get signed URL for a file path in storage (temporary)
  const getTemplateSignedUrl = async (filePath: string): Promise<string> => {
    try {
      const { data, error } = await supabase.storage
        .from('templates')
        .createSignedUrl(filePath, 60); // 60 seconds validity

      if (error || !data?.signedUrl) {
        throw new Error(error?.message || 'Failed to get signed URL');
      }

      return data.signedUrl;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Unknown signed URL error';
      setError(message);
      throw new Error(message);
    }
  };

  // List files inside 'templates' storage bucket optionally filtered by folderPath
  const listTemplatesInStorage = async (folderPath = ''): Promise<string[]> => {
    try {
      const { data, error } = await supabase.storage.from('templates').list(folderPath);

      if (error) {
        throw new Error(`List storage files error: ${error.message}`);
      }

      // Return array of file paths relative to bucket root
      // data is an array of {name: string, ...}
      return data.map(file => (folderPath ? `${folderPath}/${file.name}` : file.name));
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Unknown list error';
      setError(message);
      throw new Error(message);
    }
  };

  // List all templates metadata from your 'templates' DB table
  const listTemplatesInDatabase = async (): Promise<any[]> => {
    try {
      const { data, error } = await supabase.from('templates').select('*');

      if (error) {
        throw new Error(`DB list error: ${error.message}`);
      }

      return data || [];
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Unknown DB list error';
      setError(message);
      throw new Error(message);
    }
  };

  // Delete file from storage
  const deleteFile = async (filePath: string): Promise<void> => {
    try {
      setError(null);
      const { error } = await supabase.storage.from('templates').remove([filePath]);

      if (error) {
        throw new Error(`Delete error: ${error.message}`);
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Unknown delete error';
      setError(message);
      throw new Error(message);
    }
  };

  // Get public URL of a file (no expiration)
  const getDownloadUrl = async (filePath: string): Promise<string> => {
    try {
      setError(null);
      const { data: publicUrl } = supabase.storage.from('templates').getPublicUrl(filePath);

      if (!publicUrl.publicUrl) {
        throw new Error('Failed to get public URL');
      }

      return publicUrl.publicUrl;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Unknown get public URL error';
      setError(message);
      throw new Error(message);
    }
  };

  return (
    <StorageContext.Provider
      value={{
        uploadFile,
        deleteFile,
        getDownloadUrl,
        saveTemplate,
        getTemplateSignedUrl,
        listTemplatesInStorage,
        listTemplatesInDatabase,
      }}
    >
      {children}
    </StorageContext.Provider>
  );
}

export function useStorage() {
  const context = useContext(StorageContext);
  if (!context) {
    throw new Error('useStorage must be used within a StorageProvider');
  }
  return context;
}
