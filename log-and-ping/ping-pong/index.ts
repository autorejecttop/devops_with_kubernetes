const server = Bun.serve({
  port: process.env.PORT ?? 8080,
  routes: {
    "/pingpong": async () => {
      const file = Bun.file("files/ping-pong.txt");

      const counter = (await file.exists()) ? parseInt(await file.text()) : 1;
      const response = new Response(`pong ${counter}`);

      const updatedCounter = counter + 1;

      Bun.write("files/ping-pong.txt", updatedCounter.toString());

      return response;
    },
  },
});

console.log(`Server started in port ${server.port}`);
