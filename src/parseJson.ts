const text = `{
    "hello": "world",
    "numbers": [1, 2, 3]
  }`;
  
// built-in json parser
const data = JSON.parse(text);
console.log(data.hello);
console.log(data.numbers.length);

const obj = {
    hello: "world",
    numbers: [1, 2, 3],
};

// built-in json stringifier
const json = JSON.stringify(obj);
console.log(json);

// built-in json stringifier with indentation
const json2 = JSON.stringify(obj, null, 2);
console.log(json2);
