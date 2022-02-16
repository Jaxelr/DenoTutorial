# Deno tutorial

These are sample commands im learning for deno, taken from [this article](https://blog.appsignal.com/2022/02/09/an-introduction-to-deno-is-it-better-than-nodejs.html)


Basic Commands:

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