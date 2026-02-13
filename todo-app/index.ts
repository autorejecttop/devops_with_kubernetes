import indexPage from "./index.html";

const server = Bun.serve({
  port: process.env.PORT ?? 8080,
  routes: {
    "/": indexPage,
  },
});

console.log(`Server started in port ${server.port}`);
