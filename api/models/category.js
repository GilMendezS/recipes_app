const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: true
    }
})
categorySchema.set('timestamps', true);

module.exports = mongoose.model('Category', categorySchema);