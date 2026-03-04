import { randomUUIDv7 } from "bun";
import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono();

export interface Todo {
  id: string;
  title: string;
}

let todos: Todo[] = [
  { id: "019cb40b-84cc-7000-bc1c-8bfb2320dec2", title: "Learn JavaScript" },
  { id: "019cb40b-84cc-7001-94fe-ff3cebdef3ad", title: "Learn React" },
  { id: "019cb40b-84cc-7002-9059-886e663050f1", title: "Build a project" },
];

app.use("*", cors());

app.get("/todos", (c) => {
  return c.json(todos);
});

app.post("/todos", async (c) => {
  const newTodoTitle = (await c.req.json()) as { title: string };

  const newTodo = {
    id: randomUUIDv7(),
    title: newTodoTitle.title,
  };

  todos = todos.concat(newTodo);

  return c.json(newTodo);
});

export default {
  port: process.env.PORT ?? 3000,
  fetch: app.fetch,
};
