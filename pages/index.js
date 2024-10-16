import AboutUs from "../components/AboutUs/AboutUs";
import LandingSection from "../components/LandingSection/LandingSection";
import OurStory from "../components/OurStory/OurStory";
import PastSpeakers from "../components/PastSpeakers/PastSpeakers";
import Sponsors from "../components/Sponsors/Sponsors";
import Stats from "../components/Stats/stats";
import '../styles/routes/home.scss'
import StickyFooter from "../components/sticky_footer/sticky_footer";
function Home() {
    return (
        <>
            <section
                className="LandingPageSection"
                id="home">
                <LandingSection />
            </section>
            <section className="StorySection" id="story">
                <OurStory />
            </section>
            {/* <section
                id="stats"
                className="StatsSection">
                <Stats />
            </section> */}
            {/* <section
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
            <div className="StickyFooter">
              <StickyFooter />
            </div>
        </>
    )
}

export default Home;