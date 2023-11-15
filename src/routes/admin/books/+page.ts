import type { PageLoad } from './$types';
import { getAllBooks } from '$lib/services/books.service';
import type { ServerResponse } from '$lib/types';

export const load: PageLoad = async () => {
  const response: ServerResponse = await getAllBooks();

  return { books: response.data };
};
