import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
            <img src={assets.logo} className='mb-5 w-32' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>
            "Elevate your style and define your presence with fashion that speaks confidence and sophistication. At TRUNK&TUSK, we bring you timeless designs crafted with precision and quality. Whether bold or classic, every piece enhances your individuality, ensuring you stand out effortlessly. Dress with purpose, wear with pride, and make your mark."
                     </p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>

        
    <div >
          <p className='text-xl font-medium mb-5'> GET IN TOUCH </p>
          <ul className='flex flex-col gap-1 text-gray-600'>
          
            <li>trunkandtusk09@gmail.com</li>
          </ul>

        </div>
       </div>
       <div>
            <hr />
            <p className='py-5 text-sm text-center'> © 2024 TRUNK&TUSK( trunkandtusk.co.in ). All Rights Reserved. 🚀</p>
       </div>
    </div>
  )
}

export default Footer
