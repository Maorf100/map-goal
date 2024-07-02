import express, { Request, Response } from 'express';
import routes from './routes';

const port = 3000;
const app = express();

app.use(express.json());
app.use('/api', routes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
