import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import connectDB from "./config/connectDb.js";
import routes from "./routes/index.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use(cors());
app.use(helmet());

const PORT = process.env.PORT || 6969;

connectDB();

app.use("/", routes);

app.listen(3000, () => {
  console.log(`Server is running at PORT: ${PORT}`);
});
