import dotenv from "dotenv";
dotenv.config();

import { Pool } from "pg";

const pool = new Pool({
  user: process.env.POSTGREE_USER,
  password: process.env.POSTGREE_PASSWORD,
  host: process.env.POSTGREE_HOST,
  database: process.env.POSTGREE_DATA,
  port: process.env.POSTGREE_PORT as unknown as number,
});

export default pool;
