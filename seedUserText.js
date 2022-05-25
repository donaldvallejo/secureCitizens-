const mongoose = require('mongoose'),
    { UserText } = require('./server/models');
const seedText = {
    headline: 'Dates:',
    content: [
        '6/6-6/10   (Performance 6/11)',
        '6/13-6/17  (Performance 6/18)',
        '6/20-6/24  (Performance 6/25)',
        '6/27-7/1   (Performance 7/2)',
        '7/5-7/8    (Performance 7/9)',
        '7/11-7/15  (Performance 7/16)',
        '7/18-7/22  (Performance 7/23)',
        '7/25-7/29  (Performance 7/30)',
        '8/1-8/5    (Performance 8/6)',
        '8/8-8/12   (Performance 8/13)',
    ],
    details: '*Each week will conclude with a performance on Saturday at Tower 13 Beach Bar & Grill in Cardiff from 11 am to 1pm.',

}


mongoose
    .connect('mongodb://127.0.0.1/rockademy_db')
    .then(() => {
        console.log('connect to mongodb');
        UserText.deleteMany({})
        return UserText.create(seedText);
    })
    .then((data) => console.log(data))
    .catch((err) => {
        console.error(err.name, err.message);
    });
