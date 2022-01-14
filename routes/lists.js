const express = require('express');
const router = express.Router();
const listsController = require('../controllers/lists');

router.get('/', listsController.getAll);

router.get('/:id', listsController.getById);

router.post('/', listsController.create);

router.put('/:id', listsController.update);

router.delete('/:id', listsController.remove);

module.exports = router;
