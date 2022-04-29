// json files can be imported but you need to specify the type json
import file from "./version.json" assert { type: "json" };

console.log(`version is ${file.version}`);

// dynamic import are also supported
const module = await import("./version.json", {
  assert: { type: "json" },
});

console.log(`module version is ${module.default.version}`);