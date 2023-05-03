import { expect } from 'chai';
import { getAccessToken } from '../utils/getAccessToken';
import { sendGetRequest } from '../utils/sendRequest';
import { AnimalsResponse } from '../utils/types';

it('works', function () {
  expect(true).to.be.true;
  expect(false).to.be.false;
});

it('generates token', async function () {
  const { token_type, expires_in, access_token } = await getAccessToken();

  expect(token_type).to.equal('Bearer');
  expect(expires_in).to.equal(3600);
  expect(access_token).to.be.a.string;
});

describe('/animals endpoint', function () {
  const PATH = '/animals';

  it('works with query parameters', async function () {
    const params = new URLSearchParams({
      type: 'dog',
      limit: '2',
    }).toString();
    const { animals } = (await sendGetRequest(
      `${PATH}?${params}`
    )) as AnimalsResponse;

    expect(animals).to.have.length(2);
  });
});
