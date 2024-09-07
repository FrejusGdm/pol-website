import React from 'react';
import Image from 'next/image';

const AboutHero: React.FC = () => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row items-center gap-20">
        <div className="flex-1 space-y-6">
          <h1 className="text-[#1D4230] text-5xl font-bangui">Who we are</h1>
          <p className="text-[#0B0A0A] text-base">
          PreserveOurLanguages is an initiative dedicated to the digital preservation and promotion of African languages. Founded by Josué Godeme, a Computer Science and Applied Mathematics student, our mission is to bridge the gap between technological advancement and linguistic heritage.
          We are a team of passionate linguists, technologists, and cultural advocates working to:

          <br></br>
          <br></br>
          <ul className="list-disc list-inside">
          <li>Create digital resources for underrepresented African languages</li>
          <li>Develop AI-powered translation tools for native African languages</li>
          <li>Document and preserve oral traditions and folktales</li>
          <li>Promote the use of African languages in education and technology</li>
          </ul>
          <br></br>

          Our work spans from creating the first-ever digital corpora for languages like Adja to partnering with global organizations to develop dictionaries and learning curricula. We believe that every language is a unique window into human experience, and by preserving these languages, we're safeguarding entire worldviews.
          </p>
          <button className="bg-[#E4B458] text-[#0B0A0A] font-semibold py-2 px-7 rounded-lg">
            JOIN US
          </button>
        </div>
        <div className="flex-1">
          <Image
            src="/images/P.O.L.jpg"
            alt="About Us"
            width={560}
            height={393}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutHero;