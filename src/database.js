import { Pool } from "pg/lib";

export const pool = new Pool({
  host: "ec2-3-228-235-79.compute-1.amazonaws.com",
  user: "lizqzlcyjvyimw",
  password: "4cf0f9481ede00dbd49dc44f61e0c7d86095493e4037d81c59e2fc378483680b",
  database: "d3dcjfsk34b3tp",
  port: 5432,
  ssl: { rejectUnauthorized: false },
});
