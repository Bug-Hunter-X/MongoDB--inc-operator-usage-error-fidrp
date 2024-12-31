```javascript
//Correct usage of $inc operator with upsert option
db.collection.updateOne({name:"John"},{$inc:{age:1}},{upsert:true}); //This will create a new document if John does not exist and increase age by 1 if it already exists
```