# todo-app

To install dependencies:

```bash
bun install
```

To run:

```bash
bun start
```

This project was created using `bun init` in bun v1.3.9. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.

## How I completed this exercise

I initialized the project using:

```bash
bun init
```

Edited `package.json` to include the start script:

```json
{
  // ...
  "scripts": {
    "start": "bun index.ts"
  }
  // ...
}
```

Explicitly accessed the `PORT` environment variable in `index.ts` with 8080 as a default

Ran the app using:

```bash
bun start
```
