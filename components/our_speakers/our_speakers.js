import './our_speaker.css'
// import bg from '../../public/Images/WebsitePattern 1.png'

const OurSpeakers = () => {

    const speakers = [
        {
            'name': 'First Name',
            'last': 'Last Name',
            'image': ''
        },
        {
            'name': 'First Name',
            'last': 'Last Name',
            'image': ''
        },
        {
            'name': 'First Name',
            'last': 'Last Name',
            'image': ''
        },
        ]

    return (
        <>
            <div className="speakers_section_bg">
                <img src='/Images/Assets/dummy.png' className="speakers_section_bg__img"/>
            </div>
            <div className="speakers_section_title">
                <p>OUR PAST SPEAKERS</p>
            </div>
            <div className="speakers_section_cards">
            {speakers.map((item) => {
                return (
                    <>
                        <div className="arrow-speakers-left">

                        </div>
                        <div key={item.name} className="speakers_section_cards-det">
                            <div className="speakers_section_cards__image">
                                {item.image}
                            </div>
                            <div className="speakers_section-card2">
                                <div className="speakers_section_cards__firstname">
                                    <p>{item.name}</p>
                                </div>
                                <div className="speakers_section_cards__lastname">
                                    <p>{item.last}</p>
                                </div>
                            </div>
                        </div>
                    </>
                )
            })}
            </div>
        </>
    );
};

export default OurSpeakers;
