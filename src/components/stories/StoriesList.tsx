import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface StoryCardProps {
  image: string;
  title: string;
  excerpt: string;
}

const StoryCard: React.FC<StoryCardProps> = ({ image, title, excerpt }) => (
  <div className="bg-[#F5F7FA] flex flex-col sm:flex-row">
    <Image src={image} alt={title} width={300} height={180} className="w-full sm:w-auto object-cover" />
    <div className="p-4 flex flex-col justify-between">
      <div>
        <h3 className="text-sm font-medium text-[#0B0A0A] mb-2">{title}</h3>
        <p className="text-sm text-[#0B0A0A]">{excerpt}</p>
      </div>
      <Link href={`/stories/${title.toLowerCase().replace(/ /g, '-')}`} className="self-end mt-4">
        <span className="sr-only">Read more</span>
        <div className="w-10 h-10 rounded-full border border-[#F4E1BC] flex items-center justify-center">
          <svg className="w-6 h-6 text-[#DFA537]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </Link>
    </div>
  </div>
);

const StoriesList: React.FC = () => {
  const stories = [
    {
      image: "/story-image-1.jpg",
      title: "NEW & STORIES",
      excerpt: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat."
    },
    {
      image: "/story-image-2.jpg",
      title: "NEWS & STORIES",
      excerpt: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat."
    },
    {
      image: "/story-image-3.jpg",
      title: "NEW & STORIES",
      excerpt: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat."
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid gap-8">
          {stories.map((story, index) => (
            <StoryCard key={index} {...story} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoriesList;