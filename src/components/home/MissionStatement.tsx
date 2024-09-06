import React from 'react';
// import Image from 'next/image';
import Link from 'next/link';

const MissionStatement: React.FC = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/3">
          <div className="relative w-full h-[230px]">
            <img
              src="./images/Ensa.png"
              alt="Mission Statement Image"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <p className="mt-2 text-sm text-gray-600">© CRAterre / Ensag</p>
        </div>
        
        <div className="w-full md:w-2/3 flex flex-col gap-6">
          <div>
            <h2 className="text-3xl font-semibold text-[#1D4230] mb-2">MISSION STATEMENT</h2>
            <p className="text-sm text-gray-800 leading-relaxed">
            Our mission is to safeguard Africa&apos;s linguistic diversity. We <strong>document</strong> endangered languages, <strong>preserve</strong> them through innovative digital tools, and <strong>promote</strong> their use in communities. By collaborating with local and international partners and leveraging technology, we strive to keep African languages vibrant and relevant, enriching both continental and global cultural heritage.
            </p>
          </div>
          
          <Link href="/signup" className="inline-block">
            <div className="inline-flex flex-col items-start">
              <span className="text-sm font-semibold text-gray-800 hover:text-[#9F5434] transition-colors duration-300">
                Sign Up for Emails
              </span>
              <div className="h-0.5 w-full bg-[#9F5434] mt-1"></div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MissionStatement;