import 'dotenv/config';
import postgres from 'postgres';

let { PGHOST, PGDATABASE, PGPAYSANDU, PGPASSWORD } = process.env;

const sql = postgres({
  host: PGHOST,
  database: PGDATABASE,
  username: PGPAYSANDU,
  password: PGPASSWORD,
  port: 5432,
  ssl: false,
});

export { sql };