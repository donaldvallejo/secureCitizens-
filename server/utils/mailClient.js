const nodemailer = require("nodemailer");

async function mailer({ studentName, birthday, instrumentsPlayed, instrumentsToPlay, parentNames, email, dateCompleted }) {

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        secure: true, // true for 465, false for other ports (587)
        auth: {
            type: 'LOGIN',
            user: process.env.NODEMAILER_USER,
            pass: process.env.NODEMAILER_PASS
        },
        logger: true,
        debug: true,

    });

    // verify connection configuration
    transporter.verify(async function (error, success) {
        console.log("IN THE VERIFIER\n==================")
        if (error) {
            console.log(error);
        } else if (success) {
            console.log("Server is ready to take our messages");

            let info = await transporter.sendMail({
                from: "rockademyrocks@gmail.com",
                to: ["rockademy@hotmail.com", "rockademyrocks@gmail.com"], // list of receivers
                subject: "A student has just signed up for The Rockademy Summercamp", // Subject line
                text: `New Student!
                \n name: ${studentName}
                \n email: ${email}
                \n birthday: ${birthday}
                \n Instruments Played: ${instrumentsPlayed}
                \n Instrument To Learn: ${instrumentsToPlay}
                \n Parent Names: ${parentNames.parent1} -- ${parentNames.parent2}
                \n Form Completed On: ${dateCompleted}`, // plain text body
                html: `New Student!
                <br/> name: ${studentName}
                <br/> email: ${email}
                <br/> birthday: ${birthday}
                <br/> Instruments Played: ${instrumentsPlayed}
                <br/> Instrument To Learn: ${instrumentsToLearn}
                <br/> Parent Names: ${parentNames.parent1} -- ${parentNames.parent2}
                <br/> Form Completed On: ${dateCompleted}`, // html body
            }, (err, data) => {
                if (err) { return console.log({ err }) }
                console.log("no error!\n====================", { data })
            });
        }
    });
}

module.exports = mailer;