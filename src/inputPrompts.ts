// Alert & acknowledge
alert("Please acknowledge the message.");
console.log("The message has been acknowledged.");

// Ask for user confirmation
const shouldProceed = confirm("Do you want to proceed?");
console.log("Should proceed?", shouldProceed);

// Prompt user for input
const name = prompt("Please enter your name:");
console.log("Name:", name);

// Specify a default value from prompt
const age = prompt("Please enter your age:", "18");
console.log("Age:", age);