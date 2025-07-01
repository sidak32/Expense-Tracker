import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./database/db.js";

dotenv.config({}); //environment variables detect

const app = express();
const PORT = 8000;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const corsOptions = {
  origin: "http://localhost:5173", //React Vite port no
  credentials: true,
};
app.use(cors(corsOptions));

app.listen(PORT, () => {
  connectDB();
  console.log(`Server listen at ${PORT}`);
});
