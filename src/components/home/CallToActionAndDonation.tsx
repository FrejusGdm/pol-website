import React from 'react';
import Link from 'next/link';

const CallToActionAndDonation: React.FC = () => {
  return (
    <section className="py-16 bg-[#F8F8F8]">
      <div className="container mx-auto px-6 flex flex-col md:flex-row gap-8">
        {/* Left rectangle - Call to Action */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-[#1D4230] text-4xl md:text-5xl font-bangui mb-4">
            Join hands in preserving low-resourced languages
          </h2>
          <p className="text-[#0B0A0A] text-base mb-6">
            Your support will help fund research and documentation.
          </p>
          <Link href="/impact" className="inline-block">
            <span className="text-sm font-semibold text-[#0B0A0A] hover:text-[#9F5434] transition-colors duration-300">
              More ways to make an Impact
            </span>
            <div className="h-0.5 w-full bg-[#9F5434] mt-1"></div>
          </Link>
        </div>

        {/* Right rectangle - Donation Placeholder */}
        <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-[#0B0A0A] mb-4">TAKE ACTION</h3>
          <p className="text-[#655F5F] mb-6">
            We&apos;re working on setting up our donation system. Your support will make a difference soon!
          </p>
          <div className="bg-[#CFCECE] p-1 rounded-md inline-flex mb-6">
            <button className="px-4 py-2 bg-white text-[#0B0A0A] font-semibold rounded">ONE TIME ONLY</button>
            <button className="px-4 py-2 text-[#655F5F] font-semibold">MONTHLY</button>
          </div>
          <div className="grid grid-cols-3 gap-4 mb-6">
            {['$25', '$65', '$100', '$250', '$500', '$1000'].map((amount) => (
              <button key={amount} className="py-2 bg-white border border-[#CFCECE] rounded-md text-[#0B0A0A] font-semibold">
                {amount}
              </button>
            ))}
          </div>
          <div className="mb-6">
            <input type="text" placeholder="$ Other" className="w-full p-2 border border-[#CFCECE] rounded-md" disabled />
          </div>
          <button className="w-full bg-[#DFA537] text-[#0B0A0A] font-semibold py-3 rounded-md mb-4" disabled>
            DONATE NOW
          </button>
          <p className="text-center text-[#655F5F] text-sm flex items-center justify-center">
            <span className="mr-2">🔒</span> Secure payment coming soon
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToActionAndDonation;