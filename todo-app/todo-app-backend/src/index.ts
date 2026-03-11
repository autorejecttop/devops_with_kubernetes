import { randomUUIDv7, SQL } from "bun";
import { Hono } from "hono";
import { cors } from "hono/cors";

const pg = new SQL({
  hostname: process.env.POSTGRES_HOSTNAME,
  port: process.env.POSTGRES_PORT,
  database: process.env.POSTGRES_DATABASE,
  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
});

(async () => {
  await pg`DROP TABLE IF EXISTS todos;`;
  await pg`CREATE TABLE todos (
    todo_id UUID PRIMARY KEY DEFAULT uuidv7(),
    title TEXT NOT NULL
  );`;

  await pg`INSERT INTO todos (title) VALUES ('Learn JavaScript'), ('Learn React'), ('Build a project');`;
})();

const app = new Hono();

app.use("*", cors());

app.get("/todos", async (c) => {
  const rows = await pg`SELECT * FROM todos`;

  return c.json(rows);
});

app.post("/todos", async (c) => {
  const newTodo = (await c.req.json()) as { title: string };

  const [savedTodo] =
    await pg`INSERT INTO todos (title) VALUES (${newTodo.title}) RETURNING *`;

  return c.json(savedTodo);
});

export default {
  port: process.env.PORT ?? 3000,
  fetch: app.fetch,
};
