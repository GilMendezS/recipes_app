const Category = require('../models/category');

exports.getCategories = async (req, res, next) => {
    const categories = await Category.find();
    return res.status(200).json({
        data: categories
    });
}
exports.addCategory = async (req, res, next) => {
    const category = await Category.create({
        name: req.body.name
    });
    return res.status(200).json({
        success: true,
        message: 'Category created',
        data: category
    })
}