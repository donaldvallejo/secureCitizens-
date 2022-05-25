const router = require("express").Router();
const { approveOrDenyStudent, getAllStudents, addStudent, getOneStudent, updateStudent, deleteStudent, updateStudentPaid } = require('../../controllers').studentController;
const { authMiddleWare } = require("../../utils/auth");

const studentValidator = require('../../middlewares/_studentValidators');

router
    .route('/')
    .get(authMiddleWare, getAllStudents)
    .post(studentValidator, addStudent)
    ;

router
    .route('/approve/:id')
    .put(authMiddleWare, approveOrDenyStudent)
    ;

router
    .route('/paid/:id').put(authMiddleWare, updateStudentPaid)

router
    .route('/:id')
    .get(authMiddleWare, getOneStudent)
    .put(authMiddleWare, updateStudent)
    .delete(authMiddleWare, deleteStudent)
    ;

module.exports = router;