var mongoose = require('mongoose')
var Schema = mongoose.Schema

var userSchema = new Schema({
	key: String,
	username: String,
	email: String,
	avatar: String,
	hash: String
}, {
	timestamps: true
})

var User = mongoose.model('User', userSchema)

module.exports = User
