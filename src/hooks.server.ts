import type { Handle } from '@sveltejs/kit';

export const handle: Handle = ({ event, resolve }) => {
  const { locals }: { locals: any } = event;
  const user = event.cookies.get('user');
  locals.user = user ? JSON.parse(atob(user)) : null;

  return resolve(event);
};
