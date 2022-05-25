const 
    { body, validationResult } = require('express-validator'),
    { Types } = require('mongoose'),
    { enums, dict, errorState, maxLen, ageRange } = require('../utils/variablesDef')
;

// regex and constants
const birthdateRegex = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;
const phoneRegex = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
const imagePrefix = 'data:image/png;base64,';
const fileMaxKB = 64;

// validator with formatter showing msg 
function validatorFormatter(error) { 
    return error.msg;
}

// aux reducer function to check if instrument values are valid
function checkInstrumentsValueReducer(prev, arrItem) {
    return prev + dict.instruments[arrItem] || 0;
}

// aux function get today
function getToday() {
    return new Date();
}


// aux function for setting text with min max length
function textMinMax(min = 2, max = 100) { 
    return ({ min, max }); 
}

// validate full name required
function validateFullNameRequired(fullName, errorMsg = 'name is required') {
    return body(fullName).trim()
        .notEmpty().withMessage(errorMsg).bail()
        .isLength(textMinMax()).withMessage('name is too short or too long')
    ; 
}
// aux function validate full name optional
function validateFullNameOptional(fullName) {
    return body(fullName)
        .if(body(fullName).notEmpty()).trim()
        .isLength(textMinMax()).withMessage('name is too short or too long')
    ; 
} 


// validate weeks interested
// check if every value of array is of mongoid type
function validateWeeksInterested() {
    return body('weeksInterested')
        .isArray({ min: 1 }).withMessage('please select at least one week').bail()
        .custom(function (weeks) {
            return weeks.every(Types.ObjectId.isValid)
        }).withMessage('invalid week values')
    ;
}


// validate email
function validateEmail() {
    return body('email')
        .notEmpty().withMessage('please provide an email').bail().trim()
        .isEmail().withMessage('please provide a valid email')
    ;
}


// validate phone
function validatePhone(phoneName) {
    return body(phoneName, 'please add a phone number')
        .notEmpty().bail()
        .matches(phoneRegex).withMessage('invalid phone format')
    ;
}
// validate phone optional
function validatePhoneOptional(phoneName) {
    return body(phoneName, 'invalid phone format').if(body(phoneName).notEmpty()).matches(phoneRegex);
}


// check optional text field/details
function validateFullTextOptional(fieldName = '', maxLength = maxLen.text) {
    return body(fieldName, `${fieldName} is too long`)
        .optional().trim()
        //.isLength(textMinMax(0, maxLength))
    ;
}


// validate liability
function validateLiability() {
    return body('liabilityCheck', 'please mark that you have read and agree to the release of liability')
        .custom(function(val) { return val === true });
    ;
}


// validate enums / multi-options
function validateOneOfOptions(fieldName, optionEnums, errorMsg = 'please select an option') {
    return body(fieldName, errorMsg).isIn(optionEnums);
}


// validate how hear details
function validateHowHearDetails() {
    return body('howHearDetails').if(body('howHear').matches('Other')).trim().isLength(textMinMax(2, 1000));
}


// // validate birthday
// function validateBirthday() {
//     return body('birthday')
//         .matches(birthdateRegex).withMessage('invalid date format').bail()
//         .custom(function(birthday){
//             // transform today's date
//             if ((new Date(birthday.replace('-','/'))) > getToday()) {
//                 throw new Error('birth date cannot be in the future');
//             }
//             return true;
//         })
//     ;
// }


// validate age
function validateAge() {
    return body('age')
        .isInt().withMessage('age must be integer').bail()
        .custom(function (age){
            if (age < ageRange.min || age > ageRange.max) {
                throw new Error('please enter a valid age');
            }
            return true;
        }).toInt()
    ;
}


// validate instruments to learn
function validateinstrumentsToPlay() {
    return body('instrumentsToPlay')
        .isArray({ min: 1 }).withMessage('please select at least one instrument').bail()
        .custom(function (instrumentsArr) {
            // compare if valid value same as arr length
            return instrumentsArr.reduce(checkInstrumentsValueReducer, 0) === instrumentsArr.length;
        }).withMessage('invalid value')
    ;
}

// validate venmo username
function validateVenmoUsername() {
    return body('venmo').if(body('paymentMethod').equals('Venmo')).trim()
        .custom(function(venmo) {
            if (venmo.length <= 1) {
                throw new Error('please provide a venmo username');
            } else if (venmo.length > 255) {
                throw new Error('venmo username is too long');
            } 
            return true;
        })
    ;
}


// validate signature
function validateSignature() {
    return body('signature', 'please provide a valid signature format')
        .notEmpty().withMessage('please provide a signature').bail()
        .isString().bail()
        .custom(function(sig){
            if (sig.length <= imagePrefix.length || !sig.includes(imagePrefix)) return false;
            // calculate file size in kb based on data string
            const paddingSize = (sig[sig.length - 1] === '=' ? 1 : 0) + (sig[sig.length - 2] === '=' ? 1 : 0);
            const fileSizeInKB = (Math.ceil((sig.length - imagePrefix.length) / 4.0) * 3 - paddingSize)/ 1024;
            //console.log(fileSizeInKB)
            // check if image exceeds max size
            if (fileSizeInKB > fileMaxKB) throw new Error('image too large');
            return true;
        })
    ;
}


// validator middleware for handling errors
function validatorHandler(req, res, next) {
    //const errors = validatorFormatter(req);
    const errors = validationResult(req).formatWith(validatorFormatter);
    //console.log(errors.mapped())
    console.log(errors)
    if (!errors.isEmpty()) {
        return res.status(400).json({ 
            name: 'ValidationError',
            message: 'please fix the error(s)',
            errors: { ...errorState, ...errors.mapped() }, 
        });
    }
    next();
} 


/**
 * fields to validate:
 * - studentName
 * - gender
 * - age
 * - weeksInterested
 * - experience (optional)
 * - instrumentsPlayed (optional)
 * - instrumentsToPlay
 * - sing
 * - parentNames: { parent1, parent2 } (parent2 optional)
 * - contactNumbers: { phone1, phone2 } (phone2 optional)
 * - emergencyContacts: { emC1Name, emC1Ph, emC1Relationship, emC2Name, emC2Ph, emC2Relationship } (emC1Relationship and all emC2's optional)
 * - medical: { conditions, medications } (all optional)
 * - physicianContact: { name, phone } (all optional)
 * - paymentMethods
 * - liabilityCheck
 * - signature
 */ 
 module.exports = [
    validateFullNameRequired('studentName', 'please enter the name of the attendee'),
    validateOneOfOptions('gender', enums.gender, 'please select a gender option'),
    validateAge(),
    validateWeeksInterested(),
    validateFullTextOptional('experience'),
    validateFullTextOptional('instrumentsPlayed'),
    validateinstrumentsToPlay(),
    validateOneOfOptions('sing', enums.sing, 'please select a sing option'),
    validateOneOfOptions('howHear', enums.howHear, 'please select an option'),
    validateHowHearDetails(),

    validateFullNameRequired('parentNames.parent1', 'please enter the name of the parent/guardian'),
    validateFullNameOptional('parentNames.parent2'),
    validatePhone('contactNumbers.phone1'),
    validatePhoneOptional('contactNumbers.phone2'),
    validateEmail(),

    validateFullNameRequired('emergencyContacts.emC1Name', 'please enter the name of the emergency contact'),
    validatePhone('emergencyContacts.emC1Ph'),
    validateFullTextOptional('emergencyContacts.emC1Relationship', maxLen.rel),
    validateFullNameOptional('emergencyContacts.emC2Name'),
    validatePhoneOptional('emergencyContacts.emC2Ph'),
    validateFullTextOptional('emergencyContacts.emC2Relationship', maxLen.rel),
    validateFullTextOptional('medical.conditions'),
    validateFullTextOptional('medical.medications'),
    validateFullNameOptional('physicianContact.name'),
    validatePhoneOptional('physicianContact.phone'),

    validateOneOfOptions('paymentMethod', enums.payments, 'please select a payment method'),
    validateVenmoUsername(),

    validateLiability(),
    validateSignature(),

    validatorHandler,
];
