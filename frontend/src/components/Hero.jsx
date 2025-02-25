// import React from 'react'
// import { assets } from '../assets/assets'

// const Hero = () => {
//   return (
//     <div className='flex flex-col sm:flex-row border border-gray-400'>
//       {/* Hero Left Side */}
//       <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
//             <div className='text-[#414141]'>
//                 <div className='flex items-center gap-2'>
//                     <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
//                     <p className=' font-medium text-sm md:text-base'>OUR BESTSELLERS</p>
//                 </div>
//                 <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
//                 <div className='flex items-center gap-2'>
//                     <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
//                     <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
//                 </div>
//             </div>
//       </div>
//       {/* Hero Right Side */}
//       <img className='w-full sm:w-1/2' src={assets.hero_img} alt="" />
//     </div>
//   )
// }

// export default Hero




import React from 'react';
import { assets } from '../assets/assets';

const Hero = () => {
  return (
    // <div className='flex flex-col sm:flex-row border border-gray-400 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%'>
    <div className='flex flex-col sm:flex-row border border-[#F4D1AE] bg-gradient-to-r from-[#F4D1AE] from-10% via-[#87CEEB] via-30% to-[#3CB371] to-90%'>
     <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
        <div className='text-[#414141]'>
          <div className='flex items-center gap-2'>
            <p className='w-8 md:w-11 h-[2px] bg-[#a0ec2e]'></p>
            <p className='libre-baskerville-bold font-medium text-sm md:text-base bg-gradient-to-r from-fuchsia-500 to-yellow-300'>OUR BESTSELLERS</p>
          </div>
          <h1 className='libre-baskerville-regular text-3xl sm:py-2 lg:text-4xl leading-relaxed bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-neutral-950'>
            
          </h1>
          <h2 className='libre-baskerville-regular text-3xl sm:py-2 lg:text-4xl leading-relaxed bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-neutral-950'>
            We focus on  quality
          </h2>
          <div className='flex items-center gap-2'>
            <p className='libre-baskerville-regular-italic font-semibold text-sm md:text-base bg-gradient-to-r from-violet-400 to-rose-600'>SHOP NOW</p>
            <p className='w-10 md:w-20 h-[1px] bg-[#efbf31]'></p>
          </div>
        </div>
      </div>
      {/* Hero right side */}
      <div className='flex justify-end w-full sm:w-1/2'>
        <img className='w-full h-auto sm:max-w-md' src={assets.hero_img} alt="" />
      </div>
    </div>
  );
}

export default Hero;
