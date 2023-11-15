import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import * as authService from '$lib/services/auth.service';
import type { ServerResponse } from '$lib/types';

export const load: PageServerLoad = ({ locals }) => {
  if (locals.user) throw redirect(307, '/');
};

export const actions = {
  default: async ({ request, cookies }) => {
    const data = await request.formData();
    const payload = { email: data.get('email'), password: data.get('password') };

    const response = await authService.login(payload);
    const responseCookie = response.headers.getSetCookie()[0];
    /**
     * example of responseCookie:
     * connect.sid=s%3ASsXcfZtjG01HYuUZuZDHkH-UTn7YCrb7.08SdV34J8JL88YsT3tApfpZDgj0xhnp5X2b4ME2Dyg0; Path=/; Expires=Wed, 15 Nov 2023 16:55:23 GMT; HttpOnly
     */
    const cookieValue = decodeURIComponent(responseCookie.slice(12, responseCookie.indexOf(';')));
    const responseJson: ServerResponse = await response.json();
    if (!responseJson.success) fail(401);

    cookies.set('connect.sid', cookieValue, { path: '/' });
    cookies.set('user', btoa(JSON.stringify(responseJson.data)), { path: '/' });

    throw redirect(302, '/');
  },
} satisfies Actions;
