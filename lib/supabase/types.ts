export interface GuestbookEntry {
  id: string;
  user_id: string;
  display_name: string;
  message: string;
  created_at: string;
  approved: boolean;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  body: string;
  created_at: string;
}

export interface Referral {
  id: string;
  name: string;
  email: string;
  company: string | null;
  role: string | null;
  body: string;
  created_at: string;
}
