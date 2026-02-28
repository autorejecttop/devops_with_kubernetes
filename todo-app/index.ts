const server = Bun.serve({
  port: process.env.PORT ?? 8080,
  routes: {
    "/": async () => {
      const imageFilePath = "files/image.jpg";
      const imageFetchPath = "https://picsum.photos/1200";
      const maxImageDurationInMicroSeconds = 6000;

      const fileInDir = Bun.file(imageFilePath);

      if (
        !(await fileInDir.exists()) ||
        Date.now() - fileInDir.lastModified >= maxImageDurationInMicroSeconds
      ) {
        const fetchedImage = await fetch(imageFetchPath);
        Bun.write(imageFilePath, fetchedImage);
      }

      return new Response(Bun.file("index.html"));
    },

    "/files/image.jpg": Bun.file("files/image.jpg"),
  },
});

console.log(`Server started in port ${server.port}`);
