var mongoose = require('mongoose');

var Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId;
	
Document = new Schema({
	properties: ['title', 'data', 'tags'],
	indexes: ['title']
});

mongoose.model('Document', Document);

exports.Document = function(db) {
	return db.model('Document');
};