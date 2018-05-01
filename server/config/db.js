var mongoose = require('mongoose');
var connection = mongoose.connect('mongodb://localhost/person_db');
 
module.exports = connection;