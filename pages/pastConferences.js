import React, { useState } from 'react';
import ConfDetails from '../components/ConferenceDetails/ConferenceDetails';
import PastConfSlider from '../components/PastConfSlider/PastConfSlider';
import PastConfTitles from '../components/PastConfTitles/PastConfTitles';
import '../styles/routes/pastConferences.scss';
import Footer from '../components/Footer/Footer';
import Conference from '../components/PastConfComponent/PastConf';

function PastConferences() {



  return (
    <>
      <Conference />
    </>
  );
}

export default PastConferences;
