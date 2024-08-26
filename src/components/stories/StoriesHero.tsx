import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const StoriesHero: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="lg:w-1/2">
            <div className="relative aspect-video">
              <Image
                src="/featured-story-image.jpg"
                alt="Featured Story"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-16 h-16 bg-white bg-opacity-75 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#DFA537]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-sm font-medium text-[#0B0A0A] mb-2">NEWS & STORIES</h2>
            <h1 className="text-4xl font-semibold text-[#0B0A0A] mb-4">
              News & Stories header copy goes here, lorem ipsum dolor sit amet.
            </h1>
            <p className="text-[#0B0A0A] mb-6">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.
            </p>
            <Link href="/stories/featured-story" className="inline-block">
              <span className="sr-only">Read more</span>
              <div className="w-10 h-10 rounded-full border border-[#F4E1BC] flex items-center justify-center">
                <svg className="w-6 h-6 text-[#DFA537]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoriesHero;