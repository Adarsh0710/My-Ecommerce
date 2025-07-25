// import React, { useContext, useEffect, useState } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import Title from './Title';
// import ProductItem from './ProductItem';

// const BestSeller = () => {

//     const {products} = useContext(ShopContext);
//     const [bestSeller,setBestSeller] = useState([]);

//     useEffect(()=>{
//         const bestProduct = products.filter((item)=>(item.bestseller));
//         setBestSeller(bestProduct.slice(0,5))
//     },[products])

//   return (
//     <div className='my-10'>
//       <div className='text-center text-3xl py-8'>
//         <Title text1={'BEST'} text2={'SELLERS'}/>
//         <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
//         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.
//         </p>
//       </div>

//       <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
//         {
//             bestSeller.map((item,index)=>(
//                 <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
//             ))
//         }
//       </div>
//     </div>
//   )
// }

// export default BestSeller



import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {
    const { products } = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        // Filter for best-selling products
        const bestProduct = products.filter((item )=> item.bestseller);
        setBestSeller(bestProduct.slice(0, 30));
    }, [products]); // Ensure this runs whenever products change

    return (
        <div className='my-10'>
            <div className='text-center text-3xl py-8'>
                <Title text1={'BEST'} text2={'SELLER'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                Discover our Best Sellers, where customer favorites meet unbeatable quality! From trendy fashion to must-have essentials, these top-rated products are loved by many. Handpicked for style, durability, and value, they’re selling fast—so don’t miss out! Shop now and grab the most popular picks before they’re gone! 🚀✨
                </p>
            </div>

            {/* Render Best Seller Products */}
            <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                    bestSeller.length > 0 ? (
                        bestSeller.map((item,index) => (
                            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                        ))
                    ) : (
                        <p>No best sellers available</p>
                    )
                }
            </div>
        </div>
    );
}

export default BestSeller;


