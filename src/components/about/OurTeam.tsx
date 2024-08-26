import React from 'react';
import Image from 'next/image';

interface TeamMember {
  name: string;
  description: string;
  imageSrc: string;
}

const TeamMemberCard: React.FC<TeamMember> = ({ name, description, imageSrc }) => (
  <div className="flex-1 flex flex-col">
    <Image src={imageSrc} alt={name} width={368} height={180} className="w-full" />
    <div className="bg-white p-6">
      <h3 className="text-[#0B0A0A] text-2xl font-semibold mb-2">{name}</h3>
      <p className="text-[#0B0A0A] text-base">{description}</p>
    </div>
  </div>
);

const OurTeam: React.FC = () => {
  const teamMembers: TeamMember[] = [
    { name: "Full name", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", imageSrc: "/team-member-1.jpg" },
    { name: "Full name", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", imageSrc: "/team-member-2.jpg" },
    { name: "Full name", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", imageSrc: "/team-member-3.jpg" },
  ];

  return (
    <section className="bg-[#F5F7FA] py-16">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-center text-[#1D4230] text-3xl font-semibold mb-4">OUR TEAM</h2>
        <p className="text-center text-[#0B0A0A] text-lg mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt sagittis eros. Quisque quis euismod lorem.</p>
        <div className="flex flex-col md:flex-row gap-12">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;