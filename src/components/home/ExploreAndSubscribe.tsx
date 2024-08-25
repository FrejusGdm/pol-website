// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// const ExploreAndSubscribe: React.FC = () => {
//   return (
//     <section className="w-full py-16 bg-[#E4E4E4] relative overflow-hidden">
//       <div className="container mx-auto px-6 relative">
//         {/* Brown background */}
//         <div className="absolute right-0 top-0 w-[calc(50%+8.33%)] h-full bg-[#422316] -mr-[50vw]"></div>
        
//         <div className="flex flex-col md:flex-row justify-between relative">
//           <div className="w-full md:w-3/5 pr-8">
//             <h2 className="text-3xl font-semibold text-[#1D4230] mb-6">EXPLORE MORE</h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
//               <NewsCard 
//                 imageSrc="/news-image-1.jpg" 
//                 altText="Hands joining together"
//               />
//               <NewsCard 
//                 imageSrc="/news-image-2.jpg" 
//                 altText="Children in a classroom"
//               />
//               <NewsCard 
//                 imageSrc="/news-image-3.jpg" 
//                 altText="Traditional pottery"
//                 className="relative z-10"
//               />
//             </div>
//             <Link href="/news" className="inline-block mt-4 relative z-10">
//               <span className="text-sm font-semibold text-gray-800 hover:text-[#9F5434] transition-colors duration-300">
//                 All News & Stories
//               </span>
//               <div className="h-0.5 w-full bg-[#9F5434] mt-1"></div>
//             </Link>
//           </div>
          
//           <div className="w-full md:w-2/5 mt-8 md:mt-0 relative z-10">
//             <div className="bg-[#422316] p-8 text-white rounded-lg">
//               <div className="bg-white text-[#1D4230] p-6 rounded-lg">
//                 <h3 className="text-2xl font-semibold mb-4">KEEP UP WITH US</h3>
//                 <p className="text-sm mb-6">
//                   Join our community of volunteers passionate in contributing time and skill to preserve low-resourced languages
//                 </p>
//                 <SubscriptionForm />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// const NewsCard: React.FC<{ imageSrc: string; altText: string; className?: string }> = ({ imageSrc, altText, className = '' }) => (
//   <div className={`bg-white rounded-lg overflow-hidden shadow-md ${className}`}>
//     <Image src={imageSrc} alt={altText} width={300} height={200} className="w-full object-cover h-48" />
//     <div className="p-4">
//       <h4 className="text-sm font-medium text-gray-800 mb-2">NEWS & STORIES</h4>
//       <p className="text-sm text-gray-600 mb-4">
//         "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat."
//       </p>
//       <div className="flex justify-end">
//         <button className="p-2 rounded-full border border-[#F4E1BC]">
//           <span className="text-[#DFA537]">→</span>
//         </button>
//       </div>
//     </div>
//   </div>
// );

// const SubscriptionForm: React.FC = () => (
//   <form className="space-y-4">
//     <div>
//       <label htmlFor="name" className="block text-sm font-semibold text-[#1D4230]">Name</label>
//       <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#9F5434] focus:ring focus:ring-[#9F5434] focus:ring-opacity-50" />
//     </div>
//     <div>
//       <label htmlFor="email" className="block text-sm font-semibold text-[#1D4230]">Email</label>
//       <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#9F5434] focus:ring focus:ring-[#9F5434] focus:ring-opacity-50" placeholder="email@example.com" />
//     </div>
//     <div>
//       <label htmlFor="phone" className="block text-sm font-semibold text-[#1D4230]">Phone Number (optional)</label>
//       <input type="tel" id="phone" name="phone" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#9F5434] focus:ring focus:ring-[#9F5434] focus:ring-opacity-50" placeholder="+299 94 XX XX XX" />
//     </div>
//     <div>
//       <label htmlFor="skillset" className="block text-sm font-semibold text-[#1D4230]">Skillset</label>
//       <input type="text" id="skillset" name="skillset" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#9F5434] focus:ring focus:ring-[#9F5434] focus:ring-opacity-50" placeholder="ex Translator" />
//     </div>
//     <button type="submit" className="w-full bg-[#9F5434] text-white font-semibold py-2 px-4 rounded-md hover:bg-[#8A4A2D] transition-colors duration-300">
//       Submit
//     </button>
//   </form>
// );

// export default ExploreAndSubscribe;

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ExploreAndSubscribe: React.FC = () => {
  return (
    <section className="w-full py-16 bg-[#E4E4E4] relative overflow-hidden">
      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-3/5 pr-8">
            <h2 className="text-3xl font-semibold text-[#1D4230] mb-6">EXPLORE MORE</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <NewsCard 
                imageSrc="/news-image-1.jpg" 
                altText="Hands joining together"
              />
              <NewsCard 
                imageSrc="/news-image-2.jpg" 
                altText="Children in a classroom"
              />
              <NewsCard 
                imageSrc="/news-image-3.jpg" 
                altText="Traditional pottery"
              />
            </div>
            <Link href="/news" className="inline-block mt-4">
              <span className="text-sm font-semibold text-gray-800 hover:text-[#9F5434] transition-colors duration-300">
                All News & Stories
              </span>
              <div className="h-0.5 w-full bg-[#9F5434] mt-1"></div>
            </Link>
          </div>
          
          <div className="w-full md:w-2/5 mt-8 md:mt-0">
            <div className="bg-[#422316] p-8 text-white rounded-lg">
              <div className="bg-white text-[#1D4230] p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">KEEP UP WITH US</h3>
                <p className="text-sm mb-6">
                  Join our community of volunteers passionate in contributing time and skill to preserve low-resourced languages
                </p>
                <SubscriptionForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const NewsCard: React.FC<{ imageSrc: string; altText: string }> = ({ imageSrc, altText }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-md">
    <Image src={imageSrc} alt={altText} width={300} height={200} className="w-full object-cover h-48" />
    <div className="p-4">
      <h4 className="text-sm font-medium text-gray-800 mb-2">NEWS & STORIES</h4>
      <p className="text-sm text-gray-600 mb-4">
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat."
      </p>
      <div className="flex justify-end">
        <button className="p-2 rounded-full border border-[#F4E1BC]">
          <span className="text-[#DFA537]">→</span>
        </button>
      </div>
    </div>
  </div>
);

const SubscriptionForm: React.FC = () => (
  <form className="space-y-4">
    <div>
      <label htmlFor="name" className="block text-sm font-semibold text-[#1D4230]">Name</label>
      <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#9F5434] focus:ring focus:ring-[#9F5434] focus:ring-opacity-50" />
    </div>
    <div>
      <label htmlFor="email" className="block text-sm font-semibold text-[#1D4230]">Email</label>
      <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#9F5434] focus:ring focus:ring-[#9F5434] focus:ring-opacity-50" placeholder="email@example.com" />
    </div>
    <div>
      <label htmlFor="phone" className="block text-sm font-semibold text-[#1D4230]">Phone Number (optional)</label>
      <input type="tel" id="phone" name="phone" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#9F5434] focus:ring focus:ring-[#9F5434] focus:ring-opacity-50" placeholder="+299 94 XX XX XX" />
    </div>
    <div>
      <label htmlFor="skillset" className="block text-sm font-semibold text-[#1D4230]">Skillset</label>
      <input type="text" id="skillset" name="skillset" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#9F5434] focus:ring focus:ring-[#9F5434] focus:ring-opacity-50" placeholder="ex Translator" />
    </div>
    <button type="submit" className="w-full bg-[#9F5434] text-white font-semibold py-2 px-4 rounded-md hover:bg-[#8A4A2D] transition-colors duration-300">
      Submit
    </button>
  </form>
);

export default ExploreAndSubscribe;








// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// const ExploreAndSubscribe: React.FC = () => {
//   return (
//     <section className="w-full py-16 bg-white">
//       <div className="container mx-auto px-6 relative">
//         <div className="bg-[#E4E4E4] absolute left-0 top-0 w-3/5 h-full -z-10"></div>
//         <div className="bg-[#422316] absolute right-0 top-8 w-2/5 h-[637px] -z-10"></div>
        
//         <div className="flex flex-col md:flex-row justify-between">
//           <div className="w-full md:w-3/5 pr-8">
//             <h2 className="text-3xl font-semibold text-[#1D4230] mb-6">EXPLORE MORE</h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               {/* Replace with your actual featured articles */}
//               <NewsCard />
//               <NewsCard />
//               <NewsCard />
//             </div>
//             <Link href="/news" className="inline-block mt-6">
//               <span className="text-sm font-semibold text-gray-800 hover:text-[#9F5434] transition-colors duration-300">
//                 All News & Stories
//               </span>
//               <div className="h-0.5 w-full bg-[#9F5434] mt-1"></div>
//             </Link>
//           </div>
          
//           <div className="w-full md:w-2/5 mt-8 md:mt-0">
//             <div className="bg-white p-8 shadow-lg">
//               <h3 className="text-2xl font-semibold text-[#1D4230] mb-4">KEEP UP WITH US</h3>
//               <p className="text-sm text-gray-800 mb-6">
//                 Join our community of volunteers passionate in contributing time and skill to preserve low-resourced languages
//               </p>
//               <SubscriptionForm />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// const NewsCard: React.FC = () => (
//   <div className="bg-[#F5F7FA] pb-6">
//     <Image src="/placeholder-news.jpg" alt="News" width={300} height={279} className="w-full" />
//     <div className="px-4 pt-4">
//       <h4 className="text-sm font-medium text-gray-800 mb-2">NEWS & STORIES</h4>
//       <p className="text-sm text-gray-600 mb-4">
//         "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat."
//       </p>
//       <div className="flex justify-end">
//         <button className="p-2 rounded-full border border-[#F4E1BC]">
//           {/* Replace with actual arrow icon */}
//           <span className="text-[#DFA537]">→</span>
//         </button>
//       </div>
//     </div>
//   </div>
// );

// const SubscriptionForm: React.FC = () => (
//   <form className="space-y-4">
//     <div>
//       <label htmlFor="name" className="block text-sm font-semibold text-gray-700">Name</label>
//       <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#9F5434] focus:ring focus:ring-[#9F5434] focus:ring-opacity-50" />
//     </div>
//     <div>
//       <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email</label>
//       <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#9F5434] focus:ring focus:ring-[#9F5434] focus:ring-opacity-50" placeholder="email@example.com" />
//     </div>
//     <div>
//       <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">Phone Number (optional)</label>
//       <input type="tel" id="phone" name="phone" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#9F5434] focus:ring focus:ring-[#9F5434] focus:ring-opacity-50" placeholder="+299 94 XX XX XX" />
//     </div>
//     <div>
//       <label htmlFor="skillset" className="block text-sm font-semibold text-gray-700">Skillset</label>
//       <input type="text" id="skillset" name="skillset" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#9F5434] focus:ring focus:ring-[#9F5434] focus:ring-opacity-50" placeholder="ex Translator" />
//     </div>
//     <button type="submit" className="w-full bg-[#9F5434] text-white font-semibold py-2 px-4 rounded-md hover:bg-[#8A4A2D] transition-colors duration-300">
//       Submit
//     </button>
//   </form>
// );

// export default ExploreAndSubscribe;