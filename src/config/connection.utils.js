const mongoose = require('mongoose');

var env = process.env.NODE_ENV || 'development';
var config = require('../../config')[env]


var MONGO_URL = process.env.MONGO_URL || config.database.HOST
var PORT = process.env.PORT || config.database.PORT;
var DATABASE = process.env.DATABASE || config.database.DB;

const mongo_url = `${MONGO_URL}/${DATABASE}`;
mongoose.set('useCreateIndex', true);
const dbConnection = mongoose.connect(mongo_url,
{
	useNewUrlParser: true,
	useUnifiedTopology: true,
    useCreateIndex: true}
).then(()=>console.log("Database Connected Successfully"))

module.exports = {
	dbConnection: dbConnection,
	PORT: PORT,
	DATABASE: DATABASE	
};