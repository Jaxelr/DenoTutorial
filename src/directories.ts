// Create a directory on the mentioned path
// if it does exist, it will give an error
await Deno.mkdir("new_dir");

//Create a directory recursively
await Deno.mkdir("./dir/dir2/subdir", { recursive: true });

// Remove a directory
await Deno.remove("./new_dir");

// Remove a directory recursively
await Deno.remove("./dir", { recursive: true });

// Synchronous versions
Deno.mkdirSync("new_dir");
Deno.removeSync("new_dir");