import express from "express";
import { MongoClient } from "mongodb";
import * as dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import { foodRouter } from './routers/food.router.js';
import { userRouter } from "./routers/user.router.js";
import { orderRouter } from "./routers/order.router.js";
import { dbconnect } from "./config/database.config.js";
dbconnect();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use(cors());

app.use('/api/foods', foodRouter);
app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);

  app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`);
  });
  