import { rest } from 'msw';
import { setupServer } from 'msw/node';

import user, { userErrorCredentials, userError } from '../src/mocks/user';
import joke from '../src/mocks/joke';
import { OK, BAD_REQUEST } from '../src/constants/StatusCodes';

export const server = setupServer(
  rest.get('/users/1', (req, res, ctx) => res(
    ctx.status(OK),
    ctx.json(user),
  )),
  rest.get('/random', (req, res, ctx) => res(
    ctx.json(joke),
  )),
  rest.post('/auth/login', async (req, res, ctx) => {
    const { username } = await req.json();
    const isError = username === userErrorCredentials.username;
    return res(
      ctx.status(isError ? BAD_REQUEST : OK),
      ctx.json(username === userErrorCredentials.username ? userError : user),
    );
  }),
);

export const initServer = () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());
};
