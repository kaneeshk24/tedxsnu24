import React from 'react';
import "./AboutUs.scss";

const quotes = [
    {
        quote: "In organizing this event I'm sure a lot of you are learning so much, because life is about management.",
        author: "Seema Rao (Special Forces Trainer)"
    },
    {
        quote: "The organization is great, the children are enthusiastic, the setup was beautiful. It was a good experience.",
        author: "Anusha Aroroa (National Co-ordinator)"
    },
    {
        quote: "I grew up watching TEDx, and I was inspired by it and wanted to stand there at one point in my life. This was surreal and I'm just happy.",
        author: "Akshaya Kumar (Content Creator)"
    },
    {
        quote: "The campus is beautiful, the hospitality was recommendable was perfect but most importantly the students behind the TEDx conference was the highlight.",
        author: "Kamal Khurana (Social Activist) 2022"
    },
    {
        quote: "Coming to the campus was very nice, the auditorium was excellent. Full marks and credit to the venue.",
        author: "Prof Dr Sanjeev Bagai (Pediatrician and Nephrologist)"
    }
];

const conferenceCore = [
    { name: "Anahita Anand", role: "Lead Organizer", image: "/TeamImages/Anahita2.png" },
    { name: "D Arjun", role: "Co-organizer", image: "/TeamImages/Arjun.png" },//
    { name: "Aditi Mohapatra", role: "Managing Director & Secretary", image: "/TeamImages/Aditi.png" },
    { name: "Ishan Das", role: "Head Of Finance & Associate Secretary 1", image: "/TeamImages/Ishan.png" },
    { name: "Aarushi Bansal", role: "Creative  Director", image: "/TeamImages/AarushiB.png" },
    { name: "Joelle x Jose", role: "Curator & Licensee", image: "/TeamImages/Joella.png" },
    { name: "Ayushi Raghvendram", role: "Communication Director", image: "/TeamImages/Ayushi.png" },
    { name: "Sai Sanjeeth Muralikrishna", role: "Production Head", image: "/TeamImages/Sai.png" },
    { name: "Aaryam Sharma", role: "Treasurer", image: "/TeamImages/Aaryam.png" },//
    { name: "Ananya Jauhari", role: "Associate Secretary", image: "/TeamImages/Ananya.png" },
];

const teamLeads = [
    { name: "Anshika Gupta", role: "Marketing Lead", image: "/TeamImages/Anshika.png" },
    { name: "Aanya Anand", role: "Marketing Lead", image: "/TeamImages/Aanya1.png" },
    { name: "Dipro Mukherjee", role: "Sponsorship Lead & Freshman Coordinator", image: "/TeamImages/Dipro.png" },
    { name: "Darpin Mevcha", role: "Sponsorship Lead", image: "/TeamImages/Darpin.png" },
    { name: "Pratyush Bhatli", role: "Design Lead", image: "/TeamImages/Pratyush.png" },
    { name: "Neeloy", role: "Design Lead", image: "/TeamImages/Neeloy.png" },

    { name: "Pratiroop Kundu", role: "Videography Lead", image: "/TeamImages/Pratiroop.png" },
    { name: "Abhay Singh", role: "Videography Lead", image: "/TeamImages/Abhay.png" },
    // { name: "Saksham Shaw", role: "Decor Lead", image: "/path_to_image" },
    { name: "Kamakhya Bhardwaj", role: "Decor Lead", image: "/TeamImages/Kamakhya.png"},
    { name: "SR Mithreyi", role: "Decor Lead", image: "/TeamImages/Mithreyi.png"},
    { name: "Nandhini", role: "Decor Lead", image: "/TeamImages/Nandhini.png" }, //not in figma
    { name: "Rishika Anand", role: "PR Lead", image: "/TeamImages/Rishika.png" },//
    { name: "Shivansh Kalra", role: "Web Development Lead", image: "/TeamImages/Shivansh.png" },
    { name: "Kanishk Gupta", role: "Web Development Lead", image: "/TeamImages/Kaneeshk.png" },
    { name: "Arushi Madaan", role: "Content Lead", image: "/TeamImages/arushi.png" },//
    { name: "Naisha Srivastava", role: "Content Lead", image: "/TeamImages/Naisha1.png" },
    { name: "Nandita Mehta", role: "Logistics Lead", image: "/TeamImages/Nandita.png" },
    // { name: "Rishav Singh", role: "Videography Lead", image: "/path_to_image" },
    // { name: "Prathamesh Gandhi", role: "Videography Lead", image: "/path_to_image" },
];

const TeamMember = ({ name, role, image }) => (
   
    <div className="teamMember">
        <img src={image} alt={name} className="memberImage" />
        <h3 className="memberName">{name}</h3>
        <p className="memberRole">{role}</p>
    </div>
);

export default function AboutUs() {
    return (
        <div className="AboutUsPage">
            <h1 className="AboutUsHeading">ABOUT US</h1>
            <hr style={{ width: '10rem', border: '1px solid red', marginBottom: '1.5rem', marginTop: '0' }} />
            
            <div className="AboutUsTopSection">
                <p className="aboutUsSectionText">
                    TEDx is a student-led club which fosters an environment of sharing brilliant ideas that have the power to inspire growth. Our main events — Qissa, Come Connect, and the flagship TEDxShivNadarUniversity Conference — help us connect with others, ignite curiosity, and help build a community of people who value the weight of ideas.
                </p>
                <p className="aboutUsSectionText">
                    Every year, over 50 enthusiastic students work hard to make these events special. They take on different roles, from organizing event details to finding and inviting amazing speakers. Together, they put in the effort to create experiences that are memorable and exceptional for everyone involved.
                </p>
                <p className="aboutUsSectionText">
                    The TEDxShivNadarUniversity Conference is our biggest event, where we bring in a varied range of speakers and give them an illustrious stage. These speakers offer new ideas and spark thought-provoking conversations.
                </p> 
                <p className="aboutUsSectionText">
                    We invite you to be a part of this exciting journey. Our goal is to inspire new ways of thinking and make a positive difference in our community and beyond. Come join us in exploring new ideas and helping to ignite minds for a brighter future.
                </p>
            </div>

            
            <div className="quotesSection">
                <div className="quotesLine top"></div>
                <div className="quotes">
                    {quotes.map((item, index) => (
                        <div key={index} className="quote">
                            <blockquote>"{item.quote}"</blockquote>
                            <footer>- {item.author}</footer>
                        </div>
                    ))}
                </div>
                <div className="quotesLine bottom"></div>
            </div>

            <div className="meetOurTeam">
                <h2 className="teamHeading">MEET OUR TEAM</h2>
                <div className="teamSection">
                    <h3 className="teamSectionHeading">CONFERENCE CORE</h3>
                    <div className="teamGrid">
                        {conferenceCore.map((member, index) => (
                            <TeamMember key={index} {...member} />
                        ))}
                    </div>
                </div>
                <div className="teamSection">
                    <h3 className="teamSectionHeading">TEAM LEADS</h3>
                    <div className="teamGrid">
                        {teamLeads.map((member, index) => (
                            <TeamMember key={index} {...member} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}