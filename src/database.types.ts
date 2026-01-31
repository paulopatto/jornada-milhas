export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      companhias: {
        Row: {
          created_at: string | null
          id: number
          nome: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          nome: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          nome?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      depoimentos: {
        Row: {
          autor: string
          avatar: string
          created_at: string | null
          id: number
          texto: string
          updated_at: string | null
        }
        Insert: {
          autor: string
          avatar: string
          created_at?: string | null
          id?: number
          texto: string
          updated_at?: string | null
        }
        Update: {
          autor?: string
          avatar?: string
          created_at?: string | null
          id?: number
          texto?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      estados: {
        Row: {
          created_at: string | null
          id: number
          nome: string
          sigla: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          nome: string
          sigla: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          nome?: string
          sigla?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      passagem: {
        Row: {
          companhia_id: number | null
          conexoes: number
          created_at: string | null
          destino_id: number | null
          id: number
          origem_id: number | null
          preco_ida: number
          preco_volta: number
          taxa_embarque: number
          tempo_voo: number
          tipo: string
          updated_at: string | null
        }
        Insert: {
          companhia_id?: number | null
          conexoes: number
          created_at?: string | null
          destino_id?: number | null
          id?: number
          origem_id?: number | null
          preco_ida: number
          preco_volta: number
          taxa_embarque: number
          tempo_voo: number
          tipo: string
          updated_at?: string | null
        }
        Update: {
          companhia_id?: number | null
          conexoes?: number
          created_at?: string | null
          destino_id?: number | null
          id?: number
          origem_id?: number | null
          preco_ida?: number
          preco_volta?: number
          taxa_embarque?: number
          tempo_voo?: number
          tipo?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "passagem_companhia_id_fkey"
            columns: ["companhia_id"]
            isOneToOne: false
            referencedRelation: "companhias"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "passagem_destino_id_fkey"
            columns: ["destino_id"]
            isOneToOne: false
            referencedRelation: "estados"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "passagem_origem_id_fkey"
            columns: ["origem_id"]
            isOneToOne: false
            referencedRelation: "estados"
            referencedColumns: ["id"]
          },
        ]
      }
      promocoes: {
        Row: {
          created_at: string | null
          destino: string
          id: number
          imagem: string | null
          preco: number
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          destino: string
          id?: number
          imagem?: string | null
          preco: number
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          destino?: string
          id?: number
          imagem?: string | null
          preco?: number
          updated_at?: string | null
        }
        Relationships: []
      }
      users: {
        Row: {
          cidade: string
          cpf: string
          created_at: string | null
          email: string
          estado_id: number | null
          genero: string | null
          id: number
          last_login_at: string | null
          nascimento: string
          nome: string
          senha: string
          telefone: string
          updated_at: string | null
        }
        Insert: {
          cidade: string
          cpf: string
          created_at?: string | null
          email: string
          estado_id?: number | null
          genero?: string | null
          id?: number
          last_login_at?: string | null
          nascimento: string
          nome: string
          senha: string
          telefone: string
          updated_at?: string | null
        }
        Update: {
          cidade?: string
          cpf?: string
          created_at?: string | null
          email?: string
          estado_id?: number | null
          genero?: string | null
          id?: number
          last_login_at?: string | null
          nascimento?: string
          nome?: string
          senha?: string
          telefone?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "users_estado_id_fkey"
            columns: ["estado_id"]
            isOneToOne: false
            referencedRelation: "estados"
            referencedColumns: ["id"]
          },
        ]
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

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
