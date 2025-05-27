'use client';

import { createContext, useContext, useState } from 'react';
import { supabase } from '../lib/supabase';

interface StorageError {
  message: string;
  code?: string;
}

interface StorageContextType {
  uploadFile: (file: File, folderPath: string) => Promise<string>;
  deleteFile: (filePath: string) => Promise<void>;
  getDownloadUrl: (filePath: string) => Promise<string>;
  saveTemplate: (file: File, userId: string) => Promise<void>;
  getTemplateSignedUrl: (filePath: string) => Promise<string>;
  listTemplates: () => Promise<any[]>;
}

const StorageContext = createContext<StorageContextType | undefined>(undefined);

export function StorageProvider({ children }: { children: React.ReactNode }) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const uploadFile = async (file: File, folderPath: string): Promise<string> => {
    try {
      setUploading(true);
      setError(null);

      // Generate a unique filename to prevent conflicts
      const uniqueFileName = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9]/g, '_')}`;
      const filePath = `${folderPath}/${uniqueFileName}`;

      // Upload the file to Supabase storage
      const { data, error } = await supabase.storage
        .from('templates')
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: false
        });

      if (error) {
        throw new Error(`Failed to upload file: ${error.message}`);
      }

      // Get the public URL
      const { data: publicUrl } = supabase.storage
        .from('templates')
        .getPublicUrl(filePath);

      return publicUrl.publicUrl;
    } catch (err) {
      const errorMessage = err instanceof Error 
        ? err.message 
        : 'An error occurred while uploading the file';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setUploading(false);
    }
  };

  const saveTemplate = async (file: File, userId: string): Promise<void> => {
    try {
      // First upload the file
      const filePath = await uploadFile(file, `user-id/${userId}`);

      // Then save metadata to the database
      const { error } = await supabase
        .from('templates')
        .insert([
          {
            user_id: userId,
            file_name: file.name,
            file_url: filePath,
            file_type: file.type
          }
        ]);

      if (error) {
        throw new Error(`Failed to save template metadata: ${error.message}`);
      }
    } catch (err) {
      const errorMessage = err instanceof Error 
        ? err.message 
        : 'An error occurred while saving the template';
      setError(errorMessage);
      throw new Error(errorMessage);
    }
  };

  const getTemplateSignedUrl = async (filePath: string): Promise<string> => {
    try {
      const { data, error } = await supabase
        .storage
        .from('templates')
        .createSignedUrl(filePath, 60); // valid for 60 seconds

      if (error) {
        throw new Error(`Failed to get signed URL: ${error.message}`);
      }

      return data.signedUrl;
    } catch (err) {
      const errorMessage = err instanceof Error 
        ? err.message 
        : 'An error occurred while getting the signed URL';
      setError(errorMessage);
      throw new Error(errorMessage);
    }
  };

  const listTemplates = async (): Promise<any[]> => {
    try {
      const { data, error } = await supabase
        .from('templates')
        .select('*');

      if (error) {
        throw new Error(`Failed to list templates: ${error.message}`);
      }

      return data || [];
    } catch (err) {
      const errorMessage = err instanceof Error 
        ? err.message 
        : 'An error occurred while listing templates';
      setError(errorMessage);
      throw new Error(errorMessage);
    }
  };

  const deleteFile = async (filePath: string): Promise<void> => {
    try {
      setError(null);
      const { error } = await supabase.storage
        .from('templates')
        .remove([filePath]);

      if (error) {
        throw new Error(`Failed to delete file: ${error.message}`);
      }
    } catch (err) {
      const errorMessage = err instanceof Error 
        ? err.message 
        : 'An error occurred while deleting the file';
      setError(errorMessage);
      throw new Error(errorMessage);
    }
  };

  const getDownloadUrl = async (filePath: string): Promise<string> => {
    try {
      setError(null);
      const { data: publicUrl } = supabase.storage
        .from('templates')
        .getPublicUrl(filePath);

      if (!publicUrl.publicUrl) {
        throw new Error('Failed to get download URL');
      }

      return publicUrl.publicUrl;
    } catch (err) {
      const errorMessage = err instanceof Error 
        ? err.message 
        : 'An error occurred while getting the download URL';
      setError(errorMessage);
      throw new Error(errorMessage);
    }
  };

  return (
    <StorageContext.Provider value={{ uploadFile, deleteFile, getDownloadUrl, saveTemplate, getTemplateSignedUrl, listTemplates }}>
      {children}
    </StorageContext.Provider>
  );
}

export function useStorage() {
  const context = useContext(StorageContext);
  if (context === undefined) {
    throw new Error('useStorage must be used within a StorageProvider');
  }
  return context;
}
