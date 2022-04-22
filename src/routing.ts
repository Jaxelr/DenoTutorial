import { serve } from "https://deno.land/std@0.114.0/http/server.ts";

// URL Pattern can be used to match a URL
const BOOK_ROUTE = new URLPattern({ pathname: "/books/:id" });

function handler(req: Request): Response {

  const match = BOOK_ROUTE.exec(req.url);

  // If theres a match return the Book Id
  if (match) {
    const id = match.pathname.groups.id;

    console.log(`Return Book Id: ${id}`);

    return new Response(`Book ${id}`);
  }

  // If no match return 404
  console.log(`Returned 404 Not Found`);

  return new Response("Not found (try /books/1)", {
    status: 404,
  });
}

// Start the server on the default port
console.log("Listening on http://localhost:8000");
serve(handler);