export interface Database {
  public: {
    Tables: {
      template_downloads: {
        Row: {
          id: number
          template_id: number
          name: string
          email: string
          industry: string
          company_name: string
          phone_number: string
          user_id: string | null
          created_at: string
        }
        Insert: {
          id?: number
          template_id: number
          name: string
          email: string
          industry: string
          company_name: string
          phone_number: string
          user_id?: string | null
          created_at?: string
        }
      }
    }
  }
}
