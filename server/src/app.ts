import express from 'express';

const app: express.Application = express();

app.use(express.json());

app.get('/', (req: express.Request, res: express.Response) => {
  res.status(200).send('hello world');
});

export default app;