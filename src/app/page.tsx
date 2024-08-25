import React from 'react';
import Head from 'next/head';
import NavBar from '../components/layout/NavBar';
import Hero from '../components/home/Hero';
import MissionStatement from '../components/home/MissionStatement';
import ExploreAndSubscribe from '../components/home/ExploreAndSubscribe';
import CallToActionAndDonation from '../components/home/CallToActionAndDonation';
import '@/styles/globals.css'
import '@/styles/font.css'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>P.O.L Project - Preserving the Voices of Our Heritage</title>
        <meta name="description" content="Join us in preserving and celebrating linguistic diversity. Discover stories, get involved, and take action to protect our cultural heritage." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#E4E4E4" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.languagepreservationproject.com/" />
        <meta property="og:title" content="Language Preservation Project" />
        <meta property="og:description" content="Join us in preserving and celebrating linguistic diversity. Discover stories, get involved, and take action to protect our cultural heritage." />
        <meta property="og:image" content="https://www.languagepreservationproject.com/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.languagepreservationproject.com/" />
        <meta property="twitter:title" content="Language Preservation Project" />
        <meta property="twitter:description" content="Join us in preserving and celebrating linguistic diversity. Discover stories, get involved, and take action to protect our cultural heritage." />
        <meta property="twitter:image" content="https://www.languagepreservationproject.com/twitter-image.jpg" />
      </Head>

      <div className="min-h-screen flex flex-col">
        <header>
          <NavBar />
        </header>
        
        <main className="flex-grow">
          <Hero />
          <MissionStatement />
          <ExploreAndSubscribe />
          <CallToActionAndDonation />



          {/* Add more sections here */}
        </main>
        
        {/* <footer className="bg-[#E4E4E4] text-[#1D4230] py-4">
          <div className="container mx-auto px-4">
            <p>&copy; 2024 Language Preservation Project. All rights reserved.</p>
          </div>
        </footer> */}
      </div>
    </>
  );
};

export default Home;
