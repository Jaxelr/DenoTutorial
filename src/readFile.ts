// Read entire file into memory as bytes
const bytes = await Deno.readFile("hello.txt");
console.log(bytes);

// Read file as string
const text = await Deno.readTextFile("hello.txt");

console.log(text);

// Open the file for reading
const file = await Deno.open("hello.txt");

// Read some bytes from the file
const buffer = new Uint8Array(5);
const bytesRead = await file.read(buffer);
console.log(`Read ${bytesRead} bytes`);

// Seek to a known location on the file

const pos = await file.seek(6, Deno.SeekMode.Start);
console.log(`Seeked to position ${pos}`);
const buffer2 = new Uint8Array(2);
const bytesRead2 = await file.read(buffer2);
console.log(`Read ${bytesRead2} bytes`);

// Rewind back to the start of the file
file.seek(0, Deno.SeekMode.Start);

// Close the file
file.close();

// Synchronous read is also available
Deno.readFileSync("hello.txt");
Deno.readTextFileSync("hello.txt");
const f = Deno.openSync("hello.txt");
f.seekSync(6, Deno.SeekMode.Start);
const buf = new Uint8Array(5);
f.readSync(buf);
f.close();
