import { redirect, type Actions } from '@sveltejs/kit';
import * as authService from '$lib/services/auth.service';

export const actions = {
  default: async ({ cookies }) => {
    await authService.terminateSession();

    cookies.delete('user', { path: '/' });
    cookies.delete('connect.sid', { path: '/' });

    throw redirect(302, '/');
  },
} satisfies Actions;
