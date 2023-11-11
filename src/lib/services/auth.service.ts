import ky from 'ky';
import { config } from '$lib/config';

const AUTH_URL = `${config.app.serverUrl}/auth`;

export const login = async (payload: { email: string; password: string }) => {
  try {
    const response = await fetch(`${AUTH_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    }).then((res) => res.json());
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    // const response: any = await ky
    //   .post(`${AUTH_URL}/login`, {
    //     json: payload,
    //   })
    //   .json();
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const register = async (payload: {
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
}) => {
  const { firstname, lastname, username, email, password } = payload;
  try {
    const response: { success: boolean; data?: any; message?: string } = await ky
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

export const logout = async () => {
  try {
    await ky.post(`${AUTH_URL}/logout`);
  } catch (error) {
    console.log(error);
  }
};
