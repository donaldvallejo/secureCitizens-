const { UserText } = require("../models");

const userTextController = {
    getUserText: async function (req, res) {

        try {
            const retrievedUserText = await UserText.findOne({})

            res.status(200).json(retrievedUserText)

        } catch (err) {

            console.log({ err })
            res.status(500).json({ err, message: "There was a server error..." })

        }
    },

    updateUserText: async function (req, res) {

        try {
            const updatedUserText = await UserText.findOneAndUpdate({}, req.body, { new: true });

            res.status(200).json(updatedUserText)

        } catch (err) {

            console.log({ err })
            res.status(500).json({ err, message: "There was a server error..." })
        }
    }

}


module.exports = userTextController