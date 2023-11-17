import ky from 'ky';
import { config } from '$lib/config';
import type { ServerResponse } from '$lib/types';

const AUTH_URL = `${config.app.serverUrl}/auth`;

export async function register(payload: {
  first_name: FormDataEntryValue | null;
  last_name: FormDataEntryValue | null;
  username: FormDataEntryValue | null;
  email: FormDataEntryValue | null;
  password: FormDataEntryValue | null;
}): Promise<ServerResponse> {
  return ky.post(`${AUTH_URL}/register`, { json: payload }).json();
}

export async function login(payload: {
  email: FormDataEntryValue | null;
  password: FormDataEntryValue | null;
}) {
  return ky.post(`${AUTH_URL}/login`, { json: payload });
}

export async function terminateSession(): Promise<void> {
  ky.post(`${AUTH_URL}/logout`);
}
