const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const AdminSchema = new Schema({
    email: {
        type: String,
        match: [/.+@.+\..+/, 'Must match an email address'],
    },

    password: {
        type: String
    },

})

AdminSchema.pre('save', async function (next, done) {

    if (!this.isModified('password')) return next();
    try {
        // BCRYPT PASSWORD ENCRYPTION
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        return next();
    } catch (err) {
        return next(err);
    }
});

AdminSchema.methods.validatePassword = async function validatePassword(data) {
    return bcrypt.compare(data, this.password);
};

const Admin = mongoose.model("Admin", AdminSchema);

module.exports = Admin;