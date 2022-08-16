const nodemailer = require("nodemailer");
require('dotenv').config();

module.exports = async function confirmationMail(doctor, patient, appointment) {
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
        user: process.env.EMAIL, 
        pass: process.env.PASSWORD,
        },
    });
    
    let info = await transporter.sendMail({
        from: `"XYZ Hospital" <${process.env.EMAIL}>`, 
        to: patient.email, 
        subject: "APPOINTMENT STATUS", 
        text: "Hello world?", 
        html: `<strong>Dear ${patient.firstName+' '+patient.lastName}</strong><br><br>Your appointment has booked successfully with ${doctor.firstName+' '+doctor.lastName} ,${doctor.qualification} at ${appointment.startTime}.<br><br>
        <h1>Our Address</h1>

        <address>
            Visit us at:<br>
            Example.com<br>
            Box 564, Disneyland<br>
            Contact us at <a href="#" style="cursor: pointer;">hello@xyzHospital.com</a>.<br> 
        </address>
        <br>Thanks You,`, 
    });
}
