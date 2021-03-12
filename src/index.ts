import 'dotenv/config';
import app from './app';

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  // tslint:disable-next-line:no-console
  console.log(`server listening on port ${PORT}`);
});