// User and profile types
export interface User {
  id: string;
  email: string;
  created_at: string;
}

export interface Profile {
  id: string;
  user_id: string;
  display_name: string;
  email: string;
  bio?: string;
  avatar_url?: string;
  created_at: string;
  updated_at: string;
}

// Household types
export interface Household {
  id: string;
  name: string;
  description?: string;
  image_url?: string;
  created_at: string;
  updated_at: string;
}

export interface HouseholdMember {
  id: string;
  household_id: string;
  user_id: string;
  role: 'admin' | 'member' | 'guest';
  status: 'active' | 'invited' | 'removed';
  created_at: string;
  updated_at: string;
}

// Job types
export interface Job {
  id: string;
  title: string;
  description: string;
  status: 'open' | 'in_progress' | 'completed' | 'cancelled';
  creator_id: string;
  assignee_id?: string;
  household_id?: string;
  points?: number;
  deadline?: string;
  created_at: string;
  updated_at: string;
}

// Help request types
export interface HelpRequest {
  id: string;
  title: string;
  description: string;
  status: 'open' | 'in_progress' | 'completed' | 'cancelled';
  creator_id: string;
  helper_id?: string;
  household_id?: string;
  points?: number;
  urgency: 'low' | 'medium' | 'high';
  created_at: string;
  updated_at: string;
}

// Event types
export interface Event {
  id: string;
  title: string;
  description: string;
  start_time: string;
  end_time?: string;
  location?: string;
  creator_id: string;
  household_id?: string;
  created_at: string;
  updated_at: string;
}

// Ledger types
export interface LedgerEntry {
  id: string;
  user_id: string;
  amount: number;
  currency: string;
  description: string;
  type: 'deposit' | 'withdrawal' | 'transfer';
  reference_id?: string;
  reference_type?: 'job' | 'help' | 'event' | 'household';
  created_at: string;
}

// Points types
export interface PointsEntry {
  id: string;
  user_id: string;
  points: number;
  description: string;
  reference_id?: string;
  reference_type?: 'job' | 'help' | 'event';
  created_at: string;
} 