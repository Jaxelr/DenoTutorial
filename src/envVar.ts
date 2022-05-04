// These can be access only with the --allow-env flag

// Read environment variable
const PORT = Deno.env.get("PORT");
console.log("PORT:", PORT);

// Get object reading all environment variables
const env = Deno.env.toObject();
console.log("env:", env);

// Set environment variable, only affects the current process
Deno.env.set("MY_PASSWORD", "123456");

// Unset environment variable
Deno.env.delete("MY_PASSWORD");

//Enrivonment variables are case-sensitive on unix-like systems, 
// but not on Windows.
Deno.env.set("MY_PASSWORD", "123");
Deno.env.set("my_password", "456");
console.log("UPPERCASE:", Deno.env.get("MY_PASSWORD"));
console.log("lowercase:", Deno.env.get("my_password"));