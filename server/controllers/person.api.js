var express = require("express"),
router = express.Router(),
person = require("../models/person.js");

router.get("/", function(req, res) {
person.find({}, function(err, data) {
if (err) {
res.send("error");
return;
}
res.send(data);
});
}).get("/:id", function(req, res) {
var id = req.params.id;
person.find({ _id: id }, function(err, data) {
if (err) {
res.send("error");
return;
}
res.send(data[0]);
});
}).post("/", function(req, res) {
var obj = req.body;
var model = new person(obj);
model.save(function(err) {
if (err) {
res.send("error");
return;
}
res.send("created");
});
}).put("/:id", function(req, res) {
var id = req.params.id;
var obj = req.body;

person.findByIdAndUpdate(id, { name: obj.name, contactNo: obj.contactNo,job: obj.job, address: obj.address  }, 
function(err) {
if (err) {
res.send("error");
return;
}
res.send("updated");
});
}).delete("/:id", function(req, res) {
var id = req.params.id;
person.findByIdAndRemove(id, function(err) {
if (err) {
res.send("error");
return;
}
res.send("deleted");
});
});

module.exports = router;