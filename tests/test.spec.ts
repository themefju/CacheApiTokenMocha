import { expect } from 'chai';
import { getAccessToken } from '../utils/getAccessToken';

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
