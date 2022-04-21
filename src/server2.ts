import { listenAndServe } from "https://deno.land/std@0.109.0/http/server.ts";
 
const addr = ":8080";

// Http server needs a handler function
// this function is called for every request that comes in
// it works asynchronously
const handler = (request: Request): Response => {
  let body = "Your user--agent is:\n\n";
  body += request.headers.get("user-agent") || "Unknown";
 
  return new Response(body, { status: 200 });
};
 
console.log(`HTTP webserver running. Access it at: http://localhost:8080/`);
await listenAndServe(addr, handler);