const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'jportega87@gmail.com',
        subject: 'Thanks for joining the Task Manager!',
        text: `Welcome to the app, ${name}!  Let me know how much you like it.`,
    });
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'jportega87@gmail.com',
        subject: 'Cancelled Membership',
        text: `Seriously, ${name}?!  You cancelled?!  We didn't want your money anyways.`,
    });
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail,
}