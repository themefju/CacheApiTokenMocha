import * as dotenv from 'dotenv';
dotenv.config();

import { getAccessToken } from './getAccessToken';

const BASE_URL = process.env.BASE_URL as string;

export async function sendGetRequest(path: string): Promise<object> {
  const { access_token } = await getAccessToken();
  const fullPath = BASE_URL.concat(path);
  const response: object = await fetch(new URL(fullPath), {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })
    .then(function (response) {
      if (response.ok) {
        // dont return .json() if wanna test response status codes
        // instead return response object and check codes in tests
        return response.json();
      }

      return response.json().then(function (json: object) {
        throw json;
      });
    })
    .catch(function (error: object) {
      throw new Error(JSON.stringify(error));
    });

  return response;
}
