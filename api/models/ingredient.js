const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    quantity: {
        type: String,
        required: true
    }
})
ingredientSchema.set('timestamps', true);

module.exports = mongoose.model('Ingredient', ingredientSchema);