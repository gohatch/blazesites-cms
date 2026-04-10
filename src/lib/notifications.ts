import { createServiceRoleClient } from '@/lib/supabase/server';

export type NotificationType = 'lead_update' | 'project_status' | 'client_activity' | 'system';

interface CreateNotificationParams {
  orgId: string;
  type: NotificationType;
  title: string;
  message: string;
  link?: string;
  userId?: string;
}

export async function createNotification({
  orgId,
  type,
  title,
  message,
  link,
  userId,
}: CreateNotificationParams) {
  const supabase = await createServiceRoleClient();

  const { error } = await supabase.from('notifications').insert({
    org_id: orgId,
    user_id: userId || null,
    type,
    title,
    message,
    link: link || null,
    read: false,
  });

  if (error) {
    console.error('Failed to create notification:', error.message);
  }
}
