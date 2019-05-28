const router = require('express').Router();
const RecipeController = require('../controllers/recipe');

router.get('/', RecipeController.getRecipes);

router.post('/',RecipeController.createRecipe);

module.exports = router;