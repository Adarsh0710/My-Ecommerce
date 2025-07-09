

// // import React, { useEffect, useState, useContext } from 'react';
// // import axios from 'axios';
// // import { ShopContext } from '../context/ShopContext';
// // import { useNavigate } from 'react-router-dom';
// // import { toast } from 'react-toastify';

// // const Profile = () => {
// //   const { backendUrl, token, logoutUser } = useContext(ShopContext);
// //   const navigate = useNavigate();

// //   const [user, setUser] = useState(null);
// //   const [orders, setOrders] = useState([]);

// //   const fetchUserProfile = async () => {
// //     try {
// //       const res = await axios.get(`${backendUrl}/api/user/profile`, {
// //         headers: { token } // ✅ Match backend expectation
// //       });
// //       if (res.data.success) {
// //         setUser(res.data.user);
// //       } else {
// //         toast.error('Failed to fetch user profile');
// //       }
// //     } catch (error) {
// //       toast.error('Could not load profile');
// //       console.error(error);
// //     }
// //   };

// //   const fetchUserOrders = async () => {
// //     try {
// //       const res = await axios.post(`${backendUrl}/api/order/userorders`, {}, {
// //         headers: { token }
// //       });
// //       if (res.data.success) {
// //         setOrders(res.data.orders.reverse());
// //       } else {
// //         toast.error('Failed to fetch orders');
// //       }
// //     } catch (error) {
// //       toast.error('Could not load orders');
// //       console.error(error);
// //     }
// //   };

// //   useEffect(() => {
// //     if (!token) {
// //       navigate('/login');
// //       return;
// //     }
// //     fetchUserProfile();
// //     fetchUserOrders();
// //   }, [token]);

// //   const handleLogout = () => {
// //     logoutUser();
// //     toast.success("Logged out successfully");
// //     navigate('/');
// //   };

// //   const totalOrders = orders.length;
// //   const lastOrder = orders[0];

// //   return (
// //     <div className="max-w-4xl mx-auto mt-10 px-4 sm:px-6 lg:px-8">
// //       <h2 className="text-3xl font-bold text-gray-800 mb-6">My Profile</h2>

// //       <div className="bg-white shadow rounded-xl p-6 space-y-6">
// //         {/* Profile Details */}
// //         <div>
// //           <h3 className="text-xl font-semibold text-gray-700 mb-2">Personal Info</h3>
// //           <div className="grid sm:grid-cols-2 gap-4 text-gray-600">
// //             <p><span className="font-medium">Name:</span> {user?.name || '-'}</p>
// //             <p><span className="font-medium">Email:</span> {user?.email || '-'}</p>
// //             <p><span className="font-medium">Phone:</span> {user?.phone || 'Not provided'}</p>
// //           </div>
// //         </div>

// //         {/* Order Summary */}
// //         <div>
// //           <h3 className="text-xl font-semibold text-gray-700 mb-2">Order Summary</h3>
// //           <p className="text-gray-600">Total Orders: <strong>{totalOrders}</strong></p>

// //           {lastOrder && (
// //             <div className="mt-4 bg-gray-50 p-4 rounded-lg border">
// //               <p className="font-medium mb-2">Last Order:</p>
// //               <ul className="list-disc list-inside text-sm">
// //                 {lastOrder.items.map((item, idx) => (
// //                   <li key={idx}>
// //                     {item.name} ({item.size}) x{item.quantity}
// //                   </li>
// //                 ))}
// //               </ul>
// //               <p className="mt-2 text-sm">Total: ₹{lastOrder.amount}</p>
// //             </div>
// //           )}
// //         </div>

// //         {/* Buttons */}
// //         <div className="flex gap-4 mt-4">
// //           <button
// //             onClick={() => navigate('/orders')}
// //             className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
// //           >
// //             View Orders
// //           </button>
// //           <button
// //             onClick={handleLogout}
// //             className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
// //           >
// //             Logout
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Profile;




// // Profile.jsx
// import React, { useEffect, useState, useContext } from 'react';
// import axios from 'axios';
// import { ShopContext } from '../context/ShopContext';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';

// const Profile = () => {
//   const { backendUrl, token, logoutUser } = useContext(ShopContext);
//   const navigate = useNavigate();

//   const [user, setUser] = useState(null);
//   const [orders, setOrders] = useState([]);
//   const [isEditing, setIsEditing] = useState(false);
//   const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

//   const fetchUserProfile = async () => {
//     try {
//       const res = await axios.get(`${backendUrl}/api/user/profile`, {
//         headers: { token } // ✅ Match backend expectation
//       });
//       if (res.data.success) {
//         setUser(res.data.user);
//         setFormData({
//           name: res.data.user.name,
//           email: res.data.user.email,
//           phone: res.data.user.phone || '',
//         });
//       } else {
//         toast.error('Failed to fetch user profile');
//       }
//     } catch (error) {
//       toast.error('Could not load profile');
//       console.error(error);
//     }
//   };

//   const updateUserProfile = async () => {
//     try {
//       const res = await axios.put(`${backendUrl}/api/user/profile`, formData, {
//         headers: { token }
//       });
//       if (res.data.success) {
//         toast.success('Profile updated');
//         setIsEditing(false);
//         fetchUserProfile();
//       } else {
//         toast.error('Update failed');
//       }
//     } catch (error) {
//       toast.error('Error updating profile');
//       console.error(error);
//     }
//   };

//   const fetchUserOrders = async () => {
//     try {
//       const res = await axios.post(`${backendUrl}/api/order/userorders`, {}, {
//         headers: { token }
//       });
//       if (res.data.success) {
//         setOrders(res.data.orders.reverse());
//       } else {
//         toast.error('Failed to fetch orders');
//       }
//     } catch (error) {
//       toast.error('Could not load orders');
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     if (!token) {
//       navigate('/login');
//       return;
//     }
//     fetchUserProfile();
//     fetchUserOrders();
//   }, [token]);

//   const handleLogout = () => {
//     logoutUser();
//     toast.success("Logged out successfully");
//     navigate('/');
//   };

//   const totalOrders = orders.length;
//   const lastOrder = orders[0];

//   return (
//     <div className="max-w-4xl mx-auto mt-10 px-4 sm:px-6 lg:px-8">
//       <h2 className="text-3xl font-bold text-gray-800 mb-6">My Profile</h2>

//       <div className="bg-white shadow rounded-xl p-6 space-y-6">
//         {/* Profile Details */}
//         <div>
//           <h3 className="text-xl font-semibold text-gray-700 mb-2">Personal Info</h3>
//           <div className="grid sm:grid-cols-2 gap-4 text-gray-600">
//             <div>
//               <label className="block text-sm font-medium">Name:</label>
//               {isEditing ? (
//                 <input
//                   type="text"
//                   value={formData.name}
//                   onChange={e => setFormData({ ...formData, name: e.target.value })}
//                   className="border px-2 py-1 rounded w-full"
//                 />
//               ) : (
//                 <p>{user?.name || '-'}</p>
//               )}
//             </div>
//             <div>
//               <label className="block text-sm font-medium">Email:</label>
//               {isEditing ? (
//                 <input
//                   type="email"
//                   value={formData.email}
//                   onChange={e => setFormData({ ...formData, email: e.target.value })}
//                   className="border px-2 py-1 rounded w-full"
//                 />
//               ) : (
//                 <p>{user?.email || '-'}</p>
//               )}
//             </div>
//             <div>
//               <label className="block text-sm font-medium">Phone:</label>
//               {isEditing ? (
//                 <input
//                   type="text"
//                   value={formData.phone}
//                   onChange={e => setFormData({ ...formData, phone: e.target.value })}
//                   className="border px-2 py-1 rounded w-full"
//                 />
//               ) : (
//                 <p>{user?.phone || 'Not provided'}</p>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Order Summary */}
//         <div>
//           <h3 className="text-xl font-semibold text-gray-700 mb-2">Order Summary</h3>
//           <p className="text-gray-600">Total Orders: <strong>{totalOrders}</strong></p>

//           {lastOrder && (
//             <div className="mt-4 bg-gray-50 p-4 rounded-lg border">
//               <p className="font-medium mb-2">Last Order:</p>
//               <ul className="list-disc list-inside text-sm">
//                 {lastOrder.items.map((item, idx) => (
//                   <li key={idx}>
//                     {item.name} ({item.size}) x{item.quantity}
//                   </li>
//                 ))}
//               </ul>
//               <p className="mt-2 text-sm">Total: ₹{lastOrder.amount}</p>
//             </div>
//           )}
//         </div>

//         {/* Buttons */}
//         <div className="flex gap-4 mt-4">
//           {isEditing ? (
//             <>
//               <button
//                 onClick={updateUserProfile}
//                 className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
//               >
//                 Save
//               </button>
//               <button
//                 onClick={() => setIsEditing(false)}
//                 className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
//               >
//                 Cancel
//               </button>
//             </>
//           ) : (
//             <button
//               onClick={() => setIsEditing(true)}
//               className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
//             >
//               Edit Profile
//             </button>
//           )}
//           <button
//             onClick={handleLogout}
//             className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
//           >
//             Logout
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;






























import React, { useEffect, useState, useContext } from 'react';
import Title from '../components/Title';
import axios from 'axios';
import { ShopContext } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Profile = () => {
  const { backendUrl, token, logoutUser } = useContext(ShopContext);
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [loading, setLoading] = useState(false);

  const fetchUserProfile = async () => {
    try {
      const res = await axios.get(`${backendUrl}/api/user/profile`, {
        headers: { token },
      });
      if (res.data.success) {
        setUser(res.data.user);
        setFormData({
          name: res.data.user.name,
          email: res.data.user.email,
          phone: res.data.user.phone || '',
        });
      } else {
        toast.error('Failed to fetch user profile');
      }
    } catch (error) {
      toast.error('Could not load profile');
      console.error(error);
    }
  };

  const updateUserProfile = async () => {
    try {
      setLoading(true);
      const res = await axios.put(`${backendUrl}/api/user/profile`, formData, {
        headers: { token },
      });
      if (res.data.success) {
        toast.success('Profile updated');
        setIsEditing(false);
        fetchUserProfile(); // Refresh with latest data
      } else {
        toast.error('Update failed');
      }
    } catch (error) {
      toast.error('Error updating profile');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchUserOrders = async () => {
    try {
      const res = await axios.post(
        `${backendUrl}/api/order/userorders`,
        {},
        { headers: { token } }
      );
      if (res.data.success) {
        setOrders(res.data.orders.reverse());
      } else {
        toast.error('Failed to fetch orders');
      }
    } catch (error) {
      toast.error('Could not load orders');
      console.error(error);
    }
  };

  useEffect(() => {
    if (!token) {
      navigate('/login');
      return;
    }
    fetchUserProfile();
    fetchUserOrders();
  }, [token]);

  const handleLogout = () => {
    logoutUser();
    toast.success('Logged out successfully');
    navigate('/');
  };

  const totalOrders = orders.length;
  const lastOrder = orders[0];

//   return (
//     <div className="max-w-4xl mx-auto mt-10 px-4 sm:px-6 lg:px-8">
//       <Title text1="MY" text2="PROFILE" />
//       <div className="bg-white shadow rounded-xl p-6 space-y-6">
//         {/* Profile Details */}
//         <div>
//           <Title text1="Personal" text2="Info" />
//           <div className="grid md:grid-cols-2 gap-4 text-gray-600">
//             <div>
//               <label className="block text-sm font-medium">Name:</label>
//               {isEditing ? (
//                 <input
//                   type="text"
//                   value={formData.name}
//                   onChange={e => setFormData({ ...formData, name: e.target.value })}
//                   className="border px-2 py-1 rounded w-full"
//                 />
//               ) : (
//                 <p>{user?.name || '-'}</p>
//               )}
//             </div>
//             <div>
//               <label className="block text-sm font-medium">Email:</label>
//               {isEditing ? (
//                 <input
//                   type="email"
//                   value={formData.email}
//                   onChange={e => setFormData({ ...formData, email: e.target.value })}
//                   className="border px-2 py-1 rounded w-full"
//                 />
//               ) : (
//                 <p>{user?.email || '-'}</p>
//               )}
//             </div>
//             <div>
//               <label className="block text-sm font-medium">Phone:</label>
//               {isEditing ? (
//                 <input
//                   type="text"
//                   value={formData.phone}
//                   onChange={e => setFormData({ ...formData, phone: e.target.value })}
//                   className="border px-2 py-1 rounded w-full"
//                 />
//               ) : (
//                 <p>{user?.phone || 'Not provided'}</p>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Order Summary */}
//         <div>
//            <Title text1="Order" text2="Summary" />
//            <p className="text-gray-600">Total Orders: <strong>{totalOrders}</strong></p>
//           {/* <p className="text-gray-600">Total Orders: <strong>{totalOrders}</strong></p> */}

//           {lastOrder && (
//             <div className="mt-4 bg-gray-50 p-4 rounded-lg border">
//               <p className="font-medium mb-2">Last Order:</p>
//               <ul className="list-disc list-inside text-sm">
//                 {lastOrder.items.map((item, idx) => (
//                   <li key={idx}>
//                     {item.name} ({item.size}) x{item.quantity}
//                   </li>
//                 ))}
//               </ul>
//               <p className="mt-2 text-sm">Total: ₹{lastOrder.amount}</p>
//             </div>
//           )}
//         </div>

//         {/* Buttons */}
//         <div className="flex gap-4 mt-4">
//           {isEditing ? (
//             <>
//               <button
//                 onClick={updateUserProfile}
//                 disabled={loading}
//                 className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:opacity-50"
//               >
//                 {loading ? 'Saving...' : 'Save'}
//               </button>
//               <button
//                 onClick={() => setIsEditing(false)}
//                 className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
//               >
//                 Cancel
//               </button>
//             </>
//           ) : (
//             <button
//               onClick={() => setIsEditing(true)}
//               className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
//             >
//               Edit Profile
//             </button>
//           )}
//           <button
//             onClick={handleLogout}
//             className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
//           >
//             Logout
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

 return (
    <div className="max-w-5xl mx-auto mt-12 px-4 sm:px-6 lg:px-8">
       <div className='flex justify-between text-base sm:text-2xl mb-4'>
             <Title text1="MY" text2="PROFILE" />
           </div>
      <div className="bg-white shadow-lg rounded-2xl p-8 space-y-8 text-base sm:text-lg">
        {/* Profile Details */}
        <div>
          <Title text1="Personal" text2="Info" />
          <div className="grid md:grid-cols-2 gap-6 text-gray-700">
            <div>
              <label className="block text-md font-medium mb-1">Name:</label>
              {isEditing ? (
                <input
                  type="text"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  className="border px-3 py-2 rounded-lg w-full text-base"
                />
              ) : (
                <p>{user?.name || '-'}</p>
              )}
            </div>

            <div>
              <label className="block text-md font-medium mb-1">Email:</label>
              {isEditing ? (
                <input
                  type="email"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className="border px-3 py-2 rounded-lg w-full text-base"
                />
              ) : (
                <p>{user?.email || '-'}</p>
              )}
            </div>

           
          </div>
        </div>

        {/* Order Summary */}
        <div>
          <Title text1="Order" text2="Summary" />
          <p className="text-gray-700 text-base sm:text-lg">
            Total Orders: <strong>{totalOrders}</strong>
          </p>

          {lastOrder && (
            <div className="mt-4 bg-gray-50 p-6 rounded-xl border text-sm sm:text-base">
              <p className="font-semibold mb-3">Last Order:</p>
              <ul className="list-disc list-inside space-y-1">
                {lastOrder.items.map((item, idx) => (
                  <li key={idx}>
                    {item.name} ({item.size}) x{item.quantity}
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-sm">Total: ₹{lastOrder.amount}</p>
            </div>
          )}
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          {isEditing ? (
            <>
              <button
                onClick={updateUserProfile}
                disabled={loading}
                className="bg-green-600 text-white px-5 py-2.5 rounded-lg hover:bg-green-700 disabled:opacity-50"
              >
                {loading ? 'Saving...' : 'Save'}
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="bg-gray-400 text-white px-5 py-2.5 rounded-lg hover:bg-gray-500"
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="bg-yellow-500 text-white px-5 py-2.5 rounded-lg hover:bg-yellow-600"
            >
              Edit Profile
            </button>
          )}
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-5 py-2.5 rounded-lg hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};


export default Profile;
