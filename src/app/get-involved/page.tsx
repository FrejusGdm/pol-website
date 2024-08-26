import React from 'react';
import GetInvolvedHero from '../../components/get-involved/GetInvolvedHero';
import InvolvementOptions from '../../components/get-involved/InvolvementOptions';
import NavBar from '@/components/layout/NavBar';
import DonationSection from '@/components/get-involved/DonationSection';

const GetInvolvedPage: React.FC = () => {
  return (
    <main>
    <NavBar />
      <GetInvolvedHero />
      <InvolvementOptions />
      <DonationSection />
      {/* Add more sections as needed */}
    </main>
  );
};

export default GetInvolvedPage;