import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { login } from '$lib/services/auth.service';

export const load: PageServerLoad = ({ locals }: { locals: any }) => {
  if (locals.user) throw redirect(307, '/');
};

export const actions = {
  default: async ({ request, cookies }) => {
    const data = await request.formData();
    const email = data.get('email');
    const password = data.get('password');

    const payload = { email, password };
    const response = await login(payload);
    if (!response.success) fail(401);
    cookies.set('user', btoa(JSON.stringify(response.data)), { path: '/' });
    throw redirect(302, '/');
  },
} satisfies Actions;
