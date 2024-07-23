import '../styles/routes/contact.scss'

function Contact()
{
    return (
        <div className="ContactUsSection">
            <div className="ContactUsSection__container">
                <p className='ContactUsSection__container--heading'>Contact Us</p>
                <div className='ContactUsSection__container--details'>
                    <div className='ContactUsSection__container--details__card'>
                        <p className='ContactUsSection__container--details__card--name'>Anahita Anand</p>
                        <p className='ContactUsSection__container--details__card--designation'>Lead Organizer</p>
                        <p className='ContactUsSection__container--details__card--phone'>aa126@snu.edu.in</p>
                    </div>
                    <div className='ContactUsSection__container--details__card'>
                        <p className='ContactUsSection__container--details__card--name'>Dhuvoor Arjun</p>
                        <p className='ContactUsSection__container--details__card--designation'>Co Organizer</p>
                        <p className='ContactUsSection__container--details__card--phone'>da830@snu.edu.in</p>
                    </div><div className='ContactUsSection__container--details__card'>
                        <p className='ContactUsSection__container--details__card--name'>Aditi Mohapatra</p>
                        <p className='ContactUsSection__container--details__card--designation'>Managing Director</p>
                        <p className='ContactUsSection__container--details__card--phone'>am666@snu.edu.in</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
