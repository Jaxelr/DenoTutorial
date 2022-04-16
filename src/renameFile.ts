//Rename a file in the current directory
await Deno.writeTextFile("./rename.txt", "Hello World!");
await Deno.rename("./rename.txt", "./rename-renamed.txt");

console.log(await Deno.readTextFile("./rename-renamed.txt"));

// Synchronous version
Deno.renameSync("./rename-renamed.txt", "./rename-again.txt");

//If a file already exists, it will be overwritten
await Deno.writeTextFile("./rename.txt", "Invisible content.");
await Deno.rename("./rename-again.txt", "./rename.txt");
console.log(await Deno.readTextFile("./rename.txt"));

// If the path doesnt exists it will catch the error
try {
    await Deno.rename("./rename.txt", "./does/not/exist");
  } catch (err) {
    console.error(err);
}

// Cleanup
await Deno.remove("./rename.txt");