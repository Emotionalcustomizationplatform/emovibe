import { supabase } from './supabase';

export const getMembership = async (userId: string) => {
  const { data, error } = await supabase
    .from('memberships')
    .select('status')
    .eq('user_id', userId)
    .single();

  if (error) return false;
  return data?.status === 'active';
};

export const setMembership = async (userId: string) => {
  await supabase.from('memberships').upsert({
    user_id: userId,
    status: 'active'
  });
};