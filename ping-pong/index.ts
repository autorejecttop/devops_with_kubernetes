let counter = 0;

const server = Bun.serve({
  port: process.env.PORT ?? 8080,
  routes: {
    "/pingpong": () => {
      const response = new Response(`pong ${counter}`);
      counter += 1;

      return response;
    },
  },
});

console.log(`Server started in port ${server.port}`);
