const router = require('express').Router();
const RecipeController = require('../controllers/recipe');

router.get('/', RecipeController.getRecipes);

router.post('/',RecipeController.createRecipe);

router.get('/:id', RecipeController.getRecipe);

router.delete('/:id', RecipeController.removeRecipe);

module.exports = router;