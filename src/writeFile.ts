import { writeAllSync, writeAll } from "https://deno.land/std/streams/conversion.ts";

// Write buffer to file
const bytes = new Uint8Array([71, 111, 111, 100, 98, 121, 101]);
await Deno.writeFile("gbye.txt", bytes, { mode: 0o644 });

// Write string to file
await Deno.writeTextFile("gbye1.txt", "Goodbye World");

//Open a new file for writing
const file = await Deno.create("gbye2.txt");

// Write chunks of data to the file
const written = await file.write(bytes);
console.log(`${written} bytes written.`);

// Make sure the entire buffer is written
await writeAll(file, new TextEncoder().encode(" World!"));

//Close file
file.close();

//Synchronous write
Deno.writeFileSync("gbye3.txt", bytes);
Deno.writeTextFileSync("gbye4.txt", "Goodbye World");
const f = Deno.createSync("gbye5.txt");
writeAllSync(f, new TextEncoder().encode("World!"));
f.close();
