import React from 'react';
import NavBar from '../../components/layout/NavBar';
import AboutHero from '../../components/about/AboutHero';
import HistoryBackground from '../../components/about/HistoryBackground';
import ImpactStories from '../../components/about/ImpactStories';
import LaJarreTrouee from '../../components/about/LaJarreTrouee';
import OurLeadership from '../../components/about/OurLeadership';
import OurTeam from '../../components/about/OurTeam';
const AboutPage: React.FC = () => {
  return (
    <main>
      <NavBar />
      <AboutHero />
      <HistoryBackground />
      <ImpactStories />
      <LaJarreTrouee />
      <OurLeadership />
      <OurTeam />
      {/* Add more sections as needed */}
    </main>
  );
};

export default AboutPage;