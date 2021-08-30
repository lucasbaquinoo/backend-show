import express, { Request, Response } from 'express';

const app = express();
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.json({ message: "Ok" })
})

app.listen(3333, () => {
  console.log('🚀 Server stated on port 3333!');
});
