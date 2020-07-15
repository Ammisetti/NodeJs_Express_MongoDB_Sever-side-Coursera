var mongoose = require('mongoose');
var Schmea = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var User = new mongoose.Schema({
    admin: {
        type: Boolean,
        default: false
    }
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);  