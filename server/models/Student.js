const mongoose = require('mongoose');

const { enums } = require('../utils/variablesDef');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
	studentName: {
		type: String,
		trim: true,
		required: 'Please enter the name of the attendee',
		minlength: 2,
		maxlength: 100,
	},
	gender: {
		type: String,
		required: 'Please select an option for gender',
	},
	// birthday: {
	// 	type: String,
	// 	//required: 'Please enter a birth date',
	// },
	age: {
		type: Number,
		required: true, 
	},
	experience: {
		type: String,
		trim: true,
	},
	instrumentsPlayed: {
		type: String,
		trim: true,
	},
	instrumentsToPlay: {
		type: [
			{
				type: String,
			},
		],
		validate: [atLeastOneLimit, 'Please select an instrument'],
	},
	sing: {
		type: String,
		enum: enums.sing,
		required: true,
	},
	weeksInterested: {
		type: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Event',
			},
		],
		validate: [atLeastOneLimit, 'Please select a week'],
	},
	howHear: {
		type: String,
	},
	howHearDetails: {
		type: String,
		maxlength: 1000,
	},
	parentNames: {
		parent1: {
			type: String,
			minlength: 2,
			//maxlength: 100,
			required: 'Please enter a parent/guardian name',
		},
		parent2: {
			type: String,
			//maxlength: 100,
		},
	},
	email: {
		type: String,
		match: [/.+@.+\..+/, 'Must match an email address'],
		maxlength: 255,
	},
	contactNumbers: {
		phone1: {
			type: String,
			match: [/\d{3}-\d{3}-\d{4}/, 'Must match a valid phone number'],
		},
		phone2: {
			type: String,
			match: [/\d{3}-\d{3}-\d{4}/, 'Must match a valid phone number'],
		},
	},
	emergencyContacts: {
		emC1Name: {
			type: String,
			trim: true,
			minlength: 2,
			maxlength: 100,
			required: 'Please enter an emergency contact name',
		},
		emC1Relationship: {
			type: String,
			trim: true,
		},
		emC1Ph: {
			type: String,
			match: [/\d{3}-\d{3}-\d{4}/, 'Must match a valid phone number'],
			required: true,
		},
		emC2Name: {
			type: String,
			trim: true,
			maxlength: 100,
		},
		emC2Relationship: {
			type: String,
			trim: true,
		},
		emC2Ph: {
			type: String,
			match: [/\d{3}-\d{3}-\d{4}/, 'Must match a valid phone number'],
		},
	},
	physicianContact: {
		name: {
			type: String,
			trim: true,
			maxlength: 100,
		},
		phone: {
			type: String,
			match: [/\d{3}-\d{3}-\d{4}/, 'Must match a valid phone number'],
		},
	},
	medical: {
		conditions: {
			type: String,
			trim: true,
		},
		medications: {
			type: String,
			trim: true,
		},
	},
	liabilityCheck: {
		type: Boolean,
		validate: {
			validator: function (value) {
				return value === true;
			},
			message: 'Please mark that you have read and agree to the release of liability',
		},
		required: 'Please mark that you have read and agree to the release of liability',
	},
	dateCompleted: {
		type: Date,
		required: true,
		default: new Date(),
	},
	signature: {
		type: String,
		required: 'Please provide a signature',
	},
	venmo: {
		type: String,
		trim: true,
		required: function () {
			return this.paymentMethod === 'Venmo';
		},
		maxlength: 255,
	},
	paymentMethod: {
		type: String,
		required: true,
	},
	isApproved: {
		type: Boolean,
		required: true,
		default: false,
	},
	hasPaid: {
		type: Boolean,
		required: true,
		default: false,
	},
});

// aux function checking at least one option is selected
function atLeastOneLimit(val) {
	return val.length > 0;
}

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
