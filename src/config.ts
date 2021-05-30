import { cleanEnv, port, str } from "envalid";
import dotenv from "dotenv";

dotenv.config();

export const config = cleanEnv(process.env, {
  PORT: port({ default: 5000 }),
  MONGO_URI: str(),
});
