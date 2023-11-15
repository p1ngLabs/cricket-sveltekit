import ky from 'ky';
import { config } from '$lib/config';
import type { ServerResponse } from '$lib/types';

const BOOK_URL = `${config.app.serverUrl}/books`;

export async function getAllBooks(): Promise<ServerResponse> {
  return ky
    .get(BOOK_URL, {
      credentials: 'include',
    })
    .json();
}
