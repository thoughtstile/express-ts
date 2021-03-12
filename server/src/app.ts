import express from 'express';
import cors from 'cors';

const app: express.Application = express();

app.use(express.json());
app.use(cors());

app.get('/', (req: express.Request, res: express.Response) => {
  res.status(200).send('hello world');
});

export default app;
