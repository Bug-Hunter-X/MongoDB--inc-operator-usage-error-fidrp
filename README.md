# MongoDB $inc operator usage error
This example demonstrates an incorrect usage of the MongoDB `$inc` operator within an update operation. The primary issue lies in not utilizing the `upsert` option, which is crucial to handling cases where a document might not yet exist.  This can lead to potential data loss or unintended inconsistencies in your data.

## Issue
When using `db.collection.updateOne({name:"John"},{$inc:{age:1}})`,  if a document matching `name: "John"` doesn't already exist, the `$inc` operation will simply fail. The intended behavior would be to either create the document or increment its age. This is where the `upsert` option becomes necessary.

## Solution
The solution involves adding the `upsert: true` option in the `updateOne` method as follows:
`db.collection.updateOne({name:"John"},{$inc:{age:1}},{upsert:true})` This way, if the document does not exist, it will be created, and if it exists, its age will be incremented.
