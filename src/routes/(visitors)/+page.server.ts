import { redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

import * as authService from '$lib/services/auth.service';

export const load: PageServerLoad = ({ locals }) => ({ user: locals.user });

export const actions = {
  default: async ({ cookies }) => {
    await authService.terminateSession();

    cookies.delete('resutnerruc', { path: '/' });
    cookies.delete('connect.sid', { path: '/' });

    throw redirect(302, '/');
  },
} satisfies Actions;
