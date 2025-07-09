


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { backendUrl, currency } from '../App';
import { toast } from 'react-toastify';
import { Package, Barcode, X } from 'lucide-react';

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);
  const [scannedOrder, setScannedOrder] = useState(null);

  const fetchAllOrders = async () => {
    if (!token) {
      return null;
    }

    try {
      const response = await axios.post(
        `${backendUrl}/api/order/list`,
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        setOrders(response.data.orders.reverse());
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(
        `${backendUrl}/api/order/status`,
        { orderId, status: event.target.value },
        { headers: { token } }
      );
      if (response.data.success) {
        await fetchAllOrders();
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || error.message);
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Delivered':
        return 'bg-green-100 text-green-800';
      case 'Shipped':
        return 'bg-blue-100 text-blue-800';
      case 'Out for delivery':
        return 'bg-purple-100 text-purple-800';
      case 'Packing':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Generate a pseudo-random barcode pattern based on order ID
  const generateBarcodePattern = (orderId) => {
    const pattern = [];
    const hash = orderId.split('').reduce((acc, char) => {
      return char.charCodeAt(0) + ((acc << 5) - acc);
    }, 0);
    
    for (let i = 0; i < 30; i++) {
      pattern.push((hash >> i) & 1);
    }
    return pattern;
  };

  // Simulate barcode scanning
  const handleBarcodeClick = (order) => {
    setScannedOrder(order);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Orders</h3>

      {/* Scanned Order Modal */}
      {scannedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-xl font-bold text-gray-900">
                Scanned Order Details
              </h4>
              <button
                onClick={() => setScannedOrder(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-medium text-gray-700">Order ID</p>
                  <p className="text-sm text-gray-600">
                    #{scannedOrder._id.slice(-8).toUpperCase()}
                  </p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Status</p>
                  <p className={`text-sm ${getStatusColor(scannedOrder.status)} inline-block px-2 py-1 rounded`}>
                    {scannedOrder.status}
                  </p>
                </div>
              </div>
              
              <div>
                <p className="font-medium text-gray-700 mb-2">Products</p>
                <div className="space-y-3">
                  {scannedOrder.items.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3 bg-gray-50 p-3 rounded-lg">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-md"
                        />
                      ) : (
                        <div className="w-16 h-16 bg-gray-100 rounded-md flex items-center justify-center">
                          <Package className="w-8 h-8 text-gray-400" />
                        </div>
                      )}
                      <div>
                        <p className="font-medium text-gray-900">{item.name}</p>
                        <p className="text-sm text-gray-600">
                          Quantity: {item.quantity} • Size: {item.size}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-medium text-gray-700">Total Amount</p>
                  <p className="text-lg font-bold text-gray-900">
                    {currency}{scannedOrder.amount}
                  </p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Payment Status</p>
                  <p className="text-sm text-gray-600">
                    {scannedOrder.payment ? 'Paid' : 'Pending'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="space-y-4">
        {orders.map((order, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
          >
            <div className="p-6">
              {/* Barcode Section */}
              <div className="mb-6 flex items-center justify-between">
                <div 
                  className="flex items-center space-x-2 cursor-pointer hover:opacity-75 transition-opacity"
                  onClick={() => handleBarcodeClick(order)}
                  title="Click to scan barcode"
                >
                  <Barcode className="w-5 h-5 text-gray-400" />
                  <div className="flex items-center h-12 space-x-0.5">
                    {generateBarcodePattern(order._id).map((value, idx) => (
                      <div
                        key={idx}
                        className={`h-full w-1 ${
                          value ? 'bg-gray-800' : 'bg-gray-300'
                        }`}
                      ></div>
                    ))}
                  </div>
                </div>
                <span className="text-sm text-gray-500 font-mono">
                  #{order._id.slice(-8).toUpperCase()}
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr] gap-6">
                {/* Order Items Section */}
                <div>
                  <div className="flex flex-col space-y-4">
                    {order.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center space-x-4">
                        {item.image ? (
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 object-cover rounded-md"
                          />
                        ) : (
                          <div className="w-16 h-16 bg-gray-100 rounded-md flex items-center justify-center">
                            <Package className="w-8 h-8 text-gray-400" />
                          </div>
                        )}
                        <div>
                          <p className="font-medium text-gray-900">{item.name}</p>
                          <p className="text-sm text-gray-500">
                            Qty: {item.quantity} • Size: {item.size}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Customer Details Section */}
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900">Shipping Details</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      {order.address.firstName} {order.address.lastName}
                    </p>
                    <p className="text-sm text-gray-600">
                      {order.address.street}
                    </p>
                    <p className="text-sm text-gray-600">
                      {order.address.city}, {order.address.state}
                    </p>
                    <p className="text-sm text-gray-600">
                      {order.address.country}, {order.address.zipcode}
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      {order.address.phone}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Order Info</h4>
                    <p className="text-sm text-gray-600">
                      Items: {order.items.length}
                    </p>
                    <p className="text-sm text-gray-600">
                      Payment: {order.paymentMethod}
                    </p>
                    <p className="text-sm text-gray-600">
                      Status: {order.payment ? 'Paid' : 'Pending'}
                    </p>
                    <p className="text-sm text-gray-600">
                      Date: {new Date(order.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                {/* Status and Price Section */}
                <div className="space-y-4">
                  <div>
                    <p className="text-xl font-bold text-gray-900">
                      {currency}
                      {order.amount}
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Order Status
                    </label>
                    <select
                      onChange={(event) => statusHandler(event, order._id)}
                      value={order.status}
                      className={`w-full px-3 py-2 rounded-md border text-sm font-medium ${getStatusColor(
                        order.status
                      )}`}
                    >
                      <option value="Order Placed">Order Placed</option>
                      <option value="Packing">Packing</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Out for delivery">Out for delivery</option>
                      <option value="Delivered">Delivered</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;






// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { backendUrl, currency } from '../App';
// import { toast } from 'react-toastify';
// import { Package, Barcode, X } from 'lucide-react';

// const Orders = ({ token }) => {
//   const [orders, setOrders] = useState([]);
//   const [scannedOrder, setScannedOrder] = useState(null);

//   const fetchAllOrders = async () => {
//     if (!token) return;

//     try {
//       const response = await axios.post(
//         `${backendUrl}/api/order/list`,
//         {},
//         { headers: { token } }
//       );
//       if (response.data.success) {
//         setOrders(response.data.orders.reverse());
//       } else {
//         toast.error(response.data.message);
//       }
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   const statusHandler = async (event, orderId) => {
//     try {
//       const response = await axios.post(
//         `${backendUrl}/api/order/status`,
//         { orderId, status: event.target.value },
//         { headers: { token } }
//       );
//       if (response.data.success) {
//         await fetchAllOrders();
//       }
//     } catch (error) {
//       toast.error(error.response?.data?.message || error.message);
//     }
//   };

//   const deleteOrder = async (orderId) => {
//     if (!window.confirm('Are you sure you want to delete this order?')) return;

//     try {
//       const response = await axios.delete(
//         `${backendUrl}/api/order/delete/${orderId}`,
//         { headers: { token } }
//       );
//       if (response.data.success) {
//         toast.success(response.data.message);
//         setOrders(prev => prev.filter(order => order._id !== orderId));
//       } else {
//         toast.error(response.data.message);
//       }
//     } catch (error) {
//       toast.error(error.response?.data?.message || error.message);
//     }
//   };

//   useEffect(() => {
//     fetchAllOrders();
//   }, [token]);

//   const getStatusColor = (status) => {
//     switch (status) {
//       case 'Delivered':
//         return 'bg-green-100 text-green-800';
//       case 'Shipped':
//         return 'bg-blue-100 text-blue-800';
//       case 'Out for delivery':
//         return 'bg-purple-100 text-purple-800';
//       case 'Packing':
//         return 'bg-yellow-100 text-yellow-800';
//       default:
//         return 'bg-gray-100 text-gray-800';
//     }
//   };

//   const generateBarcodePattern = (orderId) => {
//     const pattern = [];
//     const hash = orderId.split('').reduce((acc, char) => {
//       return char.charCodeAt(0) + ((acc << 5) - acc);
//     }, 0);
//     for (let i = 0; i < 30; i++) {
//       pattern.push((hash >> i) & 1);
//     }
//     return pattern;
//   };

//   const handleBarcodeClick = (order) => {
//     setScannedOrder(order);
//   };

//   return (
//     <div className="max-w-7xl mx-auto">
//       <h3 className="text-2xl font-bold text-gray-900 mb-6">Orders</h3>

//       {/* Scanned Order Modal */}
//       {scannedOrder && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4">
//             <div className="flex justify-between items-center mb-4">
//               <h4 className="text-xl font-bold text-gray-900">
//                 Scanned Order Details
//               </h4>
//               <button onClick={() => setScannedOrder(null)} className="text-gray-500 hover:text-gray-700">
//                 <X className="w-6 h-6" />
//               </button>
//             </div>
//             <div className="space-y-4">
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <p className="font-medium text-gray-700">Order ID</p>
//                   <p className="text-sm text-gray-600">
//                     #{scannedOrder._id.slice(-8).toUpperCase()}
//                   </p>
//                 </div>
//                 <div>
//                   <p className="font-medium text-gray-700">Status</p>
//                   <p className={`text-sm ${getStatusColor(scannedOrder.status)} inline-block px-2 py-1 rounded`}>
//                     {scannedOrder.status}
//                   </p>
//                 </div>
//               </div>

//               <div>
//                 <p className="font-medium text-gray-700 mb-2">Products</p>
//                 <div className="space-y-3">
//                   {scannedOrder.items.map((item, index) => (
//                     <div key={index} className="flex items-center space-x-3 bg-gray-50 p-3 rounded-lg">
//                       {item.image ? (
//                         <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
//                       ) : (
//                         <div className="w-16 h-16 bg-gray-100 rounded-md flex items-center justify-center">
//                           <Package className="w-8 h-8 text-gray-400" />
//                         </div>
//                       )}
//                       <div>
//                         <p className="font-medium text-gray-900">{item.name}</p>
//                         <p className="text-sm text-gray-600">Quantity: {item.quantity} • Size: {item.size}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <p className="font-medium text-gray-700">Total Amount</p>
//                   <p className="text-lg font-bold text-gray-900">
//                     {currency}{scannedOrder.amount}
//                   </p>
//                 </div>
//                 <div>
//                   <p className="font-medium text-gray-700">Payment Status</p>
//                   <p className="text-sm text-gray-600">
//                     {scannedOrder.payment ? 'Paid' : 'Pending'}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       <div className="space-y-4">
//         {orders.map((order, index) => (
//           <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
//             <div className="p-6">
//               <div className="mb-6 flex items-center justify-between">
//                 <div className="flex items-center space-x-2">
//                   <div
//                     className="flex items-center space-x-2 cursor-pointer hover:opacity-75 transition-opacity"
//                     onClick={() => handleBarcodeClick(order)}
//                     title="Click to scan barcode"
//                   >
//                     <Barcode className="w-5 h-5 text-gray-400" />
//                     <div className="flex items-center h-12 space-x-0.5">
//                       {generateBarcodePattern(order._id).map((value, idx) => (
//                         <div key={idx} className={`h-full w-1 ${value ? 'bg-gray-800' : 'bg-gray-300'}`}></div>
//                       ))}
//                     </div>
//                   </div>
//                   <span className="text-sm text-gray-500 font-mono">
//                     #{order._id.slice(-8).toUpperCase()}
//                   </span>
//                 </div>
//                 <button onClick={() => deleteOrder(order._id)} className="text-red-500 hover:text-red-700 transition" title="Delete Order">
//                   <X className="w-5 h-5" />
//                 </button>
//               </div>

//               <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr] gap-6">
//                 <div>
//                   <div className="flex flex-col space-y-4">
//                     {order.items.map((item, itemIndex) => (
//                       <div key={itemIndex} className="flex items-center space-x-4">
//                         {item.image ? (
//                           <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
//                         ) : (
//                           <div className="w-16 h-16 bg-gray-100 rounded-md flex items-center justify-center">
//                             <Package className="w-8 h-8 text-gray-400" />
//                           </div>
//                         )}
//                         <div>
//                           <p className="font-medium text-gray-900">{item.name}</p>
//                           <p className="text-sm text-gray-500">Qty: {item.quantity} • Size: {item.size}</p>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="space-y-4">
//                   <div>
//                     <h4 className="font-medium text-gray-900">Shipping Details</h4>
//                     <p className="text-sm text-gray-600 mt-1">
//                       {order.address.firstName} {order.address.lastName}
//                     </p>
//                     <p className="text-sm text-gray-600">{order.address.street}</p>
//                     <p className="text-sm text-gray-600">
//                       {order.address.city}, {order.address.state}
//                     </p>
//                     <p className="text-sm text-gray-600">
//                       {order.address.country}, {order.address.zipcode}
//                     </p>
//                     <p className="text-sm text-gray-600 mt-1">{order.address.phone}</p>
//                   </div>
//                   <div>
//                     <h4 className="font-medium text-gray-900">Order Info</h4>
//                     <p className="text-sm text-gray-600">Items: {order.items.length}</p>
//                     <p className="text-sm text-gray-600">Payment: {order.paymentMethod}</p>
//                     <p className="text-sm text-gray-600">Status: {order.payment ? 'Paid' : 'Pending'}</p>
//                     <p className="text-sm text-gray-600">Date: {new Date(order.date).toLocaleDateString()}</p>
//                   </div>
//                 </div>

//                 <div className="space-y-4">
//                   <div>
//                     <p className="text-xl font-bold text-gray-900">
//                       {currency}
//                       {order.amount}
//                     </p>
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Order Status</label>
//                     <select
//                       onChange={(event) => statusHandler(event, order._id)}
//                       value={order.status}
//                       className={`w-full px-3 py-2 rounded-md border text-sm font-medium ${getStatusColor(order.status)}`}
//                     >
//                       <option value="Order Placed">Order Placed</option>
//                       <option value="Packing">Packing</option>
//                       <option value="Shipped">Shipped</option>
//                       <option value="Out for delivery">Out for delivery</option>
//                       <option value="Delivered">Delivered</option>
//                     </select>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Orders;
