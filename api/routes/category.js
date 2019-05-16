const CategoryController = require('../controllers/category');

const router = require('express').Router();

router.get('/', CategoryController.getCategories);

router.post('/', CategoryController.addCategory);

module.exports = router;