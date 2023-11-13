import ky from 'ky';
import { config } from '$lib/config';
import type { ServerResponse } from '$lib/types';

const AUTH_URL = `${config.app.serverUrl}/auth`;

export const login = async (payload: {
  email: FormDataEntryValue | null;
  password: FormDataEntryValue | null;
}): Promise<ServerResponse> =>
  ky
    .post(`${AUTH_URL}/login`, {
      json: payload,
    })
    .json();

export const register = async (payload: {
  firstname: FormDataEntryValue | null;
  lastname: FormDataEntryValue | null;
  username: FormDataEntryValue | null;
  email: FormDataEntryValue | null;
  password: FormDataEntryValue | null;
}) => {
  const { firstname, lastname, username, email, password } = payload;
  try {
    const response: ServerResponse = await ky
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
    console.log(response);
    if (!response.success) {
      console.log(response.message);
      return null;
    }
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const logout = async () => ky.post(`${AUTH_URL}/logout`);
