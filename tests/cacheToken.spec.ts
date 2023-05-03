import { expect } from 'chai';
import { cacheAccessToken } from '../utils/cacheToken';

let token = '';

before(async function () {
  token = await cacheAccessToken();
});

it('caches token #1', async function () {
  const cachedToken = await cacheAccessToken();
  expect(cachedToken).to.equal(token);
});

it('caches token #2', async function () {
  const cachedToken = await cacheAccessToken();
  expect(cachedToken).to.equal(token);
});

it('caches token #3', async function () {
  const cachedToken = await cacheAccessToken();
  expect(cachedToken).to.equal(token);
});
