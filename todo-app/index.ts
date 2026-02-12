const server = Bun.serve({
  port: process.env.PORT ?? 8080,
  routes: {
    "/": new Response("OK"),
  },
});

console.log(`Server started in port ${server.port}`);
