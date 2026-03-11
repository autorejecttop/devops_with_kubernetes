import { SQL } from "bun";

const pg = new SQL({
  hostname: process.env.POSTGRES_HOSTNAME,
  port: process.env.POSTGRES_PORT,
  database: process.env.POSTGRES_DATABASE,
  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
});

await pg`CREATE TABLE IF NOT EXISTS counter (
  counter_id SERIAL PRIMARY KEY,
  counter INT NOT NULL
);`;

await pg`INSERT INTO counter(counter) SELECT 0 WHERE NOT EXISTS (SELECT 1 FROM counter WHERE counter_id = 1)`;

const server = Bun.serve({
  port: process.env.PORT ?? 8080,
  routes: {
    "/pingpong": async () => {
      const rows =
        await pg`SELECT * FROM counter c WHERE c.counter_id=1`.values();
      const counter = rows[0][1];

      const updatedCounter: number = counter + 1;

      await pg`UPDATE counter c SET counter = ${updatedCounter} WHERE c.counter_id=1 `;

      return new Response(updatedCounter.toString());
    },
    "/pings": async () => {
      const rows =
        await pg`SELECT * FROM counter c WHERE c.counter_id=1`.values();
      const counter = rows[0][1];

      const updatedCounter: number = counter + 1;

      await pg`UPDATE counter c SET counter = ${updatedCounter} WHERE c.counter_id=1 `;

      return new Response(updatedCounter.toString());
    },
  },
});

console.log(`Server started in port ${server.port}`);
