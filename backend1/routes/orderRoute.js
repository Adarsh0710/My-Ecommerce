import express from 'express'
import {placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus, verifyStripe, verifyRazorpay} from '../controllers/orderController.js'
import adminAuth  from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'
import orderModel from '../models/orderModel.js'

const orderRouter = express.Router()

// Admin Features
orderRouter.post('/list',adminAuth,allOrders)
orderRouter.post('/status',adminAuth,updateStatus)

// Payment Features
orderRouter.post('/place',authUser,placeOrder)
orderRouter.post('/stripe',authUser,placeOrderStripe)
orderRouter.post('/razorpay',authUser,placeOrderRazorpay)

// User Feature 
orderRouter.post('/userorders',authUser,userOrders)

// verify payment
orderRouter.post('/verifyStripe',authUser, verifyStripe)
orderRouter.post('/verifyRazorpay',authUser, verifyRazorpay)
// Delete Order (Admin)
// orderRouter.delete('/delete/:id', adminAuth, async (req, res) => {
//   try {
//     const order = await orderModel.findById(req.params.id);
//     if (!order) {
//       return res.status(404).json({ success: false, message: 'Order not found' });
//     }

//     await order.remove();
//     res.json({ success: true, message: 'Order deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// });


orderRouter.delete('/delete/:id', adminAuth, async (req, res) => {
  try {
    const orderId = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(orderId)) {
      return res.status(400).json({ success: false, message: 'Invalid Order ID' });
    }

    const deleted = await orderModel.findByIdAndDelete(orderId);
    if (!deleted) {
      return res.status(404).json({ success: false, message: 'Order not found' });
    }

    res.json({ success: true, message: 'Order deleted successfully' });
  } catch (error) {
    console.error('DELETE ERROR:', error); // ✅ Logs the actual issue
    res.status(500).json({ success: false, message: error.message });
  }
});

export default orderRouter