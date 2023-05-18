import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import itemsRouter from './routes/items';
import userRouter from "./routes/user"
import helpRouter from "./routes/help"
import connectDB from './database/connection';

const app = express();
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
connectDB();

app.use("/items", itemsRouter)
app.use("/user",userRouter)
app.use("/help", helpRouter)


app.listen(port, () => {
  console.log(`app listening at ${process.env.url}`);
});
