
// phone place holder text
export const phonePlaceholder = (num = '') => `Phone${num}: 1234567890`;

// regex pattern
export const checkPhonePattern = /^[0-9]{10}$/;
export const emailPattern = /^[A-Za-z0-9]{1}[\w\-.]+@[\w\-]+\.\w{2,}$/;
const phoneSpCharRegex = /[\-.\(\)\s]/;

const 
    ageLow = 1, 
    ageHigh = 200
;


// arrays of options
export const howHearArr = [
    {
        name: 'Search Engine (Google, Yahoo, etc.)', value: 'search_engine',
    },
    {
        name: 'Recommended by friend', value: 'recommendation',
    },
    {
        name: 'Social Media', value: 'social_media',
    },
    {
        name: 'Blog or publication', value: 'blog_publication',
    },
    {
        name: 'Other (please explain)', value: 'other',
    },
];

// gender array 
export const genderArr = [
    {
        name: 'Male', value: 'male', 
    },
    {
        name: 'Female', value: 'female',
    },
    { 
        name: 'Non-Binary', value: 'non_binary',
    },
    { 
        name: 'Rather Not Say', value: 'non_disclose', 
    },    
];

// instruments array
export const instrumentsArr = [
    { name: 'Acoustic Guitar', },
    { name: 'Electric Guitar', },
    { name: 'Bass Guitar', },
    { name: 'Piano', },
    { name: 'Vocals', },
    { name: 'Drums', },
    { name: 'Ukelele', },
];

// sing array
export const singOptArr = [
    {
        name: 'Yes!', value: 'yes',
    },
    {
        name: 'Yes, but I\'m shy!', value: 'yes_but_shy', 
    },
    {
        name: 'No, but I\'d like to!', value: 'no_but_like_to',
    },
    {
        name: 'No!', value: 'no',
    },
];

// payment array
export const paymentsArr = [
    {
        name: 'Credit / Debit Card', value: 'credit_card',
    }, 
    { 
        name: 'Check / Cheque', value: 'cheque',
    },
    {
        name: 'Venmo', value: 'venmo',
    },
];

// init form object
export const formInit = {
    studentName: '',
    weeksInterested: [], // ARRAY OF EVENT MONGO ObjectId's
    gender: '',
    //birthday: '',
    age: '',
    experience: '',
    instrumentsPlayed: '',
    instrumentsToPlay: [],
    sing: '',
    howHear: '',
    howHearDetails: '',
    parentNames: {
        parent1: '',
        parent2: '',
    },
    contactNumbers: {
        phone1: '',
        phone2: '',
    },
    emergencyContacts: {
        emC1Name: '',
        emC1Relationship: '',
        emC1Ph: '',
        emC2Name: '',
        emC2Relationship: '',
        emC2Ph: '',
    },
    physicianContact: {
        name: '',
        phone: '',
    },
    medical: {
        conditions: '',
        medications: '',
    },
    email: '',
    liabilityCheck: false,
    paymentMethod: '',
    venmo: '',
}

// error state object
export const errorStateInit = {
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
}

// aux function to transform phone to correct format
function transformPhone(phoneNum) {
    if (phoneNum === '') return '';
    return `${phoneNum.substring(0, 3)}-${phoneNum.substring(3, 6)}-${phoneNum.substring(6)}`;
}

// count number of errors
export function countErrors(errors) {
	let count = 0;
	for (let key in errors) {
		if (errors[key] !== '') {
            //console.log(key, errors[key])
            count++;
        }
	}
	return count;
}

export function checkAge(value) {
    if (Number(value) % 1 !== 0) return false;
    if (value < ageLow || value > ageHigh) {
        return false;
    } 
    return true;
}

export function cleanUpPhone(value) {
    return value.replace(phoneSpCharRegex, '');
}

// function checkDate(value) {
// 	// if empty
// 	if (value === '') return value;
// 	let date = new Date(value), now = new Date(new Date().toLocaleDateString());
//     //const old = new Date(oldTime);
// 	// compare present and min old time 
// 	//if (date <= old) return oldTime;
// 	if (date <= now) return value;
// 	// convert to max
// 	date = now;
// 	const month = date.getMonth()+1;
// 	return `${date.getFullYear()}-${month <= 9 ? `0${month}` : `${month}`}-${date.getDate()}`;
// }

// create a deep copy of 
export function createCompiledData(formData, signature, addParent, addEmCnt) {
    const { 
        studentName, gender, age, weeksInterested, 
        experience, instrumentsPlayed, instrumentsToPlay,
        sing, howHear, howHearDetails, email,
        liabilityCheck, paymentMethod, venmo,
        parentNames, contactNumbers, emergencyContacts,
        physicianContact, medical,
    } = formData;

    const compiledData = {
        studentName, gender, age, weeksInterested,
        experience, instrumentsPlayed, instrumentsToPlay,
        sing, howHear, 
        howHearDetails: howHear.includes('Other') ? howHearDetails : '',
        liabilityCheck, paymentMethod, 
        parentNames: {
            parent1: parentNames.parent1,
            parent2: addParent ? parentNames.parent2 : '',
        },
        email,
        // transformation on phone number
        contactNumbers: {
            phone1: transformPhone(contactNumbers.phone1),
            phone2: addParent && contactNumbers.phone2.trim() !== '' ? transformPhone(contactNumbers.phone2) : '',
        },
        emergencyContacts: {
            emC1Name: emergencyContacts.emC1Name,
            emC1Relationship: emergencyContacts.emC1Relationship,
            emC1Ph: transformPhone(emergencyContacts.emC1Ph),
            emC2Name: addEmCnt ? emergencyContacts.emC2Name : '',
            emC2Relationship: addEmCnt ? emergencyContacts.emC2Relationship : '',
            emC2Ph: addEmCnt && emergencyContacts.emC2Name.trim() !== '' ? transformPhone(emergencyContacts.emC2Ph) : '',
        },
        medical: {
            conditions: medical.conditions,
            medications: medical.medications,
        },
        medical: {
            conditions: medical.conditions,
            medications: medical.medications,
        },
        physicianContact: {
            name: physicianContact.name,
            phone: physicianContact.phone.trim() !== '' ? transformPhone(physicianContact.phone) : '',
        },
        venmo: paymentMethod === 'Venmo' ? venmo : '',
        signature,
    };
    return compiledData;
}

export function validateForm(formData) {
    const { 
        studentName, gender, age, weeksInterested, 
        instrumentsToPlay, sing, howHear, howHearDetails, email,
        liabilityCheck, paymentMethod, venmo,
        parentNames, contactNumbers, emergencyContacts, physicianContact,
    } = formData;
    // construct error object
    //console.log(contactNumbers, emergencyContacts)
    let errorCounts = 0;
    let errors = {...errorStateInit};
    // validate student name
    if (!studentName || studentName.trim() === '') {
        errors.studentName = 'student name cannot be empty';
        errorCounts++;
    }
    // validate gender
    if (gender === '') {
        errors.gender = 'please select an option';
        errorCounts++;
    }
    // validate age
    if (!checkAge(age)) {
        errors.age = 'please enter a valid age';
        errorCounts++;
    }
    // validate weeksInterested
    if (weeksInterested.length === 0) {
        errors.weeksInterested = 'please select at least one of the weeks';
        errorCounts++;
    }
    // validate instrumentsToPlay
    if (instrumentsToPlay.length === 0) {
        errors.instrumentsToPlay = 'please select at least one of the instruments';
        errorCounts++;
    }
    // validate email
    if (email.trim() === '' || email.length > 255 || !emailPattern.test(email)) {
        errors.email = 'please enter an email';
        errorCounts++;
    }
    // validate do you sing
    if (sing === '') {
        errors.sing = 'please select an option';
        errorCounts++;
    }
    // validate how you hear
    if (howHear === '') {
        errors.howHear = 'please select an option';
        errorCounts++;
    }
    // validate how you hear details
    if (howHear.includes('Other') && (howHearDetails.trim() === '')) {
        errors.howHearDetails = 'please provide some details';
        errorCounts++;
    }
    // validate parent/guardian 1 name
    if (parentNames.parent1.trim().length === 0) {
        errors['parentNames.parent1'] = 'please provide a parent/guardian name';
        errorCounts++;
    }
    // validate parent/guardian 1 phone
    if (!checkPhonePattern.test(contactNumbers.phone1)) {
        errors['contactNumbers.phone1'] = 'please provide a parent/guardian phone';
        errorCounts++;
    }
    // validate emergency contact 1 name
    if (emergencyContacts.emC1Name.trim().length === 0) {
        errors['emergencyContact.emC1Name'] = 'please provide an emergency contact name';
        errorCounts++;
    }
    // validate emergency contact 1 phone
    if (!checkPhonePattern.test(emergencyContacts.emC1Ph)) {
        errors['emergencyContact.emC1Ph'] = 'please provide an emergency contact phone';
        errorCounts++;
    }
    // validate payment
    if (paymentMethod === '') {
        errors.paymentMethod = 'please select a payment method';
        errorCounts++;
    }
    // validate payment with venmo
    if (paymentMethod === 'Venmo' && (venmo.trim().length <= 1 || venmo.trim().length > 255)) {
        errors.venmo = 'please provide a valid venmo username';
        errorCounts++;
    }
    // validate liablityCheck
    if (!liabilityCheck) {
        errors.liabilityCheck = 'please check the release of liablity box';
        errorCounts++;
    }
    // // validate emergency contacts phone number 2
    if (contactNumbers.phone2.length > 0 && !checkPhonePattern.test(contactNumbers.phone2)) {
        errors['contactNumbers.phone2'] = 'please provide a valid parent/guardian contact number';
        errorCounts++;
    }
    // // validate emergency contacts phone number 2
    if (emergencyContacts.emC2Ph.length > 0 && !checkPhonePattern.test(emergencyContacts.emC2Ph)) {
        errors['emergencyContacts.emC2Ph'] = 'please provide a valid emergency contact number';
        errorCounts++;
    }
    // // validate physician phone numbers
    if (physicianContact.phone.length > 0 && !checkPhonePattern.test(physicianContact.phone)) {
        errors['physicianContact.phone'] = 'please provide a valid physician phone';
        errorCounts++;
    }
    return [errors, errorCounts];
}