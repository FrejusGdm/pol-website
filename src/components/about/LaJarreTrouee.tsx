import React from 'react';
import Image from 'next/image';

const LaJarreTrouee: React.FC = () => {
  return (
    <section className="bg-[#F8F8F8] py-16 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 p-6">
            <h2 className="text-[#1D4230] text-3xl font-semibold mb-4">La Jarre Trouée</h2>
            <p className="text-[#0B0A0A] text-sm leading-relaxed">
              According to Beninese historians and the words of the Dahomey dignitary Dah Adjolohoun
              Zohoncon, King Ghézo created this symbol to emphasize the importance of unity and collective
              effort for the nation's progress.
              <br /><br />
              The "pierced jar" is a metaphorical jar with holes. The story goes that this jar contains the water
              that brings happiness and prosperity to the country. However, due to the holes, the water leaks
              out, symbolizing the challenges and problems the nation faces.
              <br /><br />
              King Ghézo's message was that if all the children of the country came together and used their
              fingers to plug the holes, the jar would hold water, and the nation would be saved. This act of
              coming together and collaborating represents the collective effort needed to overcome difficulties and achieve progress.
              <br /><br />
              For the NGO <strong>PreserveOurLanguages</strong>, the pierced jar is an apt symbol. Just as the jar requires
              many hands to stop the water from leaking, the preservation of low-resourced languages requires
              the collective effort of many individuals and communities. It is not a task that can be
              accomplished by one person alone; it needs the support, participation, and contributions of
              everyone involved.
            </p>
          </div>
          <div className="md:w-1/2 p-6 flex items-center justify-center">
            <div className="relative w-full h-full bg-gray-300">
              <Image
                src="/la-jarre-trouee.jpg"
                alt="La Jarre Trouée"
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                <button className="p-3 rounded-full border border-[#F4E1BC]">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 1.5L13 8L4 14.5V1.5Z" fill="#DFA537"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaJarreTrouee;