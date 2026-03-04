import { FC } from "hono/jsx";
import { Todo } from "../../types";

export const HomePage: FC<{ todos: Todo[] }> = (props: { todos: Todo[] }) => {
  return (
    <>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Simple HTML Page</title>
        </head>
        <body>
          <h1>The project App</h1>
          <img
            src="/files/image.jpg"
            width="300"
            height="300"
            alt="Random Image"
          />

          <br />

          <form method="post" action="">
            <input
              type="text"
              id="newTodoTitle"
              name="newTodoTitle"
              maxlength={140}
            />
            <button>Create todo</button>
          </form>

          <ul>
            {props.todos.map((todo) => (
              <li>{todo.title}</li>
            ))}
          </ul>

          <p>DevOps with Kubernetes 2026</p>
        </body>
      </html>
    </>
  );
};

export default HomePage;
