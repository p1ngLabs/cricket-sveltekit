import { config } from '$lib/config';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
  const response = await fetch(`${config.app.serverUrl}/books`);
  const responseData = await response.json();

  return { books: responseData.data };
};
