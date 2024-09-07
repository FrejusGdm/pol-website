import React from 'react';
import Image from 'next/image';

const ImpactStory: React.FC<{ quote: string; author: string; company: string }> = ({ quote, author, company }) => (
  <div className="flex-1 flex flex-col bg-white border border-[#E4EBF3] p-6">
    <p className="text-[#0B0A0A] text-sm mb-13">{quote}</p>
    <div className="mt-auto bg-[#F4E5DF] p-4 flex items-center gap-2">
      <Image src="/placeholder-avatar.jpg" alt={author} width={60} height={60} className="rounded-full" />
      <div>
        <h4 className="text-[#0B0A0A] text-lg font-semibold">{author}</h4>
        <p className="text-[#0B0A0A] text-sm">{company}</p>
      </div>
    </div>
  </div>
);

const ImpactStories: React.FC = () => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-center text-[#1D4230] text-3xl font-semibold mb-10">IMPACT STORIES</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 flex flex-col justify-center items-center">
            <p className="text-center text-[#0B0A0A] text-lg mb-4">Impact stories coming soon!</p>
          </div>
          {/* <ImpactStory 
            quote="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat."
            author="Author Name"
            company="Company Name"
          />
          <ImpactStory 
            quote="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat."
            author="Author Name"
            company="Company Name"
          />
          <ImpactStory 
            quote="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat."
            author="Author Name"
            company="Company Name"
          /> */}
        </div>
      </div>
    </section>
  );
};

export default ImpactStories;