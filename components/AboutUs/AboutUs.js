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
    { name: "Khushii Anand", role: "Lead Organizer", image: "/path_to_image" },
    { name: "Dhruvin Arjun", role: "Co-organizer", image: "/path_to_image" },
    { name: "Aditi Mohapatra", role: "Curator & Secretary", image: "/path_to_image" },
    { name: "Ishan Das", role: "Head Of Finance & Associate Secretary", image: "/path_to_image" },
    { name: "Aarushi Bansal", role: "Creative Director", image: "/path_to_image" },
    { name: "Joelle x Jose", role: "Curator & Licensee", image: "/path_to_image" },
    { name: "Ayushi Raghvendram", role: "Communication Director", image: "/path_to_image" },
    { name: "Sai Sangeeth Murukutla", role: "Production Head", image: "/path_to_image" },
    { name: "Aaryam Sharma", role: "Treasurer", image: "/path_to_image" },
    { name: "Ananya Jaisani", role: "Associate Secretary", image: "/path_to_image" },
];

const teamLeads = [
    { name: "Anshika Gupta", role: "Marketing Lead", image: "/path_to_image" },
    { name: "Aanya Anand", role: "Marketing Lead", image: "/path_to_image" },
    { name: "Disha Mukharjee", role: "Sponsorship Lead & Freshman Coordinator", image: "/path_to_image" },
    { name: "Darshil Mencha", role: "Sponsorship Lead", image: "/path_to_image" },
    { name: "Pratyush Bhatti", role: "Design Lead", image: "/path_to_image" },
    { name: "Aryan Chotaria", role: "Design Lead", image: "/path_to_image" },
    { name: "Saksham Shaw", role: "Decor Lead", image: "/path_to_image" },
    { name: "Kamakshya Bhardwaj", role: "Decor Lead", image: "/path_to_image" },
    { name: "Sri Vidhrya", role: "Decor Lead", image: "/path_to_image" },
    { name: "A Nikhita", role: "PR Lead", image: "/path_to_image" },
    { name: "Shivansh Kalra", role: "Web Development Lead", image: "/path_to_image" },
    { name: "Karthik Gupta", role: "Web Development Lead", image: "/path_to_image" },
    { name: "Arushi Madaan", role: "Content Lead", image: "/path_to_image" },
    { name: "Nishita Srivastava", role: "Content Lead", image: "/path_to_image" },
    { name: "Namitha Mehta", role: "Logistics Lead", image: "/path_to_image" },
    { name: "Rishav Singh", role: "Videography Lead", image: "/path_to_image" },
    { name: "Prathamesh Gandhi", role: "Videography Lead", image: "/path_to_image" },
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

            <div className="imageGallery">
                <div className="imageContainer"></div>
                <div className="imageContainer"></div>
                <div className="imageContainer"></div>
                <div className="imageContainer"></div>
                <div className="imageContainer"></div>
                <div className="imageContainer"></div>
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