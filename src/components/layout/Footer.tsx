import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#DFA537] py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Logo and Contact */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center space-x-4">
              <Image src="/logo.png" alt="Logo" width={80} height={20} />
              <div className="text-xs text-[#0B0A0A]">
                <p><strong>PHONE</strong>: Coming Soon</p>
                <p><strong>EMAIL</strong>: Coming Soon</p>
              </div>
            </div>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                <a key={social} href={`https://${social}.com`} target="_blank" rel="noopener noreferrer" className="text-[#0B0A0A]">
                  <span className="sr-only">{social}</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    {/* Add appropriate SVG path for each social icon */}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-6 flex justify-between">
            <div>
              <h4 className="font-bold mb-2 text-[#0B0A0A]">WHO WE ARE</h4>
              <ul className="space-y-1 text-sm">
                <li><Link href="/vision" className="text-[#0B0A0A] hover:underline">Vision Statement</Link></li>
                <li><Link href="/founder" className="text-[#0B0A0A] hover:underline">Founder Biography</Link></li>
                <li><Link href="/la-jarre-trouee" className="text-[#0B0A0A] hover:underline">"La Jarre Trouée"</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2 text-[#0B0A0A]">STORIES</h4>
              <ul className="space-y-1 text-sm">
                <li><Link href="/projects" className="text-[#0B0A0A] hover:underline">Projects</Link></li>
                <li><Link href="/events" className="text-[#0B0A0A] hover:underline">Events</Link></li>
                <li><Link href="/why-preserve" className="text-[#0B0A0A] hover:underline">Why Preserve Languages?</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2 text-[#0B0A0A]">TAKE ACTION</h4>
              <ul className="space-y-1 text-sm">
                <li><Link href="/volunteer" className="text-[#0B0A0A] hover:underline">Volunteer Opportunities</Link></li>
                <li><Link href="/donate" className="text-[#0B0A0A] hover:underline">Donate</Link></li>
              </ul>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="lg:col-span-3">
            <h4 className="font-bold mb-2 text-[#0B0A0A]">NEWSLETTER</h4>
            <form className="flex">
              <input
                type="email"
                placeholder="Email"
                className="flex-grow px-3 py-1 text-sm rounded-l-md border border-[#4E4949]"
              />
              <button
                type="submit"
                className="px-3 py-1 bg-[#9F5434] text-white text-sm font-semibold rounded-r-md"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright and Credits */}
        <div className="text-center text-[#0B0A0A] text-sm mt-8">
          <p>Copyright © 2024 PreserveOurLanguage</p>
          <p className="mt-1">
            Built by <a href="https://josue.com" className="hover:underline" target="_blank" rel="noopener noreferrer">Josué</a> and 
            Designed by <a href="https://kamdi.com" className="hover:underline" target="_blank" rel="noopener noreferrer">Kamdi</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// const Footer: React.FC = () => {
//   return (
//     <footer className="bg-[#DFA537] py-8 px-4">
//       <div className="container mx-auto max-w-6xl">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* Logo and Contact */}
//           <div className="space-y-4">
//             <div className="flex items-center space-x-4">
//               <Image src="/logo.png" alt="Logo" width={80} height={20} />
//               <div className="text-xs text-[#0B0A0A]">
//                 <p><strong>PHONE</strong>: 229 94 31 09 19</p>
//                 <p><strong>EMAIL</strong>: Josue@gmail.com</p>
//               </div>
//             </div>
//             <div className="flex space-x-4">
//               {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
//                 <a key={social} href={`https://${social}.com`} target="_blank" rel="noopener noreferrer" className="text-[#0B0A0A]">
//                   <span className="sr-only">{social}</span>
//                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                     {/* Add appropriate SVG path for each social icon */}
//                   </svg>
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Navigation Links */}
//           <div>
//             <h4 className="font-bold mb-2 text-[#0B0A0A]">WHO WE ARE</h4>
//             <ul className="space-y-1 text-sm">
//               <li><Link href="/vision" className="text-[#0B0A0A] hover:underline">Vision Statement</Link></li>
//               <li><Link href="/founder" className="text-[#0B0A0A] hover:underline">Founder Biography</Link></li>
//               <li><Link href="/la-jarre-trouee" className="text-[#0B0A0A] hover:underline">"La Jarre Trouée"</Link></li>
//             </ul>
//           </div>
//           <div>
//             <h4 className="font-bold mb-2 text-[#0B0A0A]">STORIES</h4>
//             <ul className="space-y-1 text-sm">
//               <li><Link href="/projects" className="text-[#0B0A0A] hover:underline">Projects</Link></li>
//               <li><Link href="/events" className="text-[#0B0A0A] hover:underline">Events</Link></li>
//               <li><Link href="/why-preserve" className="text-[#0B0A0A] hover:underline">Why Preserve Languages?</Link></li>
//             </ul>
//           </div>

//           {/* Newsletter Signup */}
//           <div>
//             <h4 className="font-bold mb-2 text-[#0B0A0A]">NEWSLETTER</h4>
//             <form className="flex">
//               <input
//                 type="email"
//                 placeholder="Email"
//                 className="flex-grow px-3 py-1 text-sm rounded-l-md border border-[#4E4949]"
//               />
//               <button
//                 type="submit"
//                 className="px-3 py-1 bg-[#9F5434] text-white text-sm font-semibold rounded-r-md"
//               >
//                 Subscribe
//               </button>
//             </form>
//             <div className="mt-2">
//               <h4 className="font-bold mb-1 text-[#0B0A0A]">TAKE ACTION</h4>
//               <ul className="space-y-1 text-sm">
//                 <li><Link href="/volunteer" className="text-[#0B0A0A] hover:underline">Volunteer Opportunities</Link></li>
//                 <li><Link href="/donate" className="text-[#0B0A0A] hover:underline">Donate</Link></li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         {/* Copyright and Credits */}
//         <div className="text-center text-[#0B0A0A] text-sm mt-8">
//           <p>Copyright © 2024 PreserveOurLanguage</p>
//           <p className="mt-1">
//             Built by <a href="https://josue.com" className="hover:underline" target="_blank" rel="noopener noreferrer">Josué</a> and 
//             Designed by <a href="https://kamdi.com" className="hover:underline" target="_blank" rel="noopener noreferrer">Kamdi</a>
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// const Footer: React.FC = () => {
//   return (
//     <footer className="bg-[#DFA537] pt-16 pb-2 px-6">
//       <div className="container mx-auto">
//         <div className="flex flex-wrap justify-between mb-10">
//           {/* Logo and Social Media */}
//           <div className="w-full md:w-auto mb-8 md:mb-0">
//             <Image src="/logo.png" alt="Logo" width={141} height={36} className="mb-4" />
//             <div className="flex space-x-4">
//               {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
//                 <a key={social} href={`https://${social}.com`} target="_blank" rel="noopener noreferrer" className="text-[#0B0A0A]">
//                   <span className="sr-only">{social}</span>
//                   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                     {/* Add appropriate SVG path for each social icon */}
//                   </svg>
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Contact Information */}
//           <div className="w-full md:w-auto mb-8 md:mb-0">
//             <p className="text-[#0B0A0A]"><strong>PHONE</strong>: 229 94 31 09 19</p>
//             <p className="text-[#0B0A0A]"><strong>EMAIL</strong>: Josue@gmail.com</p>
//           </div>

//           {/* Navigation Links */}
//           <div className="w-full md:w-auto flex flex-wrap">
//             <div className="w-1/2 md:w-auto mr-8 mb-8 md:mb-0">
//               <h4 className="font-bold mb-4 text-[#0B0A0A]">WHO WE ARE</h4>
//               <ul className="space-y-2">
//                 <li><Link href="/vision" className="text-[#0B0A0A] hover:underline">Vision Statement</Link></li>
//                 <li><Link href="/founder" className="text-[#0B0A0A] hover:underline">Founder Biography</Link></li>
//                 <li><Link href="/la-jarre-trouee" className="text-[#0B0A0A] hover:underline">"La Jarre Trouée"</Link></li>
//               </ul>
//             </div>
//             <div className="w-1/2 md:w-auto mr-8 mb-8 md:mb-0">
//               <h4 className="font-bold mb-4 text-[#0B0A0A]">STORIES</h4>
//               <ul className="space-y-2">
//                 <li><Link href="/projects" className="text-[#0B0A0A] hover:underline">Projects</Link></li>
//                 <li><Link href="/events" className="text-[#0B0A0A] hover:underline">Events</Link></li>
//                 <li><Link href="/why-preserve" className="text-[#0B0A0A] hover:underline">Why Preserve Languages?</Link></li>
//               </ul>
//             </div>
//             <div className="w-1/2 md:w-auto">
//               <h4 className="font-bold mb-4 text-[#0B0A0A]">TAKE ACTION</h4>
//               <ul className="space-y-2">
//                 <li><Link href="/volunteer" className="text-[#0B0A0A] hover:underline">Volunteer Opportunities</Link></li>
//                 <li><Link href="/donate" className="text-[#0B0A0A] hover:underline">Donate</Link></li>
//               </ul>
//             </div>
//           </div>

//           {/* Newsletter Signup */}
//           <div className="w-full md:w-auto mt-8 md:mt-0">
//             <h4 className="font-bold mb-4 text-[#0B0A0A]">NEWSLETTER</h4>
//             <form className="flex">
//               <input
//                 type="email"
//                 placeholder="Email"
//                 className="flex-grow px-4 py-2 rounded-l-lg border border-[#4E4949]"
//               />
//               <button
//                 type="submit"
//                 className="px-4 py-2 bg-[#9F5434] text-white font-semibold rounded-r-lg"
//               >
//                 Subscribe
//               </button>
//             </form>
//           </div>
//         </div>

//         {/* Copyright and Credits */}
//         <div className="text-center text-[#0B0A0A] mt-8">
//           <p>Copyright © 2024 PreserveOurLanguage</p>
//           <p className="mt-2">
//             Built by <a href="https://josue.com" className="hover:underline" target="_blank" rel="noopener noreferrer">Josué</a> and 
//             Designed by <a href="https://kamdi.com" className="hover:underline" target="_blank" rel="noopener noreferrer">Kamdi</a>
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;