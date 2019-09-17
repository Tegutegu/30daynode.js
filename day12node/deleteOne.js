mongo.connect(new_db ,(error , db) => {
	if (error){
		throw error;
	}

	var query = { age : "above 22" };
	
	
	db.collection("details").deleteOne(query , (err , collection) => {
		if(err) throw err;
		console.log(collection.result.n + " Record(s) deleted successfully");
		console.log(collection);
		db.close();
	});
});