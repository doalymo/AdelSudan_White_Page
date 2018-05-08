var mongoose = require('mongoose');
var connection = mongoose.connect('mongodb://<doalymo>:<Doalymo55>@ds016118.mlab.com:16118/person_db');
 
module.exports = connection;