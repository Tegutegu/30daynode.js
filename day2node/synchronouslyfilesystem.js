var fs = require('fs');
//Name of the file to be read
var filename = 'content.txt'; 
var content = fs.readFileSync(filename);
console.log('Content : ' + content);