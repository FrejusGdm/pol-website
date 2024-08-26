import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface InvolvementOptionProps {
  title: string;
  description: string;
  imageSrc: string;
  link: string;
  videoButton?: boolean;
}

const InvolvementOption: React.FC<InvolvementOptionProps> = ({ title, description, imageSrc, link, videoButton }) => (
  <div className="flex flex-col">
    <div className="relative h-48">
      <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" />
      {videoButton && (
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="p-3 bg-[#DFA537] rounded-full">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
            </svg>
          </button>
        </div>
      )}
    </div>
    <div className="bg-white p-6 flex-grow flex flex-col">
      <h3 className="text-2xl font-semibold text-[#0B0A0A] mb-2">{title}</h3>
      <p className="text-[#0B0A0A] mb-4 flex-grow">{description}</p>
      <Link href={link} className="self-end">
        <div className="p-3 rounded-full border border-[#F4E1BC]">
          <svg className="w-4 h-4 text-[#DFA537]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </Link>
    </div>
  </div>
);

const InvolvementOptions: React.FC = () => {
  const options = [
    {
      title: "Create. Share Educational Videos in Adja",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageSrc: "/involvement-create.jpg",
      link: "/get-involved/create",
      videoButton: true
    },
    {
      title: "Write an article | book",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageSrc: "/involvement-write.jpg",
      link: "/get-involved/write"
    },
    {
      title: "Donate",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageSrc: "/involvement-donate.jpg",
      link: "/get-involved/donate"
    }
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {options.map((option, index) => (
            <InvolvementOption key={index} {...option} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvolvementOptions;