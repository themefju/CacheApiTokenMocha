import * as dotenv from 'dotenv';
dotenv.config();

import { TokenObject } from './types';

const BASE_URL = process.env.BASE_URL as string;
const TOKEN_PATH = process.env.TOKEN_ENDPOINT as string;
const TOKEN_URL = BASE_URL.concat(TOKEN_PATH);

const GRANT_TYPE = process.env.GRANT_TYPE as string;
const CLIENT_ID = process.env.CLIENT_ID as string;
const CLIENT_SECRET = process.env.CLIENT_SECRET as string;

const params = new URLSearchParams({
  grant_type: GRANT_TYPE,
  client_id: CLIENT_ID,
  client_secret: CLIENT_SECRET,
});

export async function getAccessToken(): Promise<TokenObject> {
  const response: TokenObject = await fetch(new URL(TOKEN_URL), {
    method: 'POST',
    body: params,
  })
    .then(function (response) {
      if (response.ok) {
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
