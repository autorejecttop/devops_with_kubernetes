import { Hono } from "hono";
import HomePage from "./app/ui/HomePage";
import { Todo } from "./types";
import { html } from "hono/html";

const app = new Hono();

app.get(`/${process.env.IMAGE_FILE_PATH}`, (c) => {
  return new Response(Bun.file(`./${process.env.IMAGE_FILE_PATH}`));
});

app.get("/", async (c) => {
  const imageFilePath = process.env.IMAGE_FILE_PATH!; // MUST EXISTS, FAILS IF IT DOESN'T
  const imageFetchPath = process.env.IMAGE_FETCH_PATH!; // MUST EXISTS, FAILS IF IT DOESN'T
  const maxImageDurationInMicroSeconds = 600000;

  const fileInDir = Bun.file(imageFilePath);

  if (
    !(await fileInDir.exists()) ||
    Date.now() - fileInDir.lastModified >= maxImageDurationInMicroSeconds
  ) {
    const fetchedImage = await fetch(imageFetchPath);
    Bun.write(imageFilePath, fetchedImage);
  }

  const todos: Todo[] = await (
    await fetch(`${process.env.BACKEND_SERVICE_URL}/todos`)
  ).json();

  return c.html(
    html` <!DOCTYPE html>
      ${(<HomePage todos={todos} imageUrl={`/${imageFilePath}`} />)}`,
  );
});

app.post("/", async (c) => {
  const formData = await c.req.formData();
  const newTodoTitle = formData.get("newTodoTitle");

  await fetch(`${process.env.BACKEND_SERVICE_URL}/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: newTodoTitle,
    }),
  });

  return c.redirect("/");
});

export default {
  port: process.env.PORT ?? 3000,
  fetch: app.fetch,
};
