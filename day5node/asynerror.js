var fs=require('fs');

fs.readFile('message.txt', (err, data) => {
	if (err) 
		return console.error(err);
		
	console.log("Content :  " + data);
});

///Asynchronously error message 
///will show if file can not be found
///or do not have permissions