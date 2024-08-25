import React from 'react';
import Image from 'next/image';

const AboutHero: React.FC = () => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row items-center gap-20">
        <div className="flex-1 space-y-6">
          <h1 className="text-[#1D4230] text-5xl font-bangui">Who we are</h1>
          <p className="text-[#0B0A0A] text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          </p>
          <button className="bg-[#E4B458] text-[#0B0A0A] font-semibold py-2 px-7 rounded-lg">
            JOIN US
          </button>
        </div>
        <div className="flex-1">
          <Image
            src="/about-hero-image.jpg"
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