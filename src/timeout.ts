// Create timer that will print hello world after 1 second
setTimeout(() => console.log("Hello, World!"), 1000);

// Cancel a timer after it has been created
const timerId = setTimeout(() => console.log("No!"), 1000);
clearTimeout(timerId);

// Careful this is an infinite loop! Don't do this!
setInterval(() => console.log("Hey!"), 1000);

// Intervals can be cancelled
const intervalId = setInterval(() => console.log("Nope"), 1000);
clearInterval(intervalId);