const server = Bun.serve({
    port: 5000,
    async fetch(request) {
      const data = await request.text()
      console.log(data);

      return new Response("Hello there");
    },
  });
  
  console.log(`Listening on localhost: ${server.port}`);