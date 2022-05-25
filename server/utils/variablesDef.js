// options for different fields

const instrumentsDict = {
    'Acoustic Guitar': 1,
    'Electric Guitar': 1,
    'Bass Guitar': 1,
    'Piano': 1,
    'Vocals': 1,
    'Drums': 1,
    'Ukelele': 1,
}

// instrument enum
const instrumentsArr = [
    'Acoustic Guitar',
    'Electric Guitar',
    'Bass Guitar',
    'Piano',
    'Vocals',
    'Drums',
    'Ukelele',
];

// gender
const genderArr = [
    'Male', 
    'Female',
    'Non-Binary',
    'Rather Not Say',
];

// how hear
const howHearArr = [
    'Search Engine (Google, Yahoo, etc.)',
    'Recommended by friend',
    'Social Media',
    'Blog or publication',
    'Other (please explain)',
];

// sing option
const singOptArr = [
    'Yes!',
    'Yes, but I\'m shy!',
    'No, but I\'d like to!',
    'No!',
];

// payment method
const paymentsArr = [
    'Credit / Debit Card',
    'Check / Cheque',
    'Venmo',
];

// error state
const errorStateInit = {
    studentName: '',
    weeksInterested: '',
    gender: '',
    //birthday: '',
    age: '',
    experience: '',
    instrumentsPlayed: '',
    instrumentsToPlay: '',
    sing: '',
    howHear: '',
    howHearDetails: '',
    email: '',
    'parentNames.parent1': '',
    'parentNames.parent2': '',
    'contactNumbers.phone1': '',
    'contactNumbers.phone2': '',
    'emergencyContacts.emC1Name': '',
    'emergencyContacts.emC1Ph': '',
    'emergencyContacts.emC1Relationship': '',
    'emergencyContacts.emC2Name': '',
    'emergencyContacts.emC2Ph': '',
    'emergencyContacts.emC2Relationship': '',
    'medical.conditions': '',
    'medical.medications': '',
    'physicianContact.name': '',
    'physicianContact.phone': '',    
    paymentMethod: '',
    venmo: '',
    liabilityCheck: '',
    signature: '',
}

// max allowed length for name, relationship, text
const maxLenName = 100;
const maxLenRel = 255;
const maxLenText = 2000;

const ageLow = 1;
const ageHigh = 200;

module.exports = {
    enums: {
        gender: genderArr,
        instruments: instrumentsArr,
        howHear: howHearArr,
        sing: singOptArr,
        payments: paymentsArr,
    },
    dict: {
        instruments: instrumentsDict,
    },
    errorState: errorStateInit,
    maxLen: {
        name: maxLenName,
        rel: maxLenRel,
        text: maxLenText,
    },
    ageRange: {
        min: ageLow,
        max: ageHigh,
    },
};
