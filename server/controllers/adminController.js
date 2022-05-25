const { Admin } = require("../models");
const { signToken } = require("../utils/auth");

const adminController = {

    login: async function (req, res) {
        const { email, password } = req.body;

        const DbAdmin = await Admin.findOne({ email });

        if (!DbAdmin) {
            return res.status(404).send({ message: 'Incorrect email address or password. Please try again.' });
        }

        const correctPassword = await DbAdmin.validatePassword(password);

        if (!correctPassword) {
            console.log("incorrect PW");
            return res.status(403).send({ message: 'Incorrect email address or password. Please try again.' });
        }
        const adminUser = { 
            _id: DbAdmin._id,
            email: DbAdmin.email, 
        };
        const token = signToken(adminUser);

        res.status(200).json({ DbAdmin: adminUser, token });

    },
    addAdmin: async function (req, res) {
        try {
            const newAdmin = await Admin.create(req.body);
            const { email } = newAdmin
            res.status(200).json({ newAdmin: { email }, message: 'Admin Created' });

        } catch (err) {
            res.status(500).json({ err, message: "There was an error" });
        }

        //res.send("add admin")
    },
    updateAdmin: async function (req, res) {
        try {
            const updatedAdmin = await Admin.findByIdAndUpdate(req.params.id, req.body, { new: true });

            res.status(200).json({ updatedAdmin, message: 'Update Successful' });

        } catch (err) {
            res.status(500).json({ err, message: "There was an error" });
        }
    }
}

module.exports = adminController;