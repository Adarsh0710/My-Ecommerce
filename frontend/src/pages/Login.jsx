
// // // import React, { useContext, useEffect, useState } from 'react';
// // // import { ShopContext } from '../context/ShopContext';
// // // import axios from 'axios';
// // // import { toast } from 'react-toastify';

// // // const Login = () => {
// // //   const [currentState, setCurrentState] = useState('Login');
// // //   const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

// // //   const [name, setName] = useState('');
// // //   const [password, setPassword] = useState('');
// // //   const [email, setEmail] = useState('');
// // //   const [showPassword, setShowPassword] = useState(false); // New state for eye toggle

// // //   const togglePasswordVisibility = () => setShowPassword(!showPassword);

// // //   const onSubmitHandler = async (event) => {
// // //     event.preventDefault();
// // //     try {
// // //       if (currentState === 'Sign Up') {
// // //         const response = await axios.post(backendUrl + '/api/user/register', { name, email, password });
// // //         if (response.data.success) {
// // //           setToken(response.data.token);
// // //           localStorage.setItem('token', response.data.token);
// // //         } else {
// // //           toast.error(response.data.message);
// // //         }
// // //       } else {
// // //         const response = await axios.post(backendUrl + '/api/user/login', { email, password });
// // //         if (response.data.success) {
// // //           setToken(response.data.token);
// // //           localStorage.setItem('token', response.data.token);
// // //         } else {
// // //           toast.error(response.data.message);
// // //         }
// // //       }
// // //     } catch (error) {
// // //       console.log(error);
// // //       toast.error(error.message);
// // //     }
// // //   };

// // //   const handleForgotPassword = async () => {
// // //     try {
// // //       const response = await axios.post(backendUrl + '/api/user/forgot-password', { email });
// // //       if (response.data.success) {
// // //         toast.success('Password reset link sent to your email.');
// // //       } else {
// // //         toast.error(response.data.message);
// // //       }
// // //     } catch (error) {
// // //       toast.error('Failed to send reset link. Please try again.');
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     if (token) {
// // //       navigate('/');
// // //     }
// // //   }, [token]);

// // //   return (
// // //     <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
// // //       <div className='inline-flex items-center gap-2 mb-2 mt-10'>
// // //         <p className='prata-regular text-3xl'>{currentState}</p>
// // //         <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
// // //       </div>
// // //       {currentState === 'Login' ? '' : <input onChange={(e) => setName(e.target.value)} value={name} type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Name' required />}
// // //       <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className='w-full px-3 py-2 border border-gray-800' placeholder='Email' required />
      
// // //       <div className='relative w-full'>
// // //         <input
// // //           onChange={(e) => setPassword(e.target.value)}
// // //           value={password}
// // //           type={showPassword ? 'text' : 'password'}
// // //           className='w-full px-3 py-2 border border-gray-800 pr-10'
// // //           placeholder='Password'
// // //           required
// // //         />
// // //         <span
// // //           onClick={togglePasswordVisibility}
// // //           className='absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-gray-500'
// // //         >
// // //           {showPassword ? '👁️‍🗨️' : '👁️'}
// // //         </span>
// // //       </div>

// // //       <div className='w-full flex justify-between text-sm mt-[-8px]'>
// // //         <p className='cursor-pointer' onClick={handleForgotPassword}>Forgot your password?</p>
// // //         {currentState === 'Login' ? (
// // //           <p onClick={() => setCurrentState('Sign Up')} className='cursor-pointer'>Create account</p>
// // //         ) : (
// // //           <p onClick={() => setCurrentState('Login')} className='cursor-pointer'>Login Here</p>
// // //         )}
// // //       </div>

// // //       <button className='bg-black text-white font-light px-8 py-2 mt-4'>{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
// // //     </form>
// // //   );
// // // }

// // // export default Login;

// // jyfjfjyvhkui


// // // import React, { useContext, useEffect, useState } from 'react';
// // // import { ShopContext } from '../context/ShopContext';
// // // import axios from 'axios';
// // // import { toast } from 'react-toastify';

// // // const Login = () => {
// // //   const [currentState, setCurrentState] = useState('Login');
// // //   const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

// // //   const [name, setName] = useState('');
// // //   const [password, setPassword] = useState('');
// // //   const [email, setEmail] = useState('');
// // //   const [showPassword, setShowPassword] = useState(false);
// // //   const [otpSent, setOtpSent] = useState(false);
// // //   const [otpInput, setOtpInput] = useState('');
// // //   const [generatedOtp, setGeneratedOtp] = useState('');

// // //   const togglePasswordVisibility = () => setShowPassword(!showPassword);
// // //   const generateOtp = () => Math.floor(100000 + Math.random() * 900000).toString();

// // //   const sendOtpToEmail = async (otp) => {
// // //     try {
// // //       const response = await axios.post(backendUrl + '/api/user/send-otp', { email, otp });
// // //       if (response.data.success) {
// // //         toast.success('OTP sent to your email!');
// // //         return true;
// // //       } else {
// // //         toast.error('Failed to send OTP');
// // //         return false;
// // //       }
// // //     } catch (error) {
// // //       toast.error('Error sending OTP');
// // //       return false;
// // //     }
// // //   };

// // //   const onSubmitHandler = async (event) => {
// // //     event.preventDefault();
// // //     try {
// // //       if (email && password) {
// // //         const otp = generateOtp();
// // //         const sent = await sendOtpToEmail(otp);
// // //         if (sent) {
// // //           setGeneratedOtp(otp);
// // //           setOtpSent(true);
// // //         }
// // //       } else {
// // //         toast.error('Enter both email and password');
// // //       }
// // //     } catch (error) {
// // //       toast.error(error.message);
// // //     }
// // //   };

// // //   const verifyOtpHandler = (e) => {
// // //     e.preventDefault();
// // //     if (otpInput === generatedOtp) {
// // //       const fakeToken = 'mock-token-' + Date.now();
// // //       setToken(fakeToken);
// // //       localStorage.setItem('token', fakeToken);
// // //       toast.success('Login successful!');
// // //     } else {
// // //       toast.error('Invalid OTP');
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     if (token) {
// // //       navigate('/');
// // //     }
// // //   }, [token]);

// // //   return (
// // //     <form onSubmit={otpSent ? verifyOtpHandler : onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
// // //       <div className='inline-flex items-center gap-2 mb-2 mt-10'>
// // //         <p className='prata-regular text-3xl'>{otpSent ? 'Enter OTP' : currentState}</p>
// // //         <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
// // //       </div>

// // //       {!otpSent && currentState === 'Sign Up' && (
// // //         <input onChange={(e) => setName(e.target.value)} value={name} type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Name' required />
// // //       )}

// // //       {!otpSent && (
// // //         <>
// // //           <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className='w-full px-3 py-2 border border-gray-800' placeholder='Email' required />
// // //           <div className='relative w-full'>
// // //             <input
// // //               onChange={(e) => setPassword(e.target.value)}
// // //               value={password}
// // //               type={showPassword ? 'text' : 'password'}
// // //               className='w-full px-3 py-2 border border-gray-800 pr-10'
// // //               placeholder='Password'
// // //               required
// // //             />
// // //             <span onClick={togglePasswordVisibility} className='absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-gray-500'>
// // //               {showPassword ? '👁️‍🗨️' : '👁️'}
// // //             </span>
// // //           </div>
// // //         </>
// // //       )}

// // //       {otpSent && (
// // //         <input onChange={(e) => setOtpInput(e.target.value)} value={otpInput} type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Enter 6-digit OTP' required />
// // //       )}

// // //       {!otpSent && (
// // //         <div className='w-full flex justify-between text-sm mt-[-8px]'>
// // //           <p className='cursor-pointer' onClick={() => toast.info('Add forgot password logic here')}>Forgot your password?</p>
// // //           {currentState === 'Login' ? (
// // //             <p onClick={() => setCurrentState('Sign Up')} className='cursor-pointer'>Create account</p>
// // //           ) : (
// // //             <p onClick={() => setCurrentState('Login')} className='cursor-pointer'>Login Here</p>
// // //           )}
// // //         </div>
// // //       )}

// // //       <button className='bg-black text-white font-light px-8 py-2 mt-4'>
// // //         {otpSent ? 'Verify OTP' : (currentState === 'Login' ? 'Sign In' : 'Sign Up')}
// // //       </button>
// // //     </form>
// // //   );
// // // };

// // // export default Login;


// import React, { useContext, useEffect, useState } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const Login = () => {
//   const [currentState, setCurrentState] = useState('Login');
//   const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

//   const [name, setName] = useState('');
//   const [password, setPassword] = useState('');
//   const [email, setEmail] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [otpSent, setOtpSent] = useState(false);
//   const [otpInput, setOtpInput] = useState('');
//   const [generatedOtp, setGeneratedOtp] = useState('');

//   const togglePasswordVisibility = () => setShowPassword(!showPassword);
//   const generateOtp = () => Math.floor(100000 + Math.random() * 900000).toString();

//   const sendOtpToEmail = async (otp) => {
//     try {
//       const response = await axios.post(backendUrl + '/api/otp/send-otp', { email, otp }); // ✅ Correct endpoint
//       if (response.data.success) {
//         toast.success('OTP sent to your email!');
//         return true;
//       } else {
//         toast.error('Failed to send OTP');
//         return false;
//       }
//     } catch (error) {
//       toast.error('Error sending OTP');
//       return false;
//     }
//   };

//   const onSubmitHandler = async (event) => {
//     event.preventDefault();
//     try {
//       if (email && password) {
//         const otp = generateOtp();
//         const sent = await sendOtpToEmail(otp);
//         if (sent) {
//           setGeneratedOtp(otp);
//           setOtpSent(true);
//         }
//       } else {
//         toast.error('Enter both email and password');
//       }
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   const verifyOtpHandler = (e) => {
//     e.preventDefault();
//     if (otpInput === generatedOtp) {
//       const fakeToken = 'mock-token-' + Date.now();
//       setToken(fakeToken);
//       localStorage.setItem('token', fakeToken);
//       toast.success('Login successful!');
//     } else {
//       toast.error('Invalid OTP');
//     }
//   };

//   useEffect(() => {
//     if (token) {
//       navigate('/');
//     }
//   }, [token]);

//   return (
//     <form onSubmit={otpSent ? verifyOtpHandler : onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
//       <div className='inline-flex items-center gap-2 mb-2 mt-10'>
//         <p className='prata-regular text-3xl'>{otpSent ? 'Enter OTP' : currentState}</p>
//         <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
//       </div>

//       {!otpSent && currentState === 'Sign Up' && (
//         <input onChange={(e) => setName(e.target.value)} value={name} type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Name' required />
//       )}

//       {!otpSent && (
//         <>
//           <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className='w-full px-3 py-2 border border-gray-800' placeholder='Email' required />
//           <div className='relative w-full'>
//             <input
//               onChange={(e) => setPassword(e.target.value)}
//               value={password}
//               type={showPassword ? 'text' : 'password'}
//               className='w-full px-3 py-2 border border-gray-800 pr-10'
//               placeholder='Password'
//               required
//             />
//             <span onClick={togglePasswordVisibility} className='absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-gray-500'>
//               {showPassword ? '👁️‍🗨️' : '👁️'}
//             </span>
//           </div>
//         </>
//       )}

//       {otpSent && (
//         <input onChange={(e) => setOtpInput(e.target.value)} value={otpInput} type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Enter 6-digit OTP' required />
//       )}

//       {!otpSent && (
//         <div className='w-full flex justify-between text-sm mt-[-8px]'>
//           <p className='cursor-pointer' onClick={() => toast.info('Add forgot password logic here')}>Forgot your password?</p>
//           {currentState === 'Login' ? (
//             <p onClick={() => setCurrentState('Sign Up')} className='cursor-pointer'>Create account</p>
//           ) : (
//             <p onClick={() => setCurrentState('Login')} className='cursor-pointer'>Login Here</p>
//           )}
//         </div>
//       )}

//       <button className='bg-black text-white font-light px-8 py-2 mt-4'>
//         {otpSent ? 'Verify OTP' : (currentState === 'Login' ? 'Sign In' : 'Sign Up')}
//       </button>
//     </form>
//   );
// };

// export default Login;



// // import React, { useContext, useEffect, useState } from 'react';
// // import { ShopContext } from '../context/ShopContext';
// // import axios from 'axios';
// // import { toast } from 'react-toastify';

// // const Login = () => {
// //   const [currentState, setCurrentState] = useState('Login');
// //   const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

// //   const [name, setName] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [showPassword, setShowPassword] = useState(false);

// //   const togglePasswordVisibility = () => setShowPassword(!showPassword);

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     if (!email || !password) {
// //       toast.error('Please enter email and password');
// //       return;
// //     }

// //     try {
// //       if (currentState === 'Login') {
// //         const response = await axios.post(`${backendUrl}/api/auth/login`, {
// //           email,
// //           password
// //         });

// //         if (response.data.success) {
// //           setToken(response.data.token);
// //           localStorage.setItem('token', response.data.token);
// //           toast.success('Login successful!');
// //         } else {
// //           toast.error(response.data.message);
// //         }
// //       } else {
// //         if (!name) {
// //           toast.error('Please enter your name');
// //           return;
// //         }

// //         const response = await axios.post(`${backendUrl}/api/auth/signup`, {
// //           name,
// //           email,
// //           password
// //         });

// //         if (response.data.success) {
// //           setToken(response.data.token);
// //           localStorage.setItem('token', response.data.token);
// //           toast.success('Signup successful!');
// //         } else {
// //           toast.error(response.data.message);
// //         }
// //       }
// //     } catch (error) {
// //       toast.error('Something went wrong. Please try again.');
// //     }
// //   };

// //   useEffect(() => {
// //     if (token) {
// //       navigate('/');
// //     }
// //   }, [token]);

// //   return (
// //     <form onSubmit={handleSubmit} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
// //       <div className="inline-flex items-center gap-2 mb-2 mt-10">
// //         <p className="text-3xl">{currentState === 'Login' ? 'Login' : 'Sign Up'}</p>
// //         <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
// //       </div>

// //       {currentState === 'Sign Up' && (
// //         <input
// //           onChange={(e) => setName(e.target.value)}
// //           value={name}
// //           type="text"
// //           className="w-full px-3 py-2 border border-gray-800"
// //           placeholder="Name"
// //           required
// //         />
// //       )}

// //       <input
// //         onChange={(e) => setEmail(e.target.value)}
// //         value={email}
// //         type="email"
// //         className="w-full px-3 py-2 border border-gray-800"
// //         placeholder="Email"
// //         required
// //       />

// //       <div className="relative w-full">
// //         <input
// //           onChange={(e) => setPassword(e.target.value)}
// //           value={password}
// //           type={showPassword ? 'text' : 'password'}
// //           className="w-full px-3 py-2 border border-gray-800 pr-10"
// //           placeholder="Password"
// //           required
// //         />
// //         <span onClick={togglePasswordVisibility} className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-gray-500">
// //           {showPassword ? '👁️‍🗨️' : '👁️'}
// //         </span>
// //       </div>

// //       <div className="w-full flex justify-between text-sm mt-[-8px]">
// //         <p className="cursor-pointer" onClick={() => toast.info('Forgot password logic not implemented yet')}>
// //           Forgot your password?
// //         </p>
// //         {currentState === 'Login' ? (
// //           <p onClick={() => setCurrentState('Sign Up')} className="cursor-pointer">
// //             Create account
// //           </p>
// //         ) : (
// //           <p onClick={() => setCurrentState('Login')} className="cursor-pointer">
// //             Login Here
// //           </p>
// //         )}
// //       </div>

// //       <button className="bg-black text-white font-light px-8 py-2 mt-4">
// //         {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
// //       </button>
// //     </form>
// //   );
// // };

// // export default Login;






import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
  const [currentState, setCurrentState] = useState('Login');
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otpInput, setOtpInput] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState('');

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const generateOtp = () => Math.floor(100000 + Math.random() * 900000).toString();

  const sendOtpToEmail = async (otp) => {
    try {
      const response = await axios.post(backendUrl + '/api/otp/send-otp', { email, otp });
      if (response.data.success) {
        toast.success('OTP sent to your email!');
        return true;
      } else {
        toast.error('Failed to send OTP');
        return false;
      }
    } catch (error) {
      toast.error('Error sending OTP');
      return false;
    }
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (!email || !password || (currentState === 'Sign Up' && !name)) {
        toast.error('Please fill all fields');
        return;
      }

      if (!otpSent) {
        const otp = generateOtp();
        const sent = await sendOtpToEmail(otp);
        if (sent) {
          setGeneratedOtp(otp);
          setOtpSent(true);
        }
      } else {
        if (otpInput !== generatedOtp) {
          toast.error('Invalid OTP');
          return;
        }

        const endpoint = currentState === 'Login' ? '/api/user/login' : '/api/user/register';
        const payload = currentState === 'Login' ? { email, password } : { name, email, password };

        const response = await axios.post(backendUrl + endpoint, payload);

        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
          toast.success('Login successful!');
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || 'Something went wrong');
    }
  };

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token]);

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{otpSent ? 'Enter OTP' : currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>

      {!otpSent && currentState === 'Sign Up' && (
        <input onChange={(e) => setName(e.target.value)} value={name} type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Name' required />
      )}

      {!otpSent && (
        <>
          <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className='w-full px-3 py-2 border border-gray-800' placeholder='Email' required />
          <div className='relative w-full'>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type={showPassword ? 'text' : 'password'}
              className='w-full px-3 py-2 border border-gray-800 pr-10'
              placeholder='Password'
              required
            />
            <span onClick={togglePasswordVisibility} className='absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-gray-500'>
              {showPassword ? '👁️‍🗨️' : '👁️'}
            </span>
          </div>
        </>
      )}

      {otpSent && (
        <input onChange={(e) => setOtpInput(e.target.value)} value={otpInput} type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Enter 6-digit OTP' required />
      )}

      {!otpSent && (
        <div className='w-full flex justify-between text-sm mt-[-8px]'>
          <p className='cursor-pointer' onClick={() => toast.info('Add forgot password logic here')}>Forgot your password?</p>
          {currentState === 'Login' ? (
            <p onClick={() => setCurrentState('Sign Up')} className='cursor-pointer'>Create account</p>
          ) : (
            <p onClick={() => setCurrentState('Login')} className='cursor-pointer'>Login Here</p>
          )}
        </div>
      )}

      <button className='bg-black text-white font-light px-8 py-2 mt-4'>
        {otpSent ? 'Verify OTP' : (currentState === 'Login' ? 'Sign In' : 'Sign Up')}
      </button>
    </form>
  );
};

export default Login;
