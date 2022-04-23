# Deno tutorial

These are sample commands im learning for deno, taken from [this article](https://blog.appsignal.com/2022/02/09/an-introduction-to-deno-is-it-better-than-nodejs.html)


## Basic Commands

`deno --help`
`deno info` 

Add typescript configuration usage:
`deno run --config deno.json index.ts`

Run code without typescript check:
`deno run --no-check index.ts`

Download information from the web (allow net connections):
`deno run --allow-net covid.ts`

Run a simple server using Oak dependency:
`deno run --no-check --allow-net server.ts`

Run a simple server using http dependency:
`deno run --no-check --allow-net server2.ts`

Import an npm library in deno:
`deno run importNpm.ts`

Use the Repl:
`deno repl`

Run attaching the file watcher:
`deno run --no-check --allow-net --watch server2.ts`

Compiling apps:
`$ deno compile --allow-net --output hello index.ts`

Bundling from typescript to javascript:
`deno bundle index.ts index.bundle.js` then `deno run --no-check index.bundle.js`

Running unit tests, it automatically regexes any file with *_test.ts || *.test.ts:
`deno test --no-check`

## Examples

Deno supports css using the %c syntax on logs:
`deno run colors.ts`

Import info from another file:
`deno run import.ts`

Import multiple exports dependencies from a single file:

`deno run --no-check management.ts`

Import json file from file system:

`deno run --allow-read  importJson.ts`

Parse json data using classic javascript functions:

`deno run parseJson.ts`

Interact with user on cmd line:

`deno run inputPrompts.ts`

Get Process information:

`deno run process.ts`

Interact with Environment variables:

`deno run --allow-env envVar.ts` 

Parse arguments from the command line:

`deno run --no-check  args.ts  Deno Sushi --help --version=1.0.0 --no-color`

Reading files:

`deno run --allow-read readFiles.ts`

Writing files: 

`deno run --allow-read --allow-write --no-check writeFile.ts`

Renaming files:

`deno run --allow-read --allow-write renameFile.ts`

Handling temporary files and directories:

`deno run --allow-read --allow-write tempFile.ts`

Creating and removing directories:

`deno run --allow-read --allow-write directories.ts`

Using the fetch API to make http requests:

`deno run --allow-net fetch.ts`

Run a simple server with routing management:

`deno run --allow-net --no-check routing.ts`

Run a simple web server streaming data:

`deno run --allow-net --no-check streaming.ts`