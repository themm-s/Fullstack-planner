import cors from "cors";
import express from "express";
import mongoose from "mongoose";

import router from "./router";

require('dotenv').config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

const start = async () => {
  try {
    //@ts-ignore
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    app.listen(PORT, () => console.log(`Сервер запустился, его порт ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();