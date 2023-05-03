import { expect } from 'chai';
import { cacheAccessToken } from '../utils/cacheToken';

let cachedToken = '';

before(async function () {
  cachedToken = await cacheAccessToken();
});

it('caches token #1', async function () {
  const token = await cacheAccessToken();
  expect(token).to.equal(cachedToken);
});

it('caches token #2', async function () {
  const token = await cacheAccessToken();
  expect(token).to.equal(cachedToken);
});

it('caches token #3', async function () {
  const token = await cacheAccessToken();
  expect(token).to.equal(cachedToken);
});
