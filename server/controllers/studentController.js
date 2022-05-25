
const { Student } = require('../models');
const mailer = require('../utils/mailClient');
const { createStudentObject } = require('../utils/_utilFunc');

const studentController = {
    getAllStudents: async function (req, res) {

        try {
            const studentList = await Student.find({});

            if (!studentList) {
                return res.status(404).send({ message: 'Data not found' });
            }

            res.status(200).json(studentList)
        } catch (err) {
            res.status(500).json({ err, message: "There was a server error..." });

        }
    },
    getOneStudent: async function (req, res) {
        //console.log("GETTING ONE STUDENT\n==================")
        const studentId = req.params.id
        //console.log({ studentId })
        try {
            const DBStudent = await Student.findById(studentId).populate("weeksInterested");
            if (!DBStudent) {
                return res.status(404).send({ message: 'No student found with that ID' });
            }
            // console.log({ DBStudent })

            res.status(200).json(DBStudent);
        } catch (err) {
            res.status(500).json({ err, message: "There was a server error..." });
        }

    },
    addStudent: async function (req, res) {

        const studentObj = createStudentObject(req);

        try {

            const newStudent = await Student.create(studentObj);

            // SENDING NOTIFICATION EMAIL 
            mailer(newStudent).catch(err => { console.error(err); });

            //console.log(newStudent);
            //const studentData = await Student.find({})
            //return res.status(200).json({ studentData, message: "Student added successfully!" })
            return res.json({ data: true, message: 'added successfully' });

        } catch (err) {
            console.log(err)
            res.status(500).json({ name: err.name, message: "There was a server error..." });
        }
    },
    updateStudent: async function (req, res) {
        try {
            const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate('weeksInterested');

            const studentData = await Student.find({});

            return res.status(200).json({ studentData, message: 'Update Successful!' });

        } catch (err) {
            res.status(500).json({ err, message: "There was a server error..." });

        }
    },
    deleteStudent: async function (req, res) {
        try {
            const deletedStudent = Student.findByIdAndDelete(req.params.id);

            const studentData = Student.find({});

            return res.status(200).json({ studentData, message: 'Student Deleted' });

        } catch (err) {

            res.status(500).json({ err, message: "There was a server error..." });

        }
    },
    approveOrDenyStudent: async function (req, res) {
        //console.log("in the approval controller", req.body);
        try {
            const updatedStudent = await Student.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true }).populate("weeksInterested");
            //console.log({ updatedStudent });
            // const studentData = Student.find({})

            return res.status(200).json({ updatedStudent, message: 'Student Approval Updated' });
        } catch (err) {
            console.log({ err })
            res.status(500).json({ err, message: "There was a server error..." });

        }
    },
    updateStudentPaid: async function (req, res) {
        //console.log("in the approval controller", req.body)
        try {
            const updatedStudent = await Student.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true }).populate("weeksInterested");
            //console.log({ updatedStudent });
            // const studentData = Student.find({})

            return res.status(200).json({ updatedStudent, message: 'Student Payment Updated' });
        } catch (err) {
            console.log({ err });
            res.status(500).json({ err, message: "There was a server error..." });

        }
    }
}

module.exports = studentController;