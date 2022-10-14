const path = require('path');
const {body} = require('express-validator/check')

const isAuth = require('../isAuth/isAuth')

const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product',isAuth, adminController.getAddProduct);

// /admin/products => GET
router.get('/products',isAuth, adminController.getProducts);

// /admin/add-product => POST
router.post('/add-product',[
    body('title','invalid title').isString(),
    body('price', 'invalid price').isFloat(),
    body('imageUrl', 'invalid Url').isURL()
],isAuth,adminController.postAddProduct);

router.get('/edit-product/:productId',isAuth, adminController.getEditProduct);

router.post('/edit-product',isAuth, adminController.postEditProduct);

router.post('/delete-product',isAuth, adminController.postDeleteProduct);

module.exports = router;
