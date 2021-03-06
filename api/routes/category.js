const CategoryController = require('../controllers/category');

const router = require('express').Router();

router.get('/', CategoryController.getCategories);

router.post('/', CategoryController.addCategory);

router.get('/:id', CategoryController.getCategory);

router.put('/:id', CategoryController.updateCategory);

router.delete('/:id', CategoryController.removeCategory);

module.exports = router;