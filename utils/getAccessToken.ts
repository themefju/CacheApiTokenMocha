import * as dotenv from 'dotenv';
dotenv.config();

const GRANT_TYPE = 'client_credentials';
const CLIENT_ID = process.env.CLIENT_ID as string;
const CLIENT_SECRET = process.env.CLIENT_SECRET as string;
const BASE_URL = process.env.BASE_URL as string;
const TOKEN_PATH = process.env.TOKEN_ENDPOINT as string;
const TOKEN_URL = BASE_URL.concat(TOKEN_PATH);

const params = new URLSearchParams({
  grant_type: GRANT_TYPE,
  client_id: CLIENT_ID,
  client_secret: CLIENT_SECRET,
});

export async function getAccessToken(): Promise<object> {
  const response: object = await fetch(new URL(TOKEN_URL), {
    method: 'POST',
    body: params,
  })
    .then(function (response) {
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject('Rejected');
      }
    })
    .catch(function (error) {
      throw error;
    });

  return response;
}
