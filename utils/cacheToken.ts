import { getAccessToken } from './getAccessToken';

let token = '';
let tokenTimestamp = 0;

export async function cacheAccessToken() {
  const currentDate = +new Date();

  if (currentDate > tokenTimestamp) {
    const { access_token } = await getAccessToken();
    const timestamp = +new Date();

    // token expires in 3600 seconds (1h)
    // caches token for 3500 seconds
    // 100 seconds as buffer
    tokenTimestamp = timestamp + 3500 * 1000;
    token = access_token;
  }

  return token;
}
