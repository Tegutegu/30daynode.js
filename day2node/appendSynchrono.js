//file append operation in nodejs
var fs = require('fs');
var content = "We are Appending this file synchronously with node.js";
fs.appendFileSync('input.txt', content);
console.log("File Appended Successfully");