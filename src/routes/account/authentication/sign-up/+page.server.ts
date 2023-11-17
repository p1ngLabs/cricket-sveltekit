import type { Actions } from './$types';
import * as authService from '$lib/services/auth.service';

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const payload = {
      first_name: data.get('firstname'),
      last_name: data.get('lastname'),
      username: data.get('username'),
      email: data.get('email'),
      password: data.get('password'),
    };
    await authService.register(payload);
  },
} satisfies Actions;
