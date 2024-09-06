import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HistoryBackground: React.FC = () => {
  return (
    <section className="bg-[#E4E4E4] py-16 px-6">
      <div className="container mx-auto max-w-7xl flex flex-col md:flex-row gap-10">
        <div className="md:w-1/3">
          <Image
            src="/history-image.jpg"
            alt="Our History"
            width={320}
            height={230}
            className="w-full h-auto rounded-lg"
          />
          <p className="mt-2 text-sm text-gray-600">© CRAterre / Ensag</p>
        </div>
        <div className="md:w-2/3">
          <h2 className="text-3xl font-semibold text-[#1D4230] mb-4">History and Background</h2>
          <div className="space-y-4">
            <p className="text-[#0B0A0A]">
            PreserveOurLanguages was born out of a personal journey and a startling realization. In 2024, our founder, Josué Godeme, a native Adja speaker from Benin, attempted to reconnect with his mother tongue. What he discovered was a glaring absence of digital resources for Adja - a language spoken by nearly a million people.
            
            </p>
            <p className="text-[#0B0A0A]">
            This discovery sparked a mission. With support from the Davis Project for Peace and the Dickey Center at Dartmouth College, Josué launched a summer project to digitize and preserve the Adja language. What started as a personal quest quickly evolved into a larger mission.
            </p>
            <p className="text-[#0B0A0A]">
            In the future, PreserveOurLanguages aim to become a vibrant community of language enthusiasts, researchers, and technologists dedicated to safeguarding Africa&apos;s linguistic treasures. Our platform should serves as a hub for language documentation, education, and cultural preservation, empowering communities to celebrate and protect their unique languages.
            </p>
          </div>
          <Link href="/signup" className="inline-block mt-6">
            <span className="text-sm font-semibold text-[#0B0A0A] hover:text-[#9F5434] transition-colors duration-300">
              Sign Up for Emails
            </span>
            <div className="h-0.5 w-full bg-[#9F5434] mt-1"></div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HistoryBackground;