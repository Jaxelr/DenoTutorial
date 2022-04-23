import { serve } from "https://deno.land/std@0.114.0/http/server.ts";

function handler(_req: Request): Response {

  // Set up a variable to store the timer
  let timer: number | undefined = undefined;
  const body = new ReadableStream({

    // This function is called when the stream is first opened
    // It will emit a chunk of data every second
    start(controller) {
      timer = setInterval(() => {
        const message = `It is ${new Date().toISOString()}\n`;
        console.log(message);
        controller.enqueue(new TextEncoder().encode(message));
      }, 1000);
    },

    // If the stream is closed cancel the interval
    cancel() {
      if (timer !== undefined) {
        clearInterval(timer);
      }
    },
  });

  // Return a response with the stream as the body
  return new Response(body, {
    headers: {
      "content-type": "text/plain",
      "x-content-type-options": "nosniff",
    },
  });
}

console.log("Listening on http://localhost:8000");
serve(handler);