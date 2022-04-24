//Taken from https://examples.deno.land/color-logging

// CSS Support
console.log("%cHello World", "color: red");

// Background Color
console.log("%cHello World", "background-color: blue");

// Text Decorations
console.log("%cHello World", "text-decoration: underline");
console.log("%cHello World", "text-decoration: line-through");

// Font Weight
console.log("%cHello World", "font-weight: bold");

// Multiple CSS Properties
console.log("%cHello World", "color: red; font-weight: bold");

// Manage multiple values
console.log("%cHello %cWorld", "color: red", "color: blue");

// RGB Color are also supported
console.log("%cHello World", "color: #FFC0CB");
console.log("%cHello World", "color: rgb(255, 192, 203)");