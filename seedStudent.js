const mongoose = require('mongoose'),
	{ Student } = require('./server/models');

const allStudents = [];

mongoose
	.connect('mongodb://127.0.0.1/rockademy_db')
	.then(() => {
		console.log('connect to mongodb');
		return Student.insertMany(allStudents);
	})
	.then((data) => console.log(data))
	.catch((err) => {
		console.error(err.name, err.message);
	});
