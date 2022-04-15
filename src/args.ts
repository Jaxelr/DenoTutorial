import { parse } from "https://deno.land/std@0.119.0/flags/mod.ts";

// Get the list of arguments passed to the program
const name = Deno.args[0];
const food = Deno.args[1];
console.log(`Hello ${name}, I like ${food}!`);

// You need to parse the arguments from the file 
const flags = parse(Deno.args, {
  boolean: ["help", "color"],
  string: ["version"],
  default: { color: true },
});
console.log("Wants help?", flags.help);
console.log("Version:", flags.version);
console.log("Wants color?:", flags.color);

// All arguments not recognized as flags
console.log("Other:", flags._);