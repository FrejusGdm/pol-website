import React from 'react';
import StoriesHero from '../../components/stories/StoriesHero';
import StoriesList from '../../components/stories/StoriesList';
import NavBar from '../../components/layout/NavBar';

const StoriesPage: React.FC = () => {
  return (
    <main>
      <NavBar />
      <StoriesHero />
      <StoriesList />
      {/* Add more sections as needed */}
    </main>
  );
};

export default StoriesPage;