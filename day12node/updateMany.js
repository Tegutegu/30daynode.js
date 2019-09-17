mongo.connect(new_db ,(error , db) => {
	if (error){
		throw error;
	}
	

	var query = { age : {$gt : "22" } };

	var data = { $set : {age : "above 22" } }

	db.collection("details").updateMany(query , data, (err , collection) => {
		if(err) throw err;
		console.log(collection.result.nModified + " Record(s) updated successfully");	
		console.log(collection);
		db.close();
	});
});
	