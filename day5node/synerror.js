connection.on('error', (err) => {
    console.error(err);
});	

//This is the error event which is used
//to handle the error properly
//Synchronous file system uses 'throw' to report errors