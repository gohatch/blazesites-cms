import { createClient } from './client';

export async function uploadFile(file: File, path: string) {
  const supabase = createClient();
  const { data, error } = await supabase.storage
    .from('media')
    .upload(path, file, { upsert: false });

  if (error) throw error;

  const { data: urlData } = supabase.storage.from('media').getPublicUrl(data.path);
  return urlData.publicUrl;
}

export async function deleteFile(path: string) {
  const supabase = createClient();
  const { error } = await supabase.storage.from('media').remove([path]);
  if (error) throw error;
}
