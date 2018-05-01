var mongoose = require("mongoose"),
Schema = mongoose.Schema,
objectId = mongoose.Schema.ObjectId;

var personSchema = new Schema({
_id: { type:  objectId  , auto: true },
name: { type: String, required: true },
contactNo: { type: String, required: true },
job: { type: String, required: true },
address: { type: String, required: true },

}, {
versionKey: false
});

var person = mongoose.model('person', personSchema);

module.exports = person;