var mongoose = require('mongoose')
var Schema = mongoose.Schema

var newsSchema = new Schema({
	key: String,
	title: String,
	desc: String,
	img: String
}, {
	timestamps: true
})

var News = mongoose.model('News', newsSchema)

module.exports = News
