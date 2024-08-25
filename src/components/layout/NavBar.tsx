import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../ui/Button';

const NavBar: React.FC = () => {
  return (
    <nav className="w-full h-[61px] px-6 bg-[#E4E4E4] border-3 border-solid backdrop-blur-[42px] flex justify-center items-start relative">
      <div className="h-full flex justify-between items-center w-full max-w-[1440px]">
        <div className="flex justify-start items-center">
          <Link href="/" className="flex items-center">
            <div className="relative -top-2">
              <Image src="/logo.png" alt="Logo" width={45} height={35} />
            </div>
            <span className="ml-2 text-[#1D4230] text-lg font-semibold">PRESERVE OUR LANGUAGES</span>
          </Link>
        </div>
        <div className="flex justify-start items-center gap-8">
          <NavItem href="/who-we-are">Who We Are</NavItem>
          <NavItem href="/stories">Stories</NavItem>
          <NavItem href="/get-involved">Get Involved</NavItem>
          <Button variant="primary">TAKE ACTION</Button>
        </div>
      </div>
    </nav>
  );
};

const NavItem: React.FC<{ children: React.ReactNode; href: string }> = ({ children, href }) => (
  <Link href={href} className="p-3">
    <div className="px-7 py-2.5 rounded-[10px] flex justify-center items-center gap-1.5">
      <div className="text-[#1D4230] text-sm font-semibold leading-[16.8px] hover:underline">{children}</div>
    </div>
  </Link>
);

export default NavBar;

// import React from 'react';
// import Image from 'next/image';
// import Button from '../../components/ui/Button';

// const NavBar: React.FC = () => {
//   return (
//     <nav className="w-full h-[61px] px-6 bg-[#E4E4E4] border-3 border-solid backdrop-blur-[42px] flex justify-center items-start">
//       <div className="h-full flex justify-between items-center w-full max-w-[1440px]">
//         <div className="flex justify-start items-start">
//           <Image src="/logo.png" alt="Logo" width={141} height={36} />
//         </div>
//         <div className="flex justify-start items-center gap-8">
//           <NavItem>Who We Are</NavItem>
//           <NavItem>Stories</NavItem>
//           <NavItem>Get Involved</NavItem>
//           <Button variant="primary">TAKE ACTION</Button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// const NavItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
//   <div className="p-3">
//     <div className="px-7 py-2.5 rounded-[10px] flex justify-center items-center gap-1.5">
//       <div className="text-[#1D4230] text-sm font-semibold leading-[16.8px]">{children}</div>
//     </div>
//   </div>
// );

// export default NavBar;