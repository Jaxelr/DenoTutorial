import { Application } from './src/deps.ts';
 
const app = new Application();
 
app.use((ctx) => {
  ctx.response.body = "Hello Deno!";
});
 
app.addEventListener("listen", ({ hostname, port, secure }) => {
  console.log(`${hostname}${secure}`)
  console.log(`Listening on: http://localhost:${port}`);
});
 
await app.listen({ port: 8000 });