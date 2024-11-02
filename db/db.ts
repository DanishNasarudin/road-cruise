import { config } from "dotenv";
import { drizzle } from "drizzle-orm/neon-serverless";
import * as schema from "./schema";

config({ path: ".env" });

const { DATABASE_URL } = process.env;

const db = drizzle(DATABASE_URL!, { schema });

export default db;
