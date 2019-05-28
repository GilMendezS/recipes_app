const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    ingredients: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Ingredient'
        }
    ]

})
recipeSchema.set('timestamps', true);

module.exports = mongoose.model('Recipe', recipeSchema);