//figure out which set of database credentials to return
if (process.env.NODE_ENV === 'production') {
	// in production, return prod set of database credentials
	module.exports = {
		database: process.env.MONGO_URI
	}
}else {
	// in development, return development database credentials
	module.exports = {
		database: 'mongodb://localhost:27017/nodekb',
		secret: 'yoursecret'
	};
}