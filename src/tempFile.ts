// Make temp file creates a temp file on the temp directory
const tempFilePath = await Deno.makeTempFile();

console.log("Temp file path:", tempFilePath);

await Deno.writeTextFile(tempFilePath, "Hello world!");
const data = await Deno.readTextFile(tempFilePath);

console.log("Temp file data:", data);

// Cleanup
await Deno.remove(tempFilePath);

// You can specify a custom prefix and suffix
const tempFilePath2 = await Deno.makeTempFile({
    prefix: "logs_",
    suffix: ".txt",
  });

console.log("Temp file path 2:", tempFilePath2);

// Cleanup
await Deno.remove(tempFilePath2);

// Use custom directory to store files
await Deno.mkdir("./tmp", { recursive: true });
const tempFilePath3 = await Deno.makeTempFile({
  dir: "./tmp",
});

console.log("Temp file path 3:", tempFilePath3);

// Cleanup
await Deno.remove(tempFilePath3);

// Make temp directory
const tempDirPath = await Deno.makeTempDir();

console.log("Temp dir path:", tempDirPath);

// Cleanup
await Deno.remove(tempDirPath);

// With the same features as temp file
const tempDirPath2 = await Deno.makeTempDir({
    prefix: "logs_",
    suffix: "_folder",
    dir: "./tmp",
  });

console.log("Temp dir path 2:", tempDirPath2);

// Cleanup
await Deno.remove(tempDirPath2);


// Synchronous version
const tempFilePath4 = Deno.makeTempFileSync();
const tempDirPath3 = Deno.makeTempDirSync();

console.log("Temp file path 4:", tempFilePath4);
console.log("Temp dir path 3:", tempDirPath3);

// Cleanup
await Deno.remove(tempFilePath4);
await Deno.remove(tempDirPath3);

