import file from "./version.json" assert { type: "json" };
console.log(`version is ${file.version}`);

const module = await import("./version.json", {
  assert: { type: "json" },
});

console.log(`module version is ${module.default.version}`);