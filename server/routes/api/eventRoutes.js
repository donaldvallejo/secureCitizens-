const router = require("express").Router();
const { getOneEvent, getOneEventAdmin, getAllEvents, getAllEventsAdmin, addEvent, removeEvent, editEvent, getDatesOnly, getAttendingEvent, addAttendee, removeAttendee } = require("../../controllers").eventController;
const { authMiddleWare } = require("../../utils/auth");
router
    .route('/')
    .get(getAllEvents)
    .post(authMiddleWare, addEvent)

router
    .route('/admin')
    .get(authMiddleWare, getAllEventsAdmin)

router
    .route('/:id/admin')
    .get(authMiddleWare, getOneEventAdmin)

router
    .route('/:id')
    .get(getOneEvent)
    .put(authMiddleWare, editEvent)
    .delete(authMiddleWare, removeEvent)


router
    .route('/dates')
    .get(getDatesOnly)

router
    .route('/addattendee/:eventId/:studentId')
    .put(authMiddleWare, addAttendee)
router
    .route('/removeattendee/:eventId/:studentId')
    .put(authMiddleWare, removeAttendee)

router
    .route('/attending/:studentId')
    .get(getAttendingEvent)



module.exports = router;