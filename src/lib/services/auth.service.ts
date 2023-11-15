import ky from 'ky';
import { config } from '$lib/config';
import type { ServerResponse } from '$lib/types';

const AUTH_URL = `${config.app.serverUrl}/auth`;

export async function register(payload: {
  firstname: FormDataEntryValue | null;
  lastname: FormDataEntryValue | null;
  username: FormDataEntryValue | null;
  email: FormDataEntryValue | null;
  password: FormDataEntryValue | null;
}): Promise<ServerResponse> {
  const { firstname, lastname, username, email, password } = payload;

  return ky
    .post(`${AUTH_URL}/register`, {
      json: {
        first_name: firstname,
        last_name: lastname,
        username,
        email,
        password,
      },
    })
    .json();
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
