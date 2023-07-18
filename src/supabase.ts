export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      productos: {
        Row: {
          activo: number | null
          audit_date: string | null
          descripcion: string | null
          id: number
          id_categoria: number | null
          nombre: string | null
          precio: number | null
        }
        Insert: {
          activo?: number | null
          audit_date?: string | null
          descripcion?: string | null
          id?: number
          id_categoria?: number | null
          nombre?: string | null
          precio?: number | null
        }
        Update: {
          activo?: number | null
          audit_date?: string | null
          descripcion?: string | null
          id?: number
          id_categoria?: number | null
          nombre?: string | null
          precio?: number | null
        }
        Relationships: []
      }
      usuarios: {
        Row: {
          id: number
          password: string | null
          usuario: string | null
        }
        Insert: {
          id?: number
          password?: string | null
          usuario?: string | null
        }
        Update: {
          id?: number
          password?: string | null
          usuario?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
