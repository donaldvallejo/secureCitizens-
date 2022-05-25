const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const maxCap = 12;

const EventSchema = new Schema({
    startTime: { type: Date, required: true },
    endTime: {
        type: Date,
        required: true,
        validate: {
            validator: function (x) {
                return this.startTime < x
            },
            message: 'Start time/date must be before End time/date',
        },
    },
    name: { type: String, required: true },
    description: { type: String, required: true },
    // location: {
    //     address1: { type: String },
    //     address2: { type: String },
    //     city: { type: String },
    //     state: { type: String },
    //     zip: { type: String }
    // },
    attendees: {
        type: [
            {
                type: mongoose.Types.ObjectId,
                ref: 'Student',
            },
        ],
        validate: [eventCapacityLimit, 'This Event has reached its maximum attendance'],
    },
});

// aux function checking at least one option is selected
function eventCapacityLimit(val) {
	return val.length <= maxCap;
}


const Event = mongoose.model("Event", EventSchema);

module.exports = Event;