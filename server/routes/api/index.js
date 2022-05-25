const router = require("express").Router();
const studentRoutes = require("./studentRoutes");
const adminRoutes = require("./adminRoutes")
const eventRoutes = require("./eventRoutes");
const UserTextRoutes = require("./UserTextRoutes")

router.use("/students", studentRoutes);
router.use("/admin", adminRoutes)
router.use("/events", eventRoutes)
router.use("/usertext", UserTextRoutes)

module.exports = router;