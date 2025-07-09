// // // import { createContext, useEffect, useState } from "react";
// // // import { toast } from "react-toastify";
// // // import { useNavigate } from "react-router-dom";
// // // import axios from 'axios'

// // // export const ShopContext = createContext();

// // // const ShopContextProvider = (props) => {

// // //     const currency = 'Rs. ';
// // //     const delivery_fee = 10;
// // //     const backendUrl = import.meta.env.VITE_BACKEND_URL
// // //     const [search, setSearch] = useState('');
// // //     const [showSearch, setShowSearch] = useState(false);
// // //     const [cartItems, setCartItems] = useState({});
// // //     const [products, setProducts] = useState([]);
// // //     const [token, setToken] = useState('')
// // //     const navigate = useNavigate();


// // //     const addToCart = async (itemId, size) => {

// // //         if (!size) {
// // //             toast.error('Select Product Size');
// // //             return;
// // //         }

// // //         let cartData = structuredClone(cartItems);

// // //         if (cartData[itemId]) {
// // //             if (cartData[itemId][size]) {
// // //                 cartData[itemId][size] += 1;
// // //             }
// // //             else {
// // //                 cartData[itemId][size] = 1;
// // //             }
// // //         }
// // //         else {
// // //             cartData[itemId] = {};
// // //             cartData[itemId][size] = 1;
// // //         }
// // //         setCartItems(cartData);

// // //         if (token) {
// // //             try {

// // //                 await axios.post(backendUrl + '/api/cart/add', { itemId, size }, { headers: { token } })

// // //             } catch (error) {
// // //                 console.log(error)
// // //                 toast.error(error.message)
// // //             }
// // //         }

// // //     }

// // //     const getCartCount = () => {
// // //         let totalCount = 0;
// // //         for (const items in cartItems) {
// // //             for (const item in cartItems[items]) {
// // //                 try {
// // //                     if (cartItems[items][item] > 0) {
// // //                         totalCount += cartItems[items][item];
// // //                     }
// // //                 } catch (error) {

// // //                 }
// // //             }
// // //         }
// // //         return totalCount;
// // //     }

// // //     const updateQuantity = async (itemId, size, quantity) => {

// // //         let cartData = structuredClone(cartItems);

// // //         cartData[itemId][size] = quantity;

// // //         setCartItems(cartData)

// // //         if (token) {
// // //             try {

// // //                 await axios.post(backendUrl + '/api/cart/update', { itemId, size, quantity }, { headers: { token } })

// // //             } catch (error) {
// // //                 console.log(error)
// // //                 toast.error(error.message)
// // //             }
// // //         }

// // //     }

// // //     const getCartAmount = () => {
// // //         let totalAmount = 0;
// // //         for (const items in cartItems) {
// // //             let itemInfo = products.find((product) => product._id === items);
// // //             for (const item in cartItems[items]) {
// // //                 try {
// // //                     if (cartItems[items][item] > 0) {
// // //                         totalAmount += itemInfo.price * cartItems[items][item];
// // //                     }
// // //                 } catch (error) {

// // //                 }
// // //             }
// // //         }
// // //         return totalAmount;
// // //     }

// // //     const getProductsData = async () => {
// // //         try {

// // //             const response = await axios.get(backendUrl + '/api/product/list')
// // //             if (response.data.success) {
// // //                 setProducts(response.data.products.reverse())
// // //             } else {
// // //                 toast.error(response.data.message)
// // //             }

// // //         } catch (error) {
// // //             console.log(error)
// // //             toast.error(error.message)
// // //         }
// // //     }

// // //     const getUserCart = async ( token ) => {
// // //         try {
            
// // //             const response = await axios.post(backendUrl + '/api/cart/get',{},{headers:{token}})
// // //             if (response.data.success) {
// // //                 setCartItems(response.data.cartData)
// // //             }
// // //         } catch (error) {
// // //             console.log(error)
// // //             toast.error(error.message)
// // //         }
// // //     }

// // //     useEffect(() => {
// // //         getProductsData()
// // //     }, [])

// // //     useEffect(() => {
// // //         if (!token && localStorage.getItem('token')) {
// // //             setToken(localStorage.getItem('token'))
// // //             getUserCart(localStorage.getItem('token'))
// // //         }
// // //         if (token) {
// // //             getUserCart(token)
// // //         }
// // //     }, [token])

// // //     const value = {
// // //         products, currency, delivery_fee,
// // //         search, setSearch, showSearch, setShowSearch,
// // //         cartItems, addToCart,setCartItems,
// // //         getCartCount, updateQuantity,
// // //         getCartAmount, navigate, backendUrl,
// // //         setToken, token
// // //     }

// // //     return (
// // //         <ShopContext.Provider value={value}>
// // //             {props.children}
// // //         </ShopContext.Provider>
// // //     )

// // // }

// // // export default ShopContextProvider;













































































































































































































// // import { createContext, useEffect, useState } from "react";
// // import { toast } from "react-toastify";
// // import { useNavigate } from "react-router-dom";
// // import axios from 'axios'

// // export const ShopContext = createContext();

// // const ShopContextProvider = (props) => {

// //     const currency = 'Rs. ';
// //     const delivery_fee = 50;
// //     const backendUrl = import.meta.env.VITE_BACKEND_URL
// //     const [search, setSearch] = useState('');
// //     const [showSearch, setShowSearch] = useState(false);
// //     const [cartItems, setCartItems] = useState({});
// //     const [products, setProducts] = useState([]);
// //     const [token, setToken] = useState('')
// //     const navigate = useNavigate();


// //     const addToCart = async (itemId, size) => {

// //         if (!size) {
// //             toast.error('Select Product Size');
// //             return;
// //         }

// //         let cartData = structuredClone(cartItems);

// //         if (cartData[itemId]) {
// //             if (cartData[itemId][size]) {
// //                 cartData[itemId][size] += 1;
// //             }
// //             else {
// //                 cartData[itemId][size] = 1;
// //             }
// //         }
// //         else {
// //             cartData[itemId] = {};
// //             cartData[itemId][size] = 1;
// //         }
// //         setCartItems(cartData);

// //         toast.success(`Added ${size} of item to cart`);

// //         if (token) {
// //             try {

// //                 await axios.post(backendUrl + '/api/cart/add', { itemId, size }, { headers: { token } })

// //             } catch (error) {
// //                 console.log(error)
// //                 toast.error(error.message)
// //             }
// //         }

// //     }

// //     const getCartCount = () => {
// //         let totalCount = 0;
// //         for (const items in cartItems) {
// //             for (const item in cartItems[items]) {
// //                 try {
// //                     if (cartItems[items][item] > 0) {
// //                         totalCount += cartItems[items][item];
// //                     }
// //                 } catch (error) {

// //                 }
// //             }
// //         }
// //         return totalCount;
// //     }

// //     const updateQuantity = async (itemId, size, quantity) => {

// //         let cartData = structuredClone(cartItems);

// //         cartData[itemId][size] = quantity;

// //         setCartItems(cartData)

// //         toast.success(`Cart updated: ${size} of item set to ${quantity}`);

// //         if (token) {
// //             try {

// //                 await axios.post(backendUrl + '/api/cart/update', { itemId, size, quantity }, { headers: { token } })

// //             } catch (error) {
// //                 console.log(error)
// //                 toast.error(error.message)
// //             }
// //         }

// //     }

// //     const removeFromCart = async (itemId, size) => {
// //         let cartData = structuredClone(cartItems);
        
// //         if (cartData[itemId] && cartData[itemId][size]) {
// //             delete cartData[itemId][size];
// //             if (Object.keys(cartData[itemId]).length === 0) {
// //                 delete cartData[itemId];
// //             }
// //         }
        
// //         setCartItems(cartData);
        
// //         toast.success(`Removed ${size} of item from cart`);
        
// //         if (token) {
// //             try {
// //                 await axios.post(backendUrl + '/api/cart/remove', { itemId, size }, { headers: { token } });
// //             } catch (error) {
// //                 console.log(error);
// //                 toast.error(error.message);
// //             }
// //         }
// //     }

// //     const getCartAmount = () => {
// //         let totalAmount = 0;
// //         for (const items in cartItems) {
// //             let itemInfo = products.find((product) => product._id === items);
// //             for (const item in cartItems[items]) {
// //                 try {
// //                     if (cartItems[items][item] > 0) {
// //                         totalAmount += itemInfo.price * cartItems[items][item];
// //                     }
// //                 } catch (error) {

// //                 }
// //             }
// //         }
// //         return totalAmount;
// //     }

// //     const getProductsData = async () => {
// //         try {

// //             const response = await axios.get(backendUrl + '/api/product/list')
// //             if (response.data.success) {
// //                 setProducts(response.data.products.reverse())
// //             } else {
// //                 toast.error(response.data.message)
// //             }

// //         } catch (error) {
// //             console.log(error)
// //             toast.error(error.message)
// //         }
// //     }

// //     const getUserCart = async ( token ) => {
// //         try {
            
// //             const response = await axios.post(backendUrl + '/api/cart/get',{},{headers:{token}})
// //             if (response.data.success) {
// //                 setCartItems(response.data.cartData)
// //             }
// //         } catch (error) {
// //             console.log(error)
// //             toast.error(error.message)
// //         }
// //     }

// //     useEffect(() => {
// //         getProductsData()
// //     }, [])

// //     useEffect(() => {
// //         if (!token && localStorage.getItem('token')) {
// //             setToken(localStorage.getItem('token'))
// //             getUserCart(localStorage.getItem('token'))
// //         }
// //         if (token) {
// //             getUserCart(token)
// //         }
// //     }, [token])

// //     const value = {
// //         products, currency, delivery_fee,
// //         search, setSearch, showSearch, setShowSearch,
// //         cartItems, addToCart, setCartItems,
// //         getCartCount, updateQuantity, removeFromCart,
// //         getCartAmount, navigate, backendUrl,
// //         setToken, token
// //     }

// //     return (
// //         <ShopContext.Provider value={value}>
// //             {props.children}
// //         </ShopContext.Provider>
// //     )

// // }

// // export default ShopContextProvider;

// // good one is the above one ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// // import { createContext, useEffect, useState } from "react";
// // import { toast } from "react-toastify";
// // import { useNavigate } from "react-router-dom";
// // import axios from 'axios';

// // export const ShopContext = createContext();

// // const ShopContextProvider = (props) => {
// //   const currency = 'Rs. ';
// //   const delivery_fee = 50;
// //   const backendUrl = import.meta.env.VITE_BACKEND_URL;
// //   const [search, setSearch] = useState('');
// //   const [showSearch, setShowSearch] = useState(false);
// //   const [cartItems, setCartItems] = useState({});
// //   const [products, setProducts] = useState([]);
// //   const [token, setToken] = useState('');
// //   const navigate = useNavigate();

// //   const addToCart = async (itemId, size) => {
// //     if (!size) {
// //       toast.error('Select Product Size');
// //       return;
// //     }

// //     let cartData = structuredClone(cartItems);
// //     cartData[itemId] = cartData[itemId] || {};
// //     cartData[itemId][size] = (cartData[itemId][size] || 0) + 1;
// //     setCartItems(cartData);
// //     toast.success(`Added ${size} of item to cart`);

// //     if (token) {
// //       try {
// //         await axios.post(backendUrl + '/api/cart/add', { itemId, size }, {
// //           headers: { Authorization: `Bearer ${token}` }
// //         });
// //       } catch (error) {
// //         console.log(error);
// //         toast.error(error.message);
// //       }
// //     }
// //   };

// //   const getCartCount = () => {
// //     let totalCount = 0;
// //     for (const items in cartItems) {
// //       for (const item in cartItems[items]) {
// //         totalCount += cartItems[items][item] || 0;
// //       }
// //     }
// //     return totalCount;
// //   };

// //   const updateQuantity = async (itemId, size, quantity) => {
// //     let cartData = structuredClone(cartItems);
// //     cartData[itemId][size] = quantity;
// //     setCartItems(cartData);
// //     toast.success(`Cart updated: ${size} of item set to ${quantity}`);

// //     if (token) {
// //       try {
// //         await axios.post(backendUrl + '/api/cart/update', { itemId, size, quantity }, {
// //           headers: { Authorization: `Bearer ${token}` }
// //         });
// //       } catch (error) {
// //         console.log(error);
// //         toast.error(error.message);
// //       }
// //     }
// //   };

// //   const removeFromCart = async (itemId, size) => {
// //     let cartData = structuredClone(cartItems);
// //     if (cartData[itemId]?.[size]) {
// //       delete cartData[itemId][size];
// //       if (Object.keys(cartData[itemId]).length === 0) {
// //         delete cartData[itemId];
// //       }
// //       setCartItems(cartData);
// //       toast.success(`Removed ${size} of item from cart`);
// //       if (token) {
// //         try {
// //           await axios.post(backendUrl + '/api/cart/remove', { itemId, size }, {
// //             headers: { Authorization: `Bearer ${token}` }
// //           });
// //         } catch (error) {
// //           console.log(error);
// //           toast.error(error.message);
// //         }
// //       }
// //     }
// //   };

// //   const getCartAmount = () => {
// //     let totalAmount = 0;
// //     for (const items in cartItems) {
// //       const itemInfo = products.find((p) => p._id === items);
// //       if (!itemInfo) continue;
// //       for (const size in cartItems[items]) {
// //         totalAmount += itemInfo.price * cartItems[items][size];
// //       }
// //     }
// //     return totalAmount;
// //   };

// //   const getProductsData = async () => {
// //     try {
// //       const response = await axios.get(backendUrl + '/api/product/list');
// //       if (response.data.success) {
// //         setProducts(response.data.products.reverse());
// //       } else {
// //         toast.error(response.data.message);
// //       }
// //     } catch (error) {
// //       console.log(error);
// //       toast.error(error.message);
// //     }
// //   };

// //   const getUserCart = async (passedToken) => {
// //     try {
// //       const response = await axios.post(
// //         backendUrl + '/api/cart/get',
// //         {},
// //         { headers: { Authorization: `Bearer ${passedToken}` } }
// //       );
// //       if (response.data.success) {
// //         setCartItems(response.data.cartData);
// //       }
// //     } catch (error) {
// //       console.log(error);
// //       toast.error(error.message);
// //     }
// //   };

// //   useEffect(() => {
// //     getProductsData();
// //   }, []);

// //   useEffect(() => {
// //     const storedToken = localStorage.getItem('token');
// //     if (!token && storedToken) {
// //       setToken(storedToken);
// //       getUserCart(storedToken);
// //     } else if (token) {
// //       getUserCart(token);
// //     }
// //   }, [token]);

// //   const value = {
// //     products, currency, delivery_fee,
// //     search, setSearch, showSearch, setShowSearch,
// //     cartItems, addToCart, setCartItems,
// //     getCartCount, updateQuantity, removeFromCart,
// //     getCartAmount, navigate, backendUrl,
// //     setToken, token
// //   };

// //   return (
// //     <ShopContext.Provider value={value}>
// //       {props.children}
// //     </ShopContext.Provider>
// //   );
// // };

// // export default ShopContextProvider;



// import { createContext, useEffect, useState } from "react";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import axios from 'axios';

// export const ShopContext = createContext();

// const ShopContextProvider = (props) => {
//   const currency = 'Rs. ';
//   const delivery_fee = 50;
//   const backendUrl = import.meta.env.VITE_BACKEND_URL;

//   const [search, setSearch] = useState('');
//   const [showSearch, setShowSearch] = useState(false);
//   const [cartItems, setCartItems] = useState({});
//   const [products, setProducts] = useState([]);
//   const [token, setToken] = useState('');
//   const [user, setUser] = useState(null); 

//   const navigate = useNavigate();

//   const addToCart = async (itemId, size) => {
//     if (!size) {
//       toast.error('Select Product Size');
//       return;
//     }

//     let cartData = structuredClone(cartItems);
//     cartData[itemId] = cartData[itemId] || {};
//     cartData[itemId][size] = (cartData[itemId][size] || 0) + 1;
//     setCartItems(cartData);
//     toast.success(`Added ${size} of item to cart`);

//     if (token) {
//       try {
//         await axios.post(backendUrl + '/api/cart/add', { itemId, size }, {
//           headers: { Authorization: `Bearer ${token}` }
//         });
//       } catch (error) {
//         console.log(error);
//         toast.error(error.message);
//       }
//     }
//   };

//   const getCartCount = () => {
//     let totalCount = 0;
//     for (const items in cartItems) {
//       for (const item in cartItems[items]) {
//         totalCount += cartItems[items][item] || 0;
//       }
//     }
//     return totalCount;
//   };

//   const updateQuantity = async (itemId, size, quantity) => {
//     let cartData = structuredClone(cartItems);
//     cartData[itemId][size] = quantity;
//     setCartItems(cartData);
//     toast.success(`Cart updated: ${size} of item set to ${quantity}`);

//     if (token) {
//       try {
//         await axios.post(backendUrl + '/api/cart/update', { itemId, size, quantity }, {
//           headers: { Authorization: `Bearer ${token}` }
//         });
//       } catch (error) {
//         console.log(error);
//         toast.error(error.message);
//       }
//     }
//   };

//   const removeFromCart = async (itemId, size) => {
//     let cartData = structuredClone(cartItems);
//     if (cartData[itemId]?.[size]) {
//       delete cartData[itemId][size];
//       if (Object.keys(cartData[itemId]).length === 0) {
//         delete cartData[itemId];
//       }
//       setCartItems(cartData);
//       toast.success(`Removed ${size} of item from cart`);
//       if (token) {
//         try {
//           await axios.post(backendUrl + '/api/cart/remove', { itemId, size }, {
//             headers: { Authorization: `Bearer ${token}` }
//           });
//         } catch (error) {
//           console.log(error);
//           toast.error(error.message);
//         }
//       }
//     }
//   };

//   const getCartAmount = () => {
//     let totalAmount = 0;
//     for (const items in cartItems) {
//       const itemInfo = products.find((p) => p._id === items);
//       if (!itemInfo) continue;
//       for (const size in cartItems[items]) {
//         totalAmount += itemInfo.price * cartItems[items][size];
//       }
//     }
//     return totalAmount;
//   };

//   const getProductsData = async () => {
//     try {
//       const response = await axios.get(backendUrl + '/api/product/list');
//       if (response.data.success) {
//         setProducts(response.data.products.reverse());
//       } else {
//         toast.error(response.data.message);
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error(error.message);
//     }
//   };

//   const getUserCart = async (passedToken) => {
//     try {
//       const response = await axios.post(
//         backendUrl + '/api/cart/get',
//         {},
//         { headers: { Authorization: `Bearer ${passedToken}` } }
//       );
//       if (response.data.success) {
//         setCartItems(response.data.cartData);
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error(error.message);
//     }
//   };

//   const getUserProfile = async (passedToken) => {
//     try {
//       const res = await axios.get(`${backendUrl}/api/user/profile`, {
//         headers: { token: passedToken }
//       });
//       if (res.data.success) {
//         setUser(res.data.user);
//       }
//     } catch (err) {
//       console.error("Failed to load user profile", err);
//     }
//   };

//   useEffect(() => {
//     getProductsData();
//   }, []);

//   useEffect(() => {
//     const storedToken = localStorage.getItem('token');
//     const finalToken = token || storedToken;
//     if (finalToken) {
//       setToken(finalToken);
//       getUserCart(finalToken);
//       getUserProfile(finalToken); // ✅ Fetch user profile
//     }
//   }, [token]);

//   const value = {
//     products, currency, delivery_fee,
//     search, setSearch, showSearch, setShowSearch,
//     cartItems, addToCart, setCartItems,
//     getCartCount, updateQuantity, removeFromCart,
//     getCartAmount, navigate, backendUrl,
//     setToken, token,
//     user // ✅ Make user available everywhere
//   };

//   return (
//     <ShopContext.Provider value={value}>
//       {props.children}
//     </ShopContext.Provider>
//   );
// };

// export default ShopContextProvider;




import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = 'Rs. ';
    const delivery_fee = 50;
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const [products, setProducts] = useState([]);
    const [token, setToken] = useState('')
    const navigate = useNavigate();


    const addToCart = async (itemId, size) => {

        if (!size) {
            toast.error('Select Product Size');
            return;
        }

        let cartData = structuredClone(cartItems);

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            }
            else {
                cartData[itemId][size] = 1;
            }
        }
        else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        setCartItems(cartData);

        toast.success(`Added ${size} of item to cart`);

        if (token) {
            try {

                await axios.post(backendUrl + '/api/cart/add', { itemId, size }, { headers: { token } })

            } catch (error) {
                console.log(error)
                toast.error(error.message)
            }
        }

    }

    const getCartCount = () => {
        let totalCount = 0;
        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalCount += cartItems[items][item];
                    }
                } catch (error) {

                }
            }
        }
        return totalCount;
    }

    const updateQuantity = async (itemId, size, quantity) => {

        let cartData = structuredClone(cartItems);

        cartData[itemId][size] = quantity;

        setCartItems(cartData)

        toast.success(`Cart updated: ${size} of item set to ${quantity}`);

        if (token) {
            try {

                await axios.post(backendUrl + '/api/cart/update', { itemId, size, quantity }, { headers: { token } })

            } catch (error) {
                console.log(error)
                toast.error(error.message)
            }
        }

    }

    const removeFromCart = async (itemId, size) => {
        let cartData = structuredClone(cartItems);
        
        if (cartData[itemId] && cartData[itemId][size]) {
            delete cartData[itemId][size];
            if (Object.keys(cartData[itemId]).length === 0) {
                delete cartData[itemId];
            }
        }
        
        setCartItems(cartData);
        
        toast.success(`Removed ${size} of item from cart`);
        
        if (token) {
            try {
                await axios.post(backendUrl + '/api/cart/remove', { itemId, size }, { headers: { token } });
            } catch (error) {
                console.log(error);
                toast.error(error.message);
            }
        }
    }

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const items in cartItems) {
            let itemInfo = products.find((product) => product._id === items);
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalAmount += itemInfo.price * cartItems[items][item];
                    }
                } catch (error) {

                }
            }
        }
        return totalAmount;
    }

    const getProductsData = async () => {
        try {

            const response = await axios.get(backendUrl + '/api/product/list')
            if (response.data.success) {
                setProducts(response.data.products.reverse())
            } else {
                toast.error(response.data.message)
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    const getUserCart = async ( token ) => {
        try {
            
            const response = await axios.post(backendUrl + '/api/cart/get',{},{headers:{token}})
            if (response.data.success) {
                setCartItems(response.data.cartData)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    useEffect(() => {
        getProductsData()
    }, [])

    useEffect(() => {
        if (!token && localStorage.getItem('token')) {
            setToken(localStorage.getItem('token'))
            getUserCart(localStorage.getItem('token'))
        }
        if (token) {
            getUserCart(token)
        }
    }, [token])

    const value = {
        products, currency, delivery_fee,
        search, setSearch, showSearch, setShowSearch,
        cartItems, addToCart, setCartItems,
        getCartCount, updateQuantity, removeFromCart,
        getCartAmount, navigate, backendUrl,
        setToken, token
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )

}

export default ShopContextProvider;
