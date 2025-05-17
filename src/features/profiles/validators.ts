import { z } from 'zod';

// Profile schema for validation
export const profileSchema = z.object({
  id: z.string().uuid().optional(),
  userId: z.string().uuid(),
  displayName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  bio: z.string().max(500, 'Bio must be 500 characters or less').optional(),
  avatarUrl: z.string().url().optional().nullable(),
});

export type ProfileFormData = z.infer<typeof profileSchema>;

// Profile validation function
export function validateProfile(data: unknown) {
  return profileSchema.safeParse(data);
} 