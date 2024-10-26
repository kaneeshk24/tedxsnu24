
export const FinalTicketTemplate = (name) => {
    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Ticket Confirmation</title>
    </head>

    <body>
        <div>
            <p>Dear ${name},<br/><br /></p>
            <p>Great news! You called, and here we are—your ticket to the TEDx Conference 2024 at Shiv Nadar University is ready! <br/> Get ready for an action-packed day filled with incredible ideas and an exchange of knowledge. This is your chance to connect with incredible thinkers and innovators, and we know you’re going to love every moment!<br/></p>
            <img src="http://drive.google.com/uc?export=view&id=1XEjXtU6Y9imgMN1Pd4osyAiw_6RZFfu0" alt="tedx_ticket" >
            <p><b>Please note: It is mandatory for you to carry a soft copy of the E-ticket for your entry.</b><br /><br/></p>
            <p>Here are the details - <br/></p>
            <p><b>Date - </b>27th October, 2024 (Sunday)</p>
            <p><b>Registration + Attendee Activities - </b>9:00 AM - 10:00 AM (G Block entrance)</p>
            <p><b>Venue - </b>G Block Auditorium</p>
            <p><b>Dress Code - </b>Business Formals</p>
            <br/>
            <p>Please note registrations for attendees close at 10AM. The food coupons will be issued to all attendees at registration, without which the attendees will not be able to avail their meals for the day.<br/>Please make it a point to register when you arrive!</p>
            <br/>
            <p>Attached below is the itinerary for the day.</p>
            <br />
            <p>Thanks for being part of our community. We can’t wait to see you there!<p>
            <img src="http://drive.google.com/uc?export=view&id=1PzZD24VoO8DZKB2ZEcNfNQJnE4b1q8B3" />
        </div>
    </body>

    </html>
    `
}