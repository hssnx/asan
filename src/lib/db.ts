import { supabase } from './supabaseClient';

// Generic function to fetch data from any table
export async function fetchData<T>(
  table: string,
  options?: {
    columns?: string;
    filters?: Record<string, any>;
    limit?: number;
    orderBy?: { column: string; ascending?: boolean };
  }
) {
  let query = supabase.from(table).select(options?.columns || '*');

  if (options?.filters) {
    Object.entries(options.filters).forEach(([key, value]) => {
      query = query.eq(key, value);
    });
  }

  if (options?.orderBy) {
    query = query.order(options.orderBy.column, {
      ascending: options.orderBy.ascending ?? true,
    });
  }

  if (options?.limit) {
    query = query.limit(options.limit);
  }

  const { data, error } = await query;
  return { data: data as T[], error };
}

// Generic function to insert a new record
export async function insertRecord<T>(table: string, data: Record<string, any>) {
  const { data: result, error } = await supabase.from(table).insert(data).select();
  return { data: result as T[], error };
}

// Generic function to update a record
export async function updateRecord<T>(
  table: string,
  id: string,
  data: Record<string, any>,
  idColumn = 'id'
) {
  const { data: result, error } = await supabase
    .from(table)
    .update(data)
    .eq(idColumn, id)
    .select();
  return { data: result as T[], error };
}

// Generic function to delete a record
export async function deleteRecord(table: string, id: string, idColumn = 'id') {
  const { error } = await supabase.from(table).delete().eq(idColumn, id);
  return { error };
} 