```javascript
//Incorrect usage of $inc operator in MongoDB update operation.
db.collection.updateOne({name:"John"},{$inc:{age:1}}); //This will increase the age by 1 only if the document exists
db.collection.updateOne({name:"John"},{$inc:{age:1}},{upsert:true}); //This will create a new document if John does not exist and increase age by 1 if it already exists
```