const Recipe = require('../models/recipe');
const Ingredient = require('../models/ingredient');

exports.getRecipes = async (req, res, next) => {
    try {
        const recipes = await Recipe.find();
        return res.status(200).json({
            success: true,
            data: recipes
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Error fetching the recipes',
            success: false,
            error
        })
    }
}

exports.createRecipe = async (req, res, next) => {
    try {
        const recipe = await Recipe.create({
            name: req.body.name,
            description: req.body.description
        })
        const ingredients = req.body.ingredients;
        ingredients.forEach(async ingredient => {
            await Ingredient.create({
                name: ingredient.name,
                quantity: ingredient.quantity,
                recipeId: recipe.id
            })
        });
        return res.status(200).json({
            message: 'Recipe was created',
            succeess: true
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Error creating the recipe',
            success: false,
            error
        })
    }
}
