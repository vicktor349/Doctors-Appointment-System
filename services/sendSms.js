const twilio = require('twilio')
require('dotenv').config();

module.exports = async function confirmationSMS(doctor, patient, appointment) {
    const accountSid = 'AC0df94d6be050088c544834e7de3f8ef3'; 
    const authToken = '44999b012cdbad79518c5fafcab87fa8' 
    const client = new twilio(accountSid, authToken); 

// setTimeout(sms,90000)
console.log(patient.phoneNo)
client.messages 
      .create({
        from: '17087344354',
        to: patient.phoneNo,         
        body:
        `Dear ${patient.firstName+ ' ' + patient.lastName}, This is to remind you that you booked an appointment with ${doctor.firstName+ ' ' + doctor.lastName} by ${appointment.startTime} Thank you for booking an appointment with us` 
       }) 
      .then(message => console.log(message.sid)) 
      .done();
}
