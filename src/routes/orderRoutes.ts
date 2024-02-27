import express from 'express';
const router = express.Router ();
import orderController = require ('../controllers/orderController');

router.post ('/paypal-create', orderController.createPayPalOrder);
router.post ('/paypal-capture', orderController.capturePayPalOrder);

export default router;