import { Hono } from "hono";
import HomePage from "./app/ui/HomePage";
import { Todo } from "./types";
import { html } from "hono/html";

const app = new Hono();

app.get("/files/image.jpg", (c) => {
  return new Response(Bun.file("./files/image.jpg"));
});

app.get("/", async (c) => {
  const imageFilePath = "files/image.jpg";
  const imageFetchPath = "https://picsum.photos/1200";
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
    await fetch("http://todo-app-backend-service:2345/todos")
  ).json();

  return c.html(
    html` <!DOCTYPE html>
      ${(<HomePage todos={todos} />)}`,
  );
});

app.post("/", async (c) => {
  const formData = await c.req.formData();
  const newTodoTitle = formData.get("newTodoTitle");

  await fetch("http://todo-app-backend-service:2345/todos", {
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

export default app;
