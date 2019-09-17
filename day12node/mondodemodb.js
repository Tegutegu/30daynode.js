mongo.connect(new_db ,(error , db) => {
	if (error){
		throw error;
	}
	console.log("Database mondodemodb created successfully");
	
	db.close();
});