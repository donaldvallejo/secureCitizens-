const router = require("express").Router();
const { adminController: { login, addAdmin, updateAdmin } } = require("../../controllers")
const { authMiddleWare } = require("../../utils/auth")

router
    .post('/login', login)
    .post('/addAdmin', authMiddleWare, addAdmin)
    .put('/:id', authMiddleWare, updateAdmin)

module.exports = router