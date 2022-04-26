// Import things from other files using the import keyword
import { sayHello } from "./util.ts";
sayHello("World");

// Import all things from a file using the *
import * as util from "./util.ts";
util.sayHello("World");

// You can also reference absolute paths or http(s):// URLs
import { VERSION } from "https://deno.land/std/version.ts";
console.log(VERSION);