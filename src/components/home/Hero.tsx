import React from 'react';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  return (
    <div className="w-full h-[603px] pb-16 bg-black bg-opacity-20 flex flex-col justify-start items-center" style={{
      backgroundImage: "linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.2) 100%), url('images/panoramiqueviewGanvie.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}
    aria-label="Hero section with a background image: Photo by Iwaria Inc. on Unsplash"
    >
      <div className="h-[478px] p-6 flex flex-col justify-start items-start">
        <div className="w-full h-[430px] px-6 py-16 flex flex-col justify-start items-center gap-20">
          <div className="h-[302px] p-8 rounded-2xl backdrop-blur-[0px] flex flex-col justify-start items-center gap-10">
            <div className="w-full h-[238px] backdrop-blur-[0px] flex flex-col justify-start items-center gap-6">
              <h1 className="text-center text-[#FAFAFA] text-[56px] font-normal leading-[67.2px] font-['Bangui']">
                Preserving the Voices of 
              </h1>
              <h1 className="text-center text-[#FAFAFA] text-[56px] font-normal leading-[67.2px] font-['Bangui']">
                Our Heritage
              </h1>
              <p className="text-center text-[#FAFAFA] text-[20px] font-normal leading-[19.2px]">
              We&apos;re a passionate team committed to document, preserve and promote African languages 
              </p>
              <Button variant="secondary">JOIN US</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

// import React from 'react';
// import Button from '../ui/Button';

// const Hero: React.FC = () => {
//   return (
//     <div className="w-full h-[603px] pb-16 bg-black bg-opacity-20 flex flex-col justify-start items-center" style={{
//       backgroundImage: "linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 100%), url('/hero-background.jpg')",
//       backgroundSize: 'cover',
//       backgroundPosition: 'center'
//     }}>
//       <div className="h-[478px] p-6 flex flex-col justify-start items-start">
//         <div className="w-full h-[430px] px-6 py-16 flex flex-col justify-start items-center gap-20">
//           <div className="h-[302px] p-8 rounded-2xl backdrop-blur-[42px] flex flex-col justify-start items-center gap-10">
//             <div className="w-full h-[238px] backdrop-blur-[500px] flex flex-col justify-start items-center gap-6">
//               <h1 className="text-center text-[#FAFAFA] text-[56px] font-normal leading-[67.2px] font-['Bangui']">
//                 Preserving the Voices of Our Heritage
//               </h1>
//               <p className="text-center text-[#FAFAFA] text-base font-normal leading-[19.2px] font-['JUST_Sans']">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
//               </p>
//               <Button variant="secondary">JOIN US</Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;