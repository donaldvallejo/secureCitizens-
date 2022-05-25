const { Event } = require("../models");

const eventSortOption = {
    startTime: 1,
};

async function retrieveEvents() {
    try {
        const events = await Event.find({}).populate('attendees');
        return events;
    } catch (err) {
        console.error(err);
        return { err, message: "there was an error" };
    }
}

const eventController = {
    getAllEventsAdmin: async function (req, res) {
        try {
            const events = await Event.find({}).populate('attendees', '_id studentName');
            res.status(200).json(events);
        } catch (err) {
            res.status(500).send({ err, message: "There was an error" });
        }
    },
    getAllEvents: async function (req, res) {
        try {
            const events = await Event.find({}).select('-__v -attendees').sort(eventSortOption);
            res.status(200).json(events)
        } catch (err) {
            res.status(500).send({ err, message: "There was an error" })
        }
    },
    getOneEventAdmin: async function (req, res) {
        try {
            const eventId = req.params.id;
            const oneEvent = await Event.findById(eventId).populate('attendees');

            res.status(200).json(oneEvent);
        } catch (err) {
            res.status(500).send({ err, message: "There was an error" });

        }
    },
    getOneEvent: async function (req, res) {
        try {
            const eventId = req.params.id;
            const oneEvent = await Event.findById(eventId).populate('attendees', '_id studentName');
            res.status(200).json(oneEvent);
        } catch (err) {
            res.status(500).send({ err, message: "There was an error" });

        }
    },
    addEvent: async (req, res) => {

        try {
            const newEvent = await Event.create(req.body);
            // get all events (including new) and return
            const allEvents = await retrieveEvents();
            res.status(200).json(allEvents);

        } catch (err) {
            console.error(err)
            res.status(500).send({ err, message: "There was an error" });

        }
    },
    editEvent: async function (req, res) {
        try {
            const updatedEvent = await Event.findByIdAndUpdate(req.params.id, req.body)

            // get all events (including updated) and return
            const allEvents = await retrieveEvents();
            res.status(200).json(allEvents);

        } catch (err) {
            res.status(500).send({ err, message: "There was an error" });

        }
    },
    removeEvent: async function (req, res) {
        try {
            const deletedEvent = await Event.findByIdAndDelete(req.params.id)

            // get all events (excluding deleted) and return
            const allEvents = await retrieveEvents();
            res.status(200).json(allEvents);

        } catch (err) {
            res.status(500).send({ err, message: "There was an error" });

        }
    },
    getDatesOnly: async function (req, res) {
        //console.log("in the dates route");
        try {
            const allDates = await Event.find({}, 'startTime endTime');
            console.log("server side: \n", { allDates });

            res.status(200).json(allDates);

        } catch (err) {
            res.status(500).send({ err, message: "There was an error" });
        }
    },
    addAttendee: async function (req, res) {
        //console.log("in addAttendee\n===================");
        const { studentId, eventId } = req.params;

        //console.log({ studentId, eventId })
        try {
            const updatedEvent = await Event.findByIdAndUpdate(eventId, {
                $addToSet: { attendees: studentId }
            },
                { new: true }
            );

            // get all events (including updated) and return
            const allEvents = await retrieveEvents();
            res.status(200).json(allEvents);


        } catch (err) {
            res.status(500).send({ err, message: "There was an error" });

        }
    },
    removeAttendee: async function (req, res) {
        //console.log("in removeAttendee\n===================")
        const { studentId, eventId } = req.params;

        //console.log({ studentId, eventId });
        try {
            const updatedEvent = await Event.findByIdAndUpdate(eventId, {
                $pull: { attendees: studentId }
            },
                { new: true }
            );

            // get all events (including updated) and return
            const allEvents = await retrieveEvents();
            res.status(200).json(allEvents);


        } catch (err) {
            res.status(500).send({ err, message: "There was an error" });

        }
    },
    getAttendingEvent: async function (req, res) {
        //console.log("retrieving this student's event:\n===============")
        const { studentId } = req.params;
        //console.log({ studentId })
        try {
            const studentEvent = await Event.find({ attendees: studentId });

            res.status(200).json(studentEvent);

        } catch (err) {
            console.log({ err })
            res.status(500).json({ err, message: "There was a server error..." });
        }
    }
}

module.exports = eventController;