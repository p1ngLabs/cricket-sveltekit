import { redirect, type Actions } from '@sveltejs/kit';
import { logout } from '$lib/services/auth.service';

export const actions = {
  default: async ({ cookies }) => {
    await logout();
    cookies.delete('user', { path: '/' });
    throw redirect(302, '/');
  },
} satisfies Actions;
