
const { maxLen } = require('./variablesDef');

// aux function to transform / trim optional string
function shrinkOptionalString(inputString, maxLength) {
    if (!inputString || inputString.length === 0) return '';
    return inputString.substring(0, Math.min(inputString.length, maxLength));
}


// utility function to create student obj to store in db
exports.createStudentObject = function (req) {
    const {
        studentName, gender, age, weeksInterested, 
        experience, instrumentsPlayed, instrumentsToPlay, sing,
        howHear, howHearDetails, 
        parentNames, contactNumbers, email, 
        emergencyContacts, medical, physicianContact,
        paymentMethod, venmo, 
        liabilityCheck, signature,
    } = req.body;

    return {
        studentName, gender, age, weeksInterested, 
        experience: shrinkOptionalString(experience, maxLen.text), 
        instrumentsPlayed: shrinkOptionalString(instrumentsPlayed, maxLen.text), 
        instrumentsToPlay, sing,
        howHear, howHearDetails: howHear.includes('Other') ? howHearDetails : '', 
        parentNames: {
            parent1: parentNames.parent1,
            parent2: shrinkOptionalString(parentNames.parent2, maxLen.name),
        }, 
        contactNumbers: {
            phone1: contactNumbers.phone1,
            phone2: contactNumbers?.phone2 || '',
        }, 
        email, 
        emergencyContacts: {
            emC1Name: emergencyContacts.emC1Name,
            emC1Ph: emergencyContacts.emC1Ph,
            emC1Relationship: shrinkOptionalString(emergencyContacts.emC1Relationship, maxLen.rel),
            emC2Name: shrinkOptionalString(emergencyContacts.emC2Name, maxLen.name),
            emC2Ph: emergencyContacts?.emC2Ph || '',
            emC2Relationship: shrinkOptionalString(emergencyContacts.emC2Relationship, maxLen.rel),
        }, 
        medical: {
            conditions: shrinkOptionalString(medical.conditions, maxLen.text),
            medications: shrinkOptionalString(medical.medications, maxLen.text),
        }, 
        physicianContact: {
            name: shrinkOptionalString(physicianContact.name, maxLen.name),
            phone: physicianContact?.phone || '',
        },
        paymentMethod, 
        venmo: paymentMethod === 'Venmo' ? venmo : '', 
        liabilityCheck, 
        signature,
    }
}
