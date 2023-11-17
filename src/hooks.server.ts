import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
  const user = event.cookies.get('resutnerruc');
  event.locals.user = user ? JSON.parse(atob(user)) : null;

  const response = await resolve(event);
  return response;
};
