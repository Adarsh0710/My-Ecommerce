
// // import React, { useContext, useState } from 'react';
// // import Title from '../components/Title';
// // import CartTotal from '../components/CartTotal';
// // import { assets } from '../assets/assets';
// // import { ShopContext } from '../context/ShopContext';
// // import axios from 'axios';
// // import { toast } from 'react-toastify';

// // const PlaceOrder = () => {
// //     const [method, setMethod] = useState(' ');
// //     const { navigate, backendUrl, token, cartItems, setCartItems, getCartAmount, delivery_fee, products } = useContext(ShopContext);
// //     const [formData, setFormData] = useState({
// //         firstName: '',
// //         lastName: '',
// //         email: '',
// //         street: '',
// //         city: '',
// //         state: '',
// //         zipcode: '',
// //         country: '',
// //         phone: ''
// //     });

// //     const onChangeHandler = (event) => {
// //         const name = event.target.name;
// //         const value = event.target.value;
// //         setFormData(data => ({ ...data, [name]: value }));
// //     };

// //     const prepareOrderData = () => {
// //         let orderItems = [];

// //         for (const items in cartItems) {
// //             for (const item in cartItems[items]) {
// //                 if (cartItems[items][item] > 0) {
// //                     const itemInfo = structuredClone(products.find(product => product._id === items));
// //                     if (itemInfo) {
// //                         itemInfo.size = item;
// //                         itemInfo.quantity = cartItems[items][item];
// //                         orderItems.push(itemInfo);
// //                     }
// //                 }
// //             }
// //         }

// //         return {
// //             address: formData,
// //             items: orderItems,
// //             amount: getCartAmount() + delivery_fee
// //         };
// //     };

// //     const initPay = async (orderData, razorpayOrder) => {
// //         const options = {
// //             key: import.meta.env.VITE_RAZORPAY_KEY_ID,
// //             amount: razorpayOrder.amount,
// //             currency: razorpayOrder.currency,
// //             name: 'Order Payment',
// //             description: 'Order Payment',
// //             order_id: razorpayOrder.id,
// //             receipt: razorpayOrder.receipt,
// //             handler: async (response) => {
// //                 try {
// //                     // Place the order after successful payment
// //                     const { data } = await axios.post(
// //                         backendUrl + '/api/order/place',
// //                         { ...orderData, razorpayResponse: response },
// //                         { headers: { token } }
// //                     );
                    
// //                     if (data.success) {
// //                         setCartItems({});
// //                         navigate('/orders');
// //                         toast.success("Order placed successfully");
// //                     } else {
// //                         toast.error("Failed to place order");
// //                     }
// //                 } catch (error) {
// //                     console.error(error);
// //                     toast.error(error.message || "Failed to process payment");
// //                 }
// //             }
// //         };
        
// //         const rzp = new window.Razorpay(options);
// //         rzp.open();
// //     };

// //     const onSubmitHandler = async (event) => {
// //         event.preventDefault();
// //         try {
// //             const orderData = prepareOrderData();

// //             switch (method) {
// //                 case 'cod':
// //                     const response = await axios.post(
// //                         backendUrl + '/api/order/place',
// //                         orderData,
// //                         { headers: { token } }
// //                     );
// //                     if (response.data.success) {
// //                         setCartItems({});
// //                         navigate('/orders');
// //                         toast.success("Order placed successfully");
// //                     } else {
// //                         toast.error(response.data.message);
// //                     }
// //                     break;

// //                 case 'razorpay':
// //                     const responseRazorpay = await axios.post(
// //                         backendUrl + '/api/order/razorpay',
// //                         orderData,
// //                         { headers: { token } }
// //                     );
// //                     if (responseRazorpay.data.success) {
// //                         await initPay(orderData, responseRazorpay.data.order);
// //                     } else {
// //                         toast.error(responseRazorpay.data.message);
// //                     }
// //                     break;

// //                 default:
// //                     toast.error("Please select a payment method");
// //                     break;
// //             }
// //         } catch (error) {
// //             console.error(error);
// //             toast.error(error.message || "Something went wrong");
// //         }
// //     };

// //     return (
// //         <form onSubmit={onSubmitHandler} className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
// //             {/* ------------- Left Side ---------------- */}
// //             <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
// //                 <div className='text-xl sm:text-2xl my-3'>
// //                     <Title text1={'DELIVERY'} text2={'INFORMATION'} />
// //                 </div>
// //                 <div className='flex gap-3'>
// //                     <input required onChange={onChangeHandler} name='firstName' value={formData.firstName} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='First name' />
// //                     <input required onChange={onChangeHandler} name='lastName' value={formData.lastName} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Last name' />
// //                 </div>
// //                 <input required onChange={onChangeHandler} name='email' value={formData.email} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="email" placeholder='Email address' />
// //                 <input required onChange={onChangeHandler} name='street' value={formData.street} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Street' />
// //                 <div className='flex gap-3'>
// //                     <input required onChange={onChangeHandler} name='city' value={formData.city} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='City' />
// //                     <input onChange={onChangeHandler} name='state' value={formData.state} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='State' />
// //                 </div>
// //                 <div className='flex gap-3'>
// //                     <input required onChange={onChangeHandler} name='zipcode' value={formData.zipcode} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Zipcode' />
// //                     <input required onChange={onChangeHandler} name='country' value={formData.country} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Country' />
// //                 </div>
// //                 <input required onChange={onChangeHandler} name='phone' value={formData.phone} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Phone' />
// //             </div>

// //             {/* ------------- Right Side ------------------ */}
// //             <div className='mt-8'>
// //                 <div className='mt-8 min-w-80'>
// //                     <CartTotal />
// //                 </div>

// //                 <div className='mt-12'>
// //                     <Title text1={'PAYMENT'} text2={'METHOD'} />
// //                     {/* --------------- Payment Method Selection ------------- */}
// //                     <div className='flex gap-3 flex-col lg:flex-row'>
// //                         <div onClick={() => setMethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
// //                             <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}`}></p>
// //                             <img className='h-5 mx-4' src={assets.razorpay_logo} alt="" />
// //                         </div>
// //                         <div onClick={() => setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
// //                             <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
// //                             <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
// //                         </div>
// //                     </div>

// //                     <div className='w-full text-end mt-8'>
// //                         <button type='submit' className='bg-black text-white px-16 py-3 text-sm'>PLACE ORDER</button>
// //                     </div>
// //                 </div>
// //             </div>
// //         </form>
// //     );
// // };

// // export default PlaceOrder;



























































































































































































// import React, { useContext, useState } from 'react';
// import Title from '../components/Title';
// import CartTotal from '../components/CartTotal';
// import { assets } from '../assets/assets';
// import { ShopContext } from '../context/ShopContext';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const PlaceOrder = () => {
//     const [method, setMethod] = useState(' ');
//     const { navigate, backendUrl, token, cartItems, setCartItems, getCartAmount, delivery_fee, products } = useContext(ShopContext);
//     const [formData, setFormData] = useState({
//         firstName: '',
//         lastName: '',
//         email: '',
//         street: '',
//         city: '',
//         state: '',
//         zipcode: '',
//         country: '',
//         phone: ''
//     });

//     const onChangeHandler = (event) => {
//         const name = event.target.name;
//         const value = event.target.value;
//         setFormData(data => ({ ...data, [name]: value }));
//     };

//     const prepareOrderData = () => {
//         let orderItems = [];

//         for (const items in cartItems) {
//             for (const item in cartItems[items]) {
//                 if (cartItems[items][item] > 0) {
//                     const itemInfo = structuredClone(products.find(product => product._id === items));
//                     if (itemInfo) {
//                         itemInfo.size = item;
//                         itemInfo.quantity = cartItems[items][item];
//                         orderItems.push(itemInfo);
//                     }
//                 }
//             }
//         }

//         return {
//             address: formData,
//             items: orderItems,
//             amount: getCartAmount() + delivery_fee
//         };
//     };

//     const sendConfirmationEmail = async (orderData) => {
//         try {
//             await axios.post('https://your-email-api.com/send', {
//                 apiKey: 'f8441138-0f5f-4de6-ad47-ebfc8db05d65',
//                 to: formData.email,
//                 subject: 'Order Confirmation',
//                 body: `Hi ${formData.firstName}, your order of amount ₹${orderData.amount} has been placed successfully.`,
//                 order: orderData
//             });
//         } catch (error) {
//             console.error("Failed to send confirmation email", error);
//         }
//     };

//     const initPay = async (orderData, razorpayOrder) => {
//         const options = {
//             key: import.meta.env.VITE_RAZORPAY_KEY_ID,
//             amount: razorpayOrder.amount,
//             currency: razorpayOrder.currency,
//             name: 'Order Payment',
//             description: 'Order Payment',
//             order_id: razorpayOrder.id,
//             receipt: razorpayOrder.receipt,
//             handler: async (response) => {
//                 try {
//                     const { data } = await axios.post(
//                         backendUrl + '/api/order/place',
//                         { ...orderData, razorpayResponse: response },
//                         { headers: { token } }
//                     );

//                     if (data.success) {
//                         setCartItems({});
//                         navigate('/orders');
//                         toast.success("Order placed successfully");
//                         await sendConfirmationEmail(orderData);
//                     } else {
//                         toast.error("Failed to place order");
//                     }
//                 } catch (error) {
//                     console.error(error);
//                     toast.error(error.message || "Failed to process payment");
//                 }
//             }
//         };

//         const rzp = new window.Razorpay(options);
//         rzp.open();
//     };

//     const onSubmitHandler = async (event) => {
//         event.preventDefault();
//         try {
//             const orderData = prepareOrderData();

//             switch (method) {
//                 case 'cod':
//                     const response = await axios.post(
//                         backendUrl + '/api/order/place',
//                         orderData,
//                         { headers: { token } }
//                     );
//                     if (response.data.success) {
//                         setCartItems({});
//                         navigate('/orders');
//                         toast.success("Order placed successfully");
//                         await sendConfirmationEmail(orderData);
//                     } else {
//                         toast.error(response.data.message);
//                     }
//                     break;

//                 case 'razorpay':
//                     const responseRazorpay = await axios.post(
//                         backendUrl + '/api/order/razorpay',
//                         orderData,
//                         { headers: { token } }
//                     );
//                     if (responseRazorpay.data.success) {
//                         await initPay(orderData, responseRazorpay.data.order);
//                     } else {
//                         toast.error(responseRazorpay.data.message);
//                     }
//                     break;

//                 default:
//                     toast.error("Please select a payment method");
//                     break;
//             }
//         } catch (error) {
//             console.error(error);
//             toast.error(error.message || "Something went wrong");
//         }
//     };

//     return (
//         <form onSubmit={onSubmitHandler} className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
//             <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
//                 <div className='text-xl sm:text-2xl my-3'>
//                     <Title text1={'DELIVERY'} text2={'INFORMATION'} />
//                 </div>
//                 <div className='flex gap-3'>
//                     <input required onChange={onChangeHandler} name='firstName' value={formData.firstName} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='First name' />
//                     <input required onChange={onChangeHandler} name='lastName' value={formData.lastName} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Last name' />
//                 </div>
//                 <input required onChange={onChangeHandler} name='email' value={formData.email} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="email" placeholder='Email address' />
//                 <input required onChange={onChangeHandler} name='street' value={formData.street} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Street' />
//                 <div className='flex gap-3'>
//                     <input required onChange={onChangeHandler} name='city' value={formData.city} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='City' />
//                     <input onChange={onChangeHandler} name='state' value={formData.state} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='State' />
//                 </div>
//                 <div className='flex gap-3'>
//                     <input required onChange={onChangeHandler} name='zipcode' value={formData.zipcode} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Zipcode' />
//                     <input required onChange={onChangeHandler} name='country' value={formData.country} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Country' />
//                 </div>
//                 <input required onChange={onChangeHandler} name='phone' value={formData.phone} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Phone' />
//             </div>

//             <div className='mt-8'>
//                 <div className='mt-8 min-w-80'>
//                     <CartTotal />
//                 </div>

//                 <div className='mt-12'>
//                     <Title text1={'PAYMENT'} text2={'METHOD'} />
//                     <div className='flex gap-3 flex-col lg:flex-row'>
//                         <div onClick={() => setMethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
//                             <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}`}></p>
//                             <img className='h-5 mx-4' src={assets.razorpay_logo} alt="" />
//                         </div>
//                         <div onClick={() => setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
//                             <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
//                             <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
//                         </div>
//                     </div>

//                     <div className='w-full text-end mt-8'>
//                         <button type='submit' className='bg-black text-white px-16 py-3 text-sm'>PLACE ORDER</button>
//                     </div>
//                 </div>
//             </div>
//         </form>
//     );
// };

// export default PlaceOrder;



// // import React, { useContext, useState } from 'react';
// // import Title from '../components/Title';
// // import CartTotal from '../components/CartTotal';
// // import { assets } from '../assets/assets';
// // import { ShopContext } from '../context/ShopContext';
// // import axios from 'axios';
// // import { toast } from 'react-toastify';

// // const PlaceOrder = () => {
// //   const [method, setMethod] = useState('');
// //   const {
// //     navigate,
// //     backendUrl,
// //     token,
// //     cartItems,
// //     setCartItems,
// //     getCartAmount,
// //     delivery_fee,
// //     products
// //   } = useContext(ShopContext);

// //   const [formData, setFormData] = useState({
// //     firstName: '',
// //     lastName: '',
// //     email: '',
// //     street: '',
// //     city: '',
// //     state: '',
// //     zipcode: '',
// //     country: '',
// //     phone: ''
// //   });

// //   const onChangeHandler = (e) => {
// //     const { name, value } = e.target;
// //     setFormData((prev) => ({ ...prev, [name]: value }));
// //   };

// //   const validateForm = () => {
// //     const { firstName, lastName, email, street, city, zipcode, country, phone } = formData;
// //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// //     if (!firstName || !lastName || !email || !street || !city || !zipcode || !country || !phone) {
// //       toast.error('Please fill in all required fields');
// //       return false;
// //     }

// //     if (!emailRegex.test(email)) {
// //       toast.error('Enter a valid email');
// //       return false;
// //     }

// //     if (phone.length < 10 || phone.length > 13) {
// //       toast.error('Enter a valid phone number');
// //       return false;
// //     }

// //     if (zipcode.length !== 6) {
// //       toast.error('Zipcode must be 6 digits');
// //       return false;
// //     }

// //     return true;
// //   };

// //   const prepareOrderData = () => {
// //     let orderItems = [];

// //     for (const items in cartItems) {
// //       for (const item in cartItems[items]) {
// //         if (cartItems[items][item] > 0) {
// //           const itemInfo = structuredClone(products.find((product) => product._id === items));
// //           if (itemInfo) {
// //             itemInfo.size = item;
// //             itemInfo.quantity = cartItems[items][item];
// //             orderItems.push(itemInfo);
// //           }
// //         }
// //       }
// //     }

// //     return {
// //       address: formData,
// //       items: orderItems,
// //       amount: getCartAmount() + delivery_fee
// //     };
// //   };

// //   const sendEmailConfirmation = async (orderData) => {
// //     const messageBody = `
// // Hello ${formData.firstName} ${formData.lastName},

// // Thank you for your order!

// // 📦 Order Summary:
// // ${orderData.items.map((i) => `• ${i.name} (${i.size}) x${i.quantity}`).join('\n')}

// // 💰 Total: ₹${orderData.amount}

// // 🚚 Shipping to:
// // ${formData.street}, ${formData.city}, ${formData.state}, ${formData.zipcode}, ${formData.country}

// // 📞 Contact: ${formData.phone}

// // We’ll notify you once your order is shipped.
// // `;

// //     const emailData = {
// //       access_key: 'f8441138-0f5f-4de6-ad47-ebfc8db05d65',
// //       subject: 'Order Confirmation - Your Order with Us',
// //       name: formData.firstName + ' ' + formData.lastName,
// //       email: formData.email,
// //       message: messageBody
// //     };

// //     try {
// //       const res = await fetch('https://api.web3forms.com/submit', {
// //         method: 'POST',
// //         headers: { 'Content-Type': 'application/json' },
// //         body: JSON.stringify(emailData)
// //       });

// //       const result = await res.json();
// //       if (result.success) {
// //         toast.success('Confirmation email sent!');
// //       } else {
// //         toast.warn('Order placed, but email could not be sent.');
// //       }
// //     } catch (error) {
// //       console.error('Email sending failed', error);
// //       toast.warn('Order placed, but email failed.');
// //     }
// //   };

// //   const initPay = async (orderData, razorpayOrder) => {
// //     const options = {
// //       key: 'f8441138-0f5f-4de6-ad47-ebfc8db05d65',
// //       amount: razorpayOrder.amount,
// //       currency: razorpayOrder.currency,
// //       name: 'Order Payment',
// //       description: 'Order Payment',
// //       order_id: razorpayOrder.id,
// //       handler: async (response) => {
// //         try {
// //           const { data } = await axios.post(
// //             backendUrl + '/api/order/place',
// //             { ...orderData, razorpayResponse: response },
// //             { headers: { token } }
// //           );

// //           if (data.success) {
// //             setCartItems({});
// //             await sendEmailConfirmation(orderData);
// //             navigate('/orders');
// //             toast.success('Order placed successfully');
// //           } else {
// //             toast.error('Failed to place order');
// //           }
// //         } catch (error) {
// //           toast.error('Payment failed');
// //         }
// //       }
// //     };

// //     const rzp = new window.Razorpay(options);
// //     rzp.open();
// //   };

// //   const onSubmitHandler = async (e) => {
// //     e.preventDefault();
// //     if (!validateForm()) return;

// //     const orderData = prepareOrderData();

// //     try {
// //       if (method === 'cod') {
// //         const response = await axios.post(
// //           backendUrl + '/api/order/place',
// //           orderData,
// //           { headers: { token } }
// //         );

// //         if (response.data.success) {
// //           setCartItems({});
// //           await sendEmailConfirmation(orderData);
// //           navigate('/orders');
// //           toast.success('Order placed successfully');
// //         } else {
// //           toast.error(response.data.message);
// //         }
// //       } else if (method === 'razorpay') {
// //         const res = await axios.post(
// //           backendUrl + '/api/order/razorpay',
// //           orderData,
// //           { headers: { token } }
// //         );

// //         if (res.data.success) {
// //           await initPay(orderData, res.data.order);
// //         } else {
// //           toast.error(res.data.message);
// //         }
// //       } else {
// //         toast.error('Please select a payment method');
// //       }
// //     } catch (err) {
// //       toast.error('Something went wrong');
// //     }
// //   };

// //   return (
// //     <form onSubmit={onSubmitHandler} className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
// //       {/* Left Side - Address Form */}
// //       <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
// //         <div className="text-xl sm:text-2xl my-3">
// //           <Title text1="DELIVERY" text2="INFORMATION" />
// //         </div>
// //         <div className="flex gap-3">
// //           <input required onChange={onChangeHandler} name="firstName" value={formData.firstName} className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="First name" />
// //           <input required onChange={onChangeHandler} name="lastName" value={formData.lastName} className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Last name" />
// //         </div>
// //         <input required onChange={onChangeHandler} name="email" value={formData.email} className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="email" placeholder="Email address" />
// //         <input required onChange={onChangeHandler} name="street" value={formData.street} className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Street" />
// //         <div className="flex gap-3">
// //           <input required onChange={onChangeHandler} name="city" value={formData.city} className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="City" />
// //           <input onChange={onChangeHandler} name="state" value={formData.state} className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="State" />
// //         </div>
// //         <div className="flex gap-3">
// //           <input required onChange={onChangeHandler} name="zipcode" value={formData.zipcode} className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="number" placeholder="Zipcode" />
// //           <input required onChange={onChangeHandler} name="country" value={formData.country} className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Country" />
// //         </div>
// //         <input required onChange={onChangeHandler} name="phone" value={formData.phone} className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="number" placeholder="Phone" />
// //       </div>

// //       {/* Right Side - Cart and Payment */}
// //       <div className="mt-8">
// //         <div className="min-w-80">
// //           <CartTotal />
// //         </div>

// //         <div className="mt-12">
// //           <Title text1="PAYMENT" text2="METHOD" />
// //           <div className="flex gap-3 flex-col lg:flex-row">
// //             <div onClick={() => setMethod('razorpay')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
// //               <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}`}></p>
// //               <img className="h-5 mx-4" src={assets.razorpay_logo} alt="" />
// //             </div>
// //             <div onClick={() => setMethod('cod')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
// //               <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
// //               <p className="text-gray-500 text-sm font-medium mx-4">CASH ON DELIVERY</p>
// //             </div>
// //           </div>

// //           <div className="w-full text-end mt-8">
// //             <button type="submit" className="bg-black text-white px-16 py-3 text-sm">PLACE ORDER</button>
// //           </div>
// //         </div>
// //       </div>
// //     </form>
// //   );
// // };

// // export default PlaceOrder;






// // // import React, { useContext, useState } from 'react';
// // // import Title from '../components/Title';
// // // import CartTotal from '../components/CartTotal';
// // // import { assets } from '../assets/assets';
// // // import { ShopContext } from '../context/ShopContext';
// // // import axios from 'axios';
// // // import { toast } from 'react-toastify';

// // // const PlaceOrder = () => {
// // //   const [method, setMethod] = useState('');
// // //   const {
// // //     navigate,
// // //     backendUrl,
// // //     token,
// // //     cartItems,
// // //     setCartItems,
// // //     getCartAmount,
// // //     delivery_fee,
// // //     products
// // //   } = useContext(ShopContext);

// // //   const [formData, setFormData] = useState({
// // //     firstName: '',
// // //     lastName: '',
// // //     email: '',
// // //     street: '',
// // //     city: '',
// // //     state: '',
// // //     zipcode: '',
// // //     country: '',
// // //     phone: ''
// // //   });

// // //   const onChangeHandler = (e) => {
// // //     const { name, value } = e.target;
// // //     setFormData((prev) => ({ ...prev, [name]: value }));
// // //   };

// // //   const validateForm = () => {
// // //     const { firstName, lastName, email, street, city, zipcode, country, phone } = formData;
// // //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// // //     if (!firstName || !lastName || !email || !street || !city || !zipcode || !country || !phone) {
// // //       toast.error('Please fill in all required fields');
// // //       return false;
// // //     }

// // //     if (!emailRegex.test(email)) {
// // //       toast.error('Enter a valid email');
// // //       return false;
// // //     }

// // //     if (phone.length < 10 || phone.length > 13) {
// // //       toast.error('Enter a valid phone number');
// // //       return false;
// // //     }

// // //     if (zipcode.length !== 6) {
// // //       toast.error('Zipcode must be 6 digits');
// // //       return false;
// // //     }

// // //     return true;
// // //   };

// // //   const prepareOrderData = () => {
// // //     let orderItems = [];
// // //     for (const productId in cartItems) {
// // //       for (const size in cartItems[productId]) {
// // //         if (cartItems[productId][size] > 0) {
// // //           const product = products.find((p) => p._id === productId);
// // //           if (product) {
// // //             orderItems.push({
// // //               ...product,
// // //               size,
// // //               quantity: cartItems[productId][size]
// // //             });
// // //           }
// // //         }
// // //       }
// // //     }
// // //     return {
// // //       address: formData,
// // //       items: orderItems,
// // //       amount: getCartAmount() + delivery_fee
// // //     };
// // //   };

// // //   const sendEmailConfirmation = async (orderData) => {
// // //     const messageBody = `Hello ${formData.firstName} ${formData.lastName},\n\nThank you for your order!\n\n📦 Order Summary:\n${orderData.items.map((i) => `• ${i.name} (${i.size}) x${i.quantity}`).join('\n')}\n\n💰 Total: ₹${orderData.amount}\n\n🚚 Shipping to:\n${formData.street}, ${formData.city}, ${formData.state}, ${formData.zipcode}, ${formData.country}\n\n📞 Contact: ${formData.phone}\n\nWe’ll notify you once your order is shipped.`;

// // //     const emailData = {
// // //       access_key: 'f8441138-0f5f-4de6-ad47-ebfc8db05d65',
// // //       subject: 'Order Confirmation - Your Order with Us',
// // //       name: formData.firstName + ' ' + formData.lastName,
// // //       email: formData.email,
// // //       message: messageBody
// // //     };

// // //     try {
// // //       const res = await fetch('https://api.web3forms.com/submit', {
// // //         method: 'POST',
// // //         headers: { 'Content-Type': 'application/json' },
// // //         body: JSON.stringify(emailData)
// // //       });
// // //       const result = await res.json();
// // //       if (result.success) {
// // //         toast.success('Confirmation email sent!');
// // //       } else {
// // //         toast.warn('Order placed, but email could not be sent.');
// // //       }
// // //     } catch (error) {
// // //       toast.warn('Order placed, but email failed.');
// // //     }
// // //   };

// // //   const initPay = async (orderData, razorpayOrder) => {
// // //     const options = {
// // //       key: 'rzp_test_YourKeyHere',
// // //       amount: razorpayOrder.amount,
// // //       currency: razorpayOrder.currency,
// // //       name: 'Order Payment',
// // //       description: 'Order Payment',
// // //       order_id: razorpayOrder.id,
// // //       handler: async (response) => {
// // //         try {
// // //           const { data } = await axios.post(
// // //             `${backendUrl}/api/order/place`,
// // //             { ...orderData, razorpayResponse: response },
// // //             { headers: { Authorization: `Bearer ${token}` } }
// // //           );
// // //           if (data.success) {
// // //             setCartItems({});
// // //             await sendEmailConfirmation(orderData);
// // //             navigate('/orders');
// // //             toast.success('Order placed successfully');
// // //           } else {
// // //             toast.error('Failed to place order');
// // //           }
// // //         } catch (error) {
// // //           toast.error('Payment failed');
// // //         }
// // //       }
// // //     };
// // //     const rzp = new window.Razorpay(options);
// // //     rzp.open();
// // //   };

// // //   const onSubmitHandler = async (e) => {
// // //     e.preventDefault();
// // //     if (!validateForm()) return;

// // //     if (!token) {
// // //       toast.error('Please login to place order');
// // //       return;
// // //     }

// // //     const orderData = prepareOrderData();

// // //     try {
// // //       if (method === 'cod') {
// // //         const response = await axios.post(
// // //           `${backendUrl}/api/order/place`,
// // //           orderData,
// // //           { headers: { Authorization: `Bearer ${token}` } }
// // //         );

// // //         if (response.data.success) {
// // //           setCartItems({});
// // //           await sendEmailConfirmation(orderData);
// // //           navigate('/orders');
// // //           toast.success('Order placed successfully');
// // //         } else {
// // //           toast.error(response.data.message);
// // //         }
// // //       } else if (method === 'razorpay') {
// // //         const res = await axios.post(
// // //           `${backendUrl}/api/order/razorpay`,
// // //           orderData,
// // //           { headers: { Authorization: `Bearer ${token}` } }
// // //         );

// // //         if (res.data.success) {
// // //           await initPay(orderData, res.data.order);
// // //         } else {
// // //           toast.error(res.data.message);
// // //         }
// // //       } else {
// // //         toast.error('Please select a payment method');
// // //       }
// // //     } catch (err) {
// // //       toast.error('Something went wrong');
// // //     }
// // //   };

// // //   return (
// // //     <form onSubmit={onSubmitHandler} className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
// // //       {/* Your form and UI code remains same */}
// // //     </form>
// // //   );
// // // };

// // // export default PlaceOrder;




// // import React, { useContext, useEffect, useState } from 'react';
// // import Title from '../components/Title';
// // import CartTotal from '../components/CartTotal';
// // import { assets } from '../assets/assets';
// // import { ShopContext } from '../context/ShopContext';
// // import axios from 'axios';
// // import { toast } from 'react-toastify';

// // const PlaceOrder = () => {
// //   const [method, setMethod] = useState('');
// //   const {
// //     navigate,
// //     backendUrl,
// //     token,
// //     cartItems,
// //     setCartItems,
// //     getCartAmount,
// //     delivery_fee,
// //     products,
// //     user
// //   } = useContext(ShopContext);

// //   const [formData, setFormData] = useState({
// //     firstName: '',
// //     lastName: '',
// //     street: '',
// //     city: '',
// //     state: '',
// //     zipcode: '',
// //     country: '',
// //     phone: ''
// //   });

// //   useEffect(() => {
// //     if (user?.name) {
// //       const [first, ...last] = user.name.split(' ');
// //       setFormData((prev) => ({
// //         ...prev,
// //         firstName: first,
// //         lastName: last.join(' ')
// //       }));
// //     }
// //   }, [user]);

// //   const onChangeHandler = (e) => {
// //     const { name, value } = e.target;
// //     setFormData((prev) => ({ ...prev, [name]: value }));
// //   };

// //   const validateForm = () => {
// //     const { firstName, lastName, street, city, zipcode, country, phone } = formData;

// //     if (!firstName || !lastName || !street || !city || !zipcode || !country || !phone) {
// //       toast.error('Please fill in all required fields');
// //       return false;
// //     }

// //     if (user?.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email)) {
// //       toast.error('Logged in user email is invalid');
// //       return false;
// //     }

// //     if (phone.length < 10 || phone.length > 13) {
// //       toast.error('Enter a valid phone number');
// //       return false;
// //     }

// //     if (zipcode.length !== 6) {
// //       toast.error('Zipcode must be 6 digits');
// //       return false;
// //     }

// //     return true;
// //   };

// //   const prepareOrderData = () => {
// //     let orderItems = [];

// //     for (const items in cartItems) {
// //       for (const item in cartItems[items]) {
// //         if (cartItems[items][item] > 0) {
// //           const itemInfo = structuredClone(products.find((product) => product._id === items));
// //           if (itemInfo) {
// //             itemInfo.size = item;
// //             itemInfo.quantity = cartItems[items][item];
// //             orderItems.push(itemInfo);
// //           }
// //         }
// //       }
// //     }

// //     return {
// //       address: formData,
// //       items: orderItems,
// //       amount: getCartAmount() + delivery_fee
// //     };
// //   };

// //   const sendEmailConfirmation = async (orderData) => {
// //     const messageBody = `
// // Hello ${formData.firstName} ${formData.lastName},

// // Thank you for your order!

// // 📦 Order Summary:
// // ${orderData.items.map((i) => `• ${i.name} (${i.size}) x${i.quantity}`).join('\n')}

// // 💰 Total: ₹${orderData.amount}

// // 🚚 Shipping to:
// // ${formData.street}, ${formData.city}, ${formData.state}, ${formData.zipcode}, ${formData.country}

// // 📞 Contact: ${formData.phone}

// // We’ll notify you once your order is shipped.
// // `;

// //     const emailData = {
// //       access_key: 'f8441138-0f5f-4de6-ad47-ebfc8db05d65',
// //       subject: 'Order Confirmation - Your Order with Us',
// //       name: `${formData.firstName} ${formData.lastName}`,
// //       email: user?.email,
// //       message: messageBody
// //     };

// //     try {
// //       const res = await fetch('https://api.web3forms.com/submit', {
// //         method: 'POST',
// //         headers: { 'Content-Type': 'application/json' },
// //         body: JSON.stringify(emailData)
// //       });

// //       const result = await res.json();
// //       if (result.success) {
// //         toast.success('Confirmation email sent!');
// //       } else {
// //         toast.warn('Order placed, but email could not be sent.');
// //       }
// //     } catch (error) {
// //       console.error('Email sending failed', error);
// //       toast.warn('Order placed, but email failed.');
// //     }
// //   };

// //   const initPay = async (orderData, razorpayOrder) => {
// //     const options = {
// //       key: 'f8441138-0f5f-4de6-ad47-ebfc8db05d65',
// //       amount: razorpayOrder.amount,
// //       currency: razorpayOrder.currency,
// //       name: 'Order Payment',
// //       description: 'Order Payment',
// //       order_id: razorpayOrder.id,
// //       handler: async (response) => {
// //         try {
// //           const { data } = await axios.post(
// //             backendUrl + '/api/order/place',
// //             { ...orderData, razorpayResponse: response },
// //             { headers: { token } }
// //           );

// //           if (data.success) {
// //             setCartItems({});
// //             await sendEmailConfirmation(orderData);
// //             navigate('/orders');
// //             toast.success('Order placed successfully');
// //           } else {
// //             toast.error('Failed to place order');
// //           }
// //         } catch (error) {
// //           toast.error('Payment failed');
// //         }
// //       }
// //     };

// //     const rzp = new window.Razorpay(options);
// //     rzp.open();
// //   };

// //   const onSubmitHandler = async (e) => {
// //     e.preventDefault();
// //     if (!validateForm()) return;

// //     const orderData = prepareOrderData();

// //     try {
// //       if (method === 'cod') {
// //         const response = await axios.post(
// //           backendUrl + '/api/order/place',
// //           orderData,
// //           { headers: { token } }
// //         );

// //         if (response.data.success) {
// //           setCartItems({});
// //           await sendEmailConfirmation(orderData);
// //           navigate('/orders');
// //           toast.success('Order placed successfully');
// //         } else {
// //           toast.error(response.data.message);
// //         }
// //       } else if (method === 'razorpay') {
// //         const res = await axios.post(
// //           backendUrl + '/api/order/razorpay',
// //           orderData,
// //           { headers: { token } }
// //         );

// //         if (res.data.success) {
// //           await initPay(orderData, res.data.order);
// //         } else {
// //           toast.error(res.data.message);
// //         }
// //       } else {
// //         toast.error('Please select a payment method');
// //       }
// //     } catch (err) {
// //       toast.error('Something went wrong');
// //     }
// //   };

// //   return (
// //     <form onSubmit={onSubmitHandler} className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
// //       {/* Left Side - Address Form */}
// //       <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
// //         <div className="text-xl sm:text-2xl my-3">
// //           <Title text1="DELIVERY" text2="INFORMATION" />
// //         </div>
// //         <div className="flex gap-3">
// //           <input required onChange={onChangeHandler} name="firstName" value={formData.firstName} className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="First name" />
// //           <input required onChange={onChangeHandler} name="lastName" value={formData.lastName} className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Last name" />
// //         </div>
// //         {/* Email removed from here */}
// //         <input required onChange={onChangeHandler} name="street" value={formData.street} className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Street" />
// //         <div className="flex gap-3">
// //           <input required onChange={onChangeHandler} name="city" value={formData.city} className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="City" />
// //           <input onChange={onChangeHandler} name="state" value={formData.state} className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="State" />
// //         </div>
// //         <div className="flex gap-3">
// //           <input required onChange={onChangeHandler} name="zipcode" value={formData.zipcode} className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="number" placeholder="Zipcode" />
// //           <input required onChange={onChangeHandler} name="country" value={formData.country} className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Country" />
// //         </div>
// //         <input required onChange={onChangeHandler} name="phone" value={formData.phone} className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="number" placeholder="Phone" />
// //       </div>

// //       {/* Right Side - Cart and Payment */}
// //       <div className="mt-8">
// //         <div className="min-w-80">
// //           <CartTotal />
// //         </div>

// //         <div className="mt-12">
// //           <Title text1="PAYMENT" text2="METHOD" />
// //           <div className="flex gap-3 flex-col lg:flex-row">
// //             <div onClick={() => setMethod('razorpay')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
// //               <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}`}></p>
// //               <img className="h-5 mx-4" src={assets.razorpay_logo} alt="" />
// //             </div>
// //             <div onClick={() => setMethod('cod')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
// //               <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
// //               <p className="text-gray-500 text-sm font-medium mx-4">CASH ON DELIVERY</p>
// //             </div>
// //           </div>

// //           <div className="w-full text-end mt-8">
// //             <button type="submit" className="bg-black text-white px-16 py-3 text-sm">PLACE ORDER</button>
// //           </div>
// //         </div>
// //       </div>
// //     </form>
// //   );
// // };

// // export default PlaceOrder;



import React, { useContext, useEffect, useState } from 'react';
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const PlaceOrder = () => {
  const [method, setMethod] = useState('');
  const {
    navigate,
    backendUrl,
    token,
    cartItems,
    setCartItems,
    getCartAmount,
    delivery_fee,
    products,
    user
  } = useContext(ShopContext);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: ''
  });

  useEffect(() => {
    if (user?.name) {
      const [first, ...last] = user.name.split(' ');
      setFormData((prev) => ({
        ...prev,
        firstName: first,
        lastName: last.join(' ')
      }));
    }
  }, [user]);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const { firstName, lastName, street, city, zipcode, country, phone } = formData;

    if (!firstName || !lastName || !street || !city || !zipcode || !country || !phone) {
      toast.error('Please fill in all required fields');
      return false;
    }

    if (user?.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email)) {
      toast.error('Logged in user email is invalid');
      return false;
    }

    if (phone.length < 10 || phone.length > 13) {
      toast.error('Enter a valid phone number');
      return false;
    }

    if (zipcode.length !== 6) {
      toast.error('Zipcode must be 6 digits');
      return false;
    }

    return true;
  };

  const prepareOrderData = () => {
    let orderItems = [];

    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          const itemInfo = structuredClone(products.find((product) => product._id === items));
          if (itemInfo) {
            itemInfo.size = item;
            itemInfo.quantity = cartItems[items][item];
            orderItems.push(itemInfo);
          }
        }
      }
    }

    return {
      address: formData,
      items: orderItems,
      amount: getCartAmount() + delivery_fee
    };
  };

  const sendEmailConfirmation = async (orderData) => {
    const messageBody = `
Hello ${formData.firstName} ${formData.lastName},

Thank you for your order!

📦 Order Summary:
${orderData.items.map((i) => `• ${i.name} (${i.size}) x${i.quantity}`).join('\n')}

💰 Total: ₹${orderData.amount}

🚚 Shipping to:
${formData.street}, ${formData.city}, ${formData.state}, ${formData.zipcode}, ${formData.country}

📞 Contact: ${formData.phone}

We’ll notify you once your order is shipped.
`;

    const emailData = {
      access_key: 'f8441138-0f5f-4de6-ad47-ebfc8db05d65',
      subject: 'Order Confirmation - Your Order with Us',
      name: `${formData.firstName} ${formData.lastName}`,
      email: user?.email,
      message: messageBody
    };

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(emailData)
      });

      const result = await res.json();
      if (result.success) {
        toast.success('Confirmation email sent!');
      } else {
        toast.warn('Order placed, but email could not be sent.');
      }
    } catch (error) {
      console.error('Email sending failed', error);
      toast.warn('Order placed, but email failed.');
    }
  };

  const initPay = async (orderData, razorpayOrder) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: razorpayOrder.amount,
      currency: razorpayOrder.currency,
      name: 'Order Payment',
      description: 'Order Payment',
      order_id: razorpayOrder.id,
      handler: async (response) => {
        try {
          const { data } = await axios.post(
            backendUrl + '/api/order/place',
            { ...orderData, razorpayResponse: response },
            { headers: { token } }
          );

          if (data.success) {
            setCartItems({});
            await sendEmailConfirmation(orderData);
            navigate('/orders');
            toast.success('Order placed successfully');
          } else {
            toast.error('Failed to place order');
          }
        } catch (error) {
          toast.error('Payment failed');
        }
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const orderData = prepareOrderData();

    try {
      if (method === 'cod') {
        const response = await axios.post(
          backendUrl + '/api/order/place',
          orderData,
          { headers: { token } }
        );

        if (response.data.success) {
          setCartItems({});
          await sendEmailConfirmation(orderData);
          navigate('/orders');
          toast.success('Order placed successfully');
        } else {
          toast.error(response.data.message);
        }
      } else if (method === 'razorpay') {
        const res = await axios.post(
          backendUrl + '/api/order/razorpay',
          orderData,
          { headers: { token } }
        );

        if (res.data.success) {
          await initPay(orderData, res.data.order);
        } else {
          toast.error(res.data.message);
        }
      } else {
        toast.error('Please select a payment method');
      }
    } catch (err) {
      toast.error('Something went wrong');
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1="DELIVERY" text2="INFORMATION" />
        </div>
        <div className="flex gap-3">
          <input required onChange={onChangeHandler} name="firstName" value={formData.firstName} className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="First name" />
          <input required onChange={onChangeHandler} name="lastName" value={formData.lastName} className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Last name" />
        </div>
        <input required onChange={onChangeHandler} name="street" value={formData.street} className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Street" />
        <div className="flex gap-3">
          <input required onChange={onChangeHandler} name="city" value={formData.city} className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="City" />
          <input onChange={onChangeHandler} name="state" value={formData.state} className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="State" />
        </div>
        <div className="flex gap-3">
          <input required onChange={onChangeHandler} name="zipcode" value={formData.zipcode} className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="number" placeholder="Zipcode" />
          <input required onChange={onChangeHandler} name="country" value={formData.country} className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Country" />
        </div>
        <input required onChange={onChangeHandler} name="phone" value={formData.phone} className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="number" placeholder="Phone" />
      </div>

      <div className="mt-8">
        <div className="min-w-80">
          <CartTotal />
        </div>

        <div className="mt-12">
          <Title text1="PAYMENT" text2="METHOD" />
          <div className="flex gap-3 flex-col lg:flex-row">
            <div onClick={() => setMethod('razorpay')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}`}></p>
              <img className="h-5 mx-4" src={assets.razorpay_logo} alt="" />
            </div>
            <div onClick={() => setMethod('cod')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
              <p className="text-gray-500 text-sm font-medium mx-4">CASH ON DELIVERY</p>
            </div>
          </div>

          <div className="w-full text-end mt-8">
            <button type="submit" className="bg-black text-white px-16 py-3 text-sm">PLACE ORDER</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;

