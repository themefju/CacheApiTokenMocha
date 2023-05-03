import { expect } from 'chai';
import { getAccessToken } from '../utils/getAccessToken';

it('works', function () {
  expect(true).to.be.true;
  expect(false).to.be.false;
});

it('generates token', async function () {
  const token = await getAccessToken();
  expect(token.token_type).to.equal('Bearer');
});
