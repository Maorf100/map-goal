import express, { Request, Response } from 'express';

const port = 3000;
const app = express();

app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
