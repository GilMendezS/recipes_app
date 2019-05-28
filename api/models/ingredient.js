const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    recipeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Recipe'
    }
})
ingredientSchema.set('timestamps', true);

module.exports = mongoose.model('Ingredient', ingredientSchema);