mongo.connect(new_db , function(error , db){
	if (error){
		throw error;
	}
	
	db.collection("details").find({}).toArray( (err , collection) => {
		if(err) throw err;
		console.log("Record Read successfully");
		console.log(collection);
		db.close();
	});
});