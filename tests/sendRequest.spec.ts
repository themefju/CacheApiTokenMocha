import { expect } from 'chai';
import { sendGetRequest } from '../utils/sendRequest';
import { AnimalsResponse } from '../utils/types';

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
