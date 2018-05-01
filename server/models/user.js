var mongoose = require("mongoose"),
Schema = mongoose.Schema,
//var bcrypt=require("bcrypt-nodejs");
objectId = mongoose.Schema.ObjectId;

var userSchema = new Schema({
_id: { type:  objectId  , auto: true },
userName: { type: String, lowercase: true,required:true,unique:true },
passward: { type: String, required: true },
}, {
versionKey: false
});
userSchema.pre('save',function(next){
var user=this;
bcrypt.hash(user.passward,null,null,function(err,hash)
{
    if(err) return next(err);
    user.passward=hash;
    next();
});
});
userSchema.methods.comparepassward=function(passward){
return bcrypt.compareSync (passward,this.passward);};

var user = mongoose.model('user', userSchema);

module.exports = user;