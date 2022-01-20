const express = require('express');
const router = express.Router();
const listsController = require('../controllers/lists');

router.get('/', listsController.getAll);
router.get('/:id', listsController.getById);
router.post('/', listsController.create);
router.put('/:id', listsController.update);
router.delete('/:id', listsController.remove);

//get all products from one list
router.get('/:listId/products/', listsController.getProducts);

//get one product from one list
router.get('/:listId/products/:prodId', listsController.getProductById);

//post add products to a list
router.post('/:listId/products/', listsController.addProducts);

//put update product of a list
//router.put('/:listId/products/:productId', listsController.updateProduct);

//delete remove product from a list
//router.delete('/:listId/products/:productId', listsController.removeProduct);

module.exports = router;
