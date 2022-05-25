const router = require("express").Router();
const { authMiddleWare } = require("../../utils/auth");
const { updateUserText, getUserText } = require('../../controllers').userTextController

router
    .route("/")
    .get(getUserText)
    .put(authMiddleWare, updateUserText)



module.exports = router