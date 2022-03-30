setTimeout(() => console.log("Hello, World!"), 1000);

const timerId = setTimeout(() => console.log("No!"), 1000);
clearTimeout(timerId);

/* Careful this is an infinite loop! */
setInterval(() => console.log("Hey!"), 1000);

const intervalId = setInterval(() => console.log("Nope"), 1000);
clearInterval(intervalId);