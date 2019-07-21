import { ApolloServer, gql } from 'apollo-server-express';
import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';
import schema from './schema';

import { chats } from './db';

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/_ping', (_req, res) => {
  res.send('pong');
});

app.get('/chats', (_req, res) => {
  res.json(chats);
});

const server = new ApolloServer({ schema });
server.applyMiddleware({
  app,
  path: '/graphql',
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
