import { randomUUIDv7, SQL } from "bun";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";

const pg = new SQL({
  hostname: process.env.POSTGRES_HOSTNAME,
  port: process.env.POSTGRES_PORT,
  database: process.env.POSTGRES_DATABASE,
  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
});

(async () => {
  await pg`CREATE TABLE IF NOT EXISTS todos (
    todo_id UUID PRIMARY KEY DEFAULT uuidv7(),
    title TEXT NOT NULL
  );`;

  await pg`INSERT INTO todos (title) SELECT 'Learn JavaScript' WHERE NOT EXISTS (SELECT 1 FROM todos WHERE title = 'Learn JavaScript');`;
  await pg`INSERT INTO todos (title) SELECT 'Learn React' WHERE NOT EXISTS (SELECT 1 FROM todos WHERE title = 'Learn React');`;
  await pg`INSERT INTO todos (title) SELECT 'Build a project' WHERE NOT EXISTS (SELECT 1 FROM todos WHERE title = 'Build a project');`;
})();

const app = new Hono();

export const customLogger = (message: string, ...rest: string[]) => {
  console.log(message, ...rest);
};

app.use(logger(customLogger));

app.use("*", cors());

app.get("/todos", async (c) => {
  const rows = await pg`SELECT * FROM todos`;

  return c.json(rows);
});

app.post("/todos", async (c) => {
  const newTodo = (await c.req.json()) as { title: string };

  customLogger(`Incoming request for new todo with title: ${newTodo.title}`);

  if (newTodo.title.length > 140) {
    customLogger(
      `Error: Title too long with ${newTodo.title.length} characters!`,
    );
    return c.json({ error: "too long" }, 400);
  }

  const [savedTodo] =
    await pg`INSERT INTO todos (title) VALUES (${newTodo.title}) RETURNING *`;

  return c.json(savedTodo);
});

export default {
  port: process.env.PORT ?? 3000,
  fetch: app.fetch,
};
