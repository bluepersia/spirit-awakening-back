import express from 'express';
const router = express.Router ();
import productController = require ('../controllers/productController');


router.route ('/').get (productController.getAllProducts);
router.route ('/:id').get (productController.getProduct);

export default router;