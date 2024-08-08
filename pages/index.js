import AboutUs from "../components/AboutUs/AboutUs";
import LandingSection from "../components/LandingSection/LandingSection";
import OurStory from "../components/OurStory/OurStory";
import PastSpeakers from "../components/PastSpeakers/PastSpeakers";
import Sponsors from "../components/Sponsors/Sponsors";
import Stats from "../components/Stats/stats";
import '../styles/routes/home.scss'
function Home() {
    return (
        <>
            <section
                className="LandingPageSection"
                id="home">
                <LandingSection />
            </section>
            <section
                className="OurStory"
                id="ourstory">
                <OurStory />
            </section>
            {/* <section
                id="stats"
                className="StatsSection">
                <Stats />
            </section>
            <section
                id="about"
                className="AboutSection">
                <AboutUs />
            </section> */}
            <section
                id="past-speakers"
                className="PastSpeakersSection">
                <PastSpeakers />
            </section>
            <section
                id="sponsors"
                className="SponsorsSection">
                <Sponsors />
            </section>
        </>
    )
}

export default Home;