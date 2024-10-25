import nodemailer from "nodemailer";
import { TicketTemplate } from "../../public/Templates/TicketTemplate";

async function SendEmail(req, res) {
    const body = await req.body;
    let emailList = [];
    console.log(body);
    
    if (body.email1 !== '') {
        emailList.push(body.email1);
    }
    if (body.email2 !== '') {
        emailList.push(body.email2);
    }

    try {
        await sendConfirmationMail(emailList);
        res.send({ status: 200, message: "Emails sent successfully" });
    } catch (e) {
        console.log(e);
        res.send({ status: 500, message: "Emails not sent" });
    }
}

async function sendConfirmationMail(emailList) {
    let transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        from: 'tedx.club@snu.edu.in',
        auth: {
            user: "tedx.club@snu.edu.in",
            pass: process.env.GMAIL_PASS,
        },
        secure: true,
    });

    // Create an array of promises for sending emails
    const emailPromises = emailList.map(async (email) => {
        console.log(`Sending email to: ${email}`);
        
        const mailOptions = {
            to: email,
            from: 'TEDxShivNadarIoE <tedx.club@snu.edu.in>',
            subject: `TEDxSNU | Ticket Confirmation | Conference'24`,
            html: TicketTemplate(), // Note: This template doesn't seem to need any parameters
            // attachments: [
            //     {
            //         filename: 'tedx_ticket.png',
            //         path: 'https://firebasestorage.googleapis.com/v0/b/swapsta-6813b.appspot.com/o/tedx_ticket.png?alt=media&token=33879210-60ca-48a6-91c6-96c37e33c18d',
            //         cid: 'tedx@unique'
            //     },
            //     {
            //         filename: 'tedx.png',
            //         path: 'https://firebasestorage.googleapis.com/v0/b/swapsta-6813b.appspot.com/o/tedx.png?alt=media&token=e4f3ec06-d682-4843-bd4f-2ebe2ddcc2a2',
            //         cid: 'tedx@uniqueIt'
            //     },
            // ]
        };

        // Convert callback-based sendMail to Promise
        return new Promise((resolve, reject) => {
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.error(`Error sending to ${email}:`, error);
                    reject(error);
                } else {
                    console.log(`Email sent successfully to ${email}`);
                    resolve(info);
                }
            });
        });
    });

    // Wait for all emails to be sent
    await Promise.all(emailPromises);
}

export default SendEmail;