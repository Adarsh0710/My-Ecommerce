// import React from 'react'
// import Title from '../components/Title'
// import { assets } from '../assets/assets'
// import NewsletterBox from '../components/NewsletterBox'

// const About = () => {
//   return (
//     <div>

//       <div className='text-2xl text-center pt-8 border-t'>
//           <Title text1={'ABOUT'} text2={'US'} />
//       </div>

//       <div className='my-10 flex flex-col md:flex-row gap-16'>
//           <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
//           <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
//               <p>Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.</p>
//               <p>Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.</p>
//               <b className='text-gray-800'>Our Mission</b>
//               <p>Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>
//           </div>
//       </div>

//       <div className=' text-xl py-4'>
//           <Title text1={'WHY'} text2={'CHOOSE US'} />
//       </div>

//       <div className='flex flex-col md:flex-row text-sm mb-20'>
//           <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
//             <b>Quality Assurance:</b>
//             <p className=' text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
//           </div>
//           <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
//             <b>Convenience:</b>
//             <p className=' text-gray-600'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
//           </div>
//           <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
//             <b>Exceptional Customer Service:</b>
//             <p className=' text-gray-600'>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
//           </div>
//       </div>

//       <NewsletterBox/>
      
//     </div>
//   )
// }

// export default About



import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
// import NewsLetter from '../components/NewsLetter'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'About'} text2={'Us'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-700'>
             <p>
             At TRUNK&TUSK, we believe that fashion is more than just clothing—it's a statement of individuality, confidence, and elegance. Our mission is to bring you a curated collection of high-quality, stylish, and trend-forward pieces that complement your lifestyle. Whether you seek everyday essentials or standout
             fashion pieces, we are committed to offering the best in craftsmanship, design, and comfort.
              </p>
            <p>
            With a focus on premium materials and timeless aesthetics, TRUNK&TUSK is your go-to destination for contemporary fashion that blends sophistication with effortless charm. We continuously evolve with 
            the latest trends while staying true to our commitment to quality and customer satisfaction.
            </p>
            <p>
            Discover a seamless shopping experience with us, where every piece tells a story, and every style reflects your unique personality.
            Welcome to TRUNK&TUSK—where fashion meets elegance, and style knows no boundaries.
            </p>
             <b className='text-gray-900'>Our Mission</b>
             <p>At TRUNK AND TUSK , our mission is to revolutionize online shopping by offering high-quality products at affordable prices. We are committed to providing an exceptional customer experience, ensuring every purchase is seamless, secure, and satisfying.

We believe in:
🛒 Customer Satisfaction: Putting our customers first with responsive support and hassle-free returns.
🌍 Sustainability: Embracing eco-friendly practices to reduce our environmental impact.
📦 Quality Assurance: Partnering with trusted suppliers to deliver only the best.

Our goal is to build a trusted online marketplace where style, innovation, and affordability come together — giving you the confidence to shop with ease.</p>
        </div>

      </div>

      <div className=' text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>

      </div>
      <div className=' flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md-px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className=' text-gray-700'>
          At  our store, we are committed to delivering high-quality products through rigorous inspections, trusted suppliers, and continuous improvements based on customer feedback. Our secure packaging ensures your order arrives in perfect condition, giving you a reliable and satisfying shopping experience.
            </p>
           </div>

        <div className='border px-10 md-px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className=' text-gray-700'>
          At our store, we prioritize your convenience by offering a seamless shopping experience with easy navigation, quick checkouts, and reliable delivery services. Our platform is designed to save you time and effort, ensuring a hassle-free purchase every time.
            </p>
        </div>

        <div className='border px-10 md-px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service</b>
          <p  className=' text-gray-700'>
          At our store, we are committed to providing exceptional customer service. Our dedicated support team is always ready to assist you, ensuring your questions are answered and your concerns are resolved promptly for a smooth shopping experience.
           </p>
        </div>
      </div>
     <NewsletterBox/>
      
    </div>
  )
}

export default About
