mongo.connect(new_db ,(error , db) => {
	if (error){
		throw error;
	}

	var query = { name : "Bob" };

	var data = { name : "demotest.com" , mobile : "1234567890" }

	db.collection("details").updateOne(query , data, (err , collection) => {
		if(err) throw err;
		console.log("Record updated successfully");
		console.log(collection);
	});
});
