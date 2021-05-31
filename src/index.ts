import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import studentRoutes from "./routes/student";
import questionRoutes from "./routes/question";
import { config } from "./config";
const { MONGO_URI, PORT } = config;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/api/student", studentRoutes);
app.use("/api/question", questionRoutes);
app.use(cors);
const start = async () => {
  console.log("Connecting to database...");
  await mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Database is connected !");
  await app.listen(PORT);
  console.log(`Server started , listining on port  ${PORT}`);
};

start();
