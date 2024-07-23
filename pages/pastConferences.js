import React, { useState } from 'react';
import ConfDetails from '../components/ConferenceDetails/ConferenceDetails';
import PastConfSlider from '../components/PastConfSlider/PastConfSlider';
import PastConfTitles from '../components/PastConfTitles/PastConfTitles';
import '../styles/routes/pastConferences.scss';
import Footer from '../components/Footer/Footer';

function PastConferences() {
  const [selectedConference, setSelectedConference] = useState("conf0");

  const handleConferenceClick = (conference) => {
    setSelectedConference(selectedConference === conference ? null : conference);
    console.log(selectedConference)
  };


  return (
    <>
      <div className="PastConferencesSection">
        <div className="PastConferencesSection__container">
          <p className="PastConferencesSection__container--heading">PAST CONFERENCES</p>
          {!selectedConference ? (
            <>
              <div className="PastConferencesSection__container--slider">
                <PastConfSlider onConferenceClick={handleConferenceClick} />
              </div>
              <div className="PastConferencesSection__container--titles">
                <PastConfTitles onConferenceClick={handleConferenceClick} />
              </div>
            </>
          ) : (
            <>
            <>
            <div className="PastConferencesSection__container--slider">
              <PastConfSlider onConferenceClick={handleConferenceClick} />
            </div>
            <div className="PastConferencesSection__container--titles">
              <PastConfTitles onConferenceClick={handleConferenceClick} />
            </div>
           </>

            <ConfDetails conferenceId={selectedConference} />
            </>
          )}
        </div>
      </div>
      <section className="FooterSection">
        <Footer />
      </section>
    </>
  );
}

export default PastConferences;
