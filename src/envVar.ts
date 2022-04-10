const PORT = Deno.env.get("PORT");
console.log("PORT:", PORT);

const env = Deno.env.toObject();
console.log("env:", env);

Deno.env.set("MY_PASSWORD", "123456");

Deno.env.delete("MY_PASSWORD");

Deno.env.set("MY_PASSWORD", "123");
Deno.env.set("my_password", "456");
console.log("UPPERCASE:", Deno.env.get("MY_PASSWORD"));
console.log("lowercase:", Deno.env.get("my_password"));