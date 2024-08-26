import React from 'react';
import Image from 'next/image';

const OurLeadership: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/3">
            <Image src="/leadership-image.jpg" alt="Our Leadership" width={320} height={230} className="w-full" />
          </div>
          <div className="md:w-2/3">
            <h2 className="text-[#1D4230] text-3xl font-semibold mb-2">OUR LEADERSHIP</h2>
            <p className="text-[#0B0A0A] text-sm mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt sagittis eros. Quisque quis euismod lorem.
            </p>
            <h3 className="text-[#0B0A0A] text-2xl font-semibold mb-1">Josue</h3>
            <p className="text-[#0B0A0A] text-sm">Founder of the Project</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurLeadership;