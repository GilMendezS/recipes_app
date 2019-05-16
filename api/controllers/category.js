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
exports.getCategory = async (req, res, next) => {
    try {
        const categoryId = req.params.id;
        const category = await Category.findById(categoryId);
        return res.status(200).json({
            success: true,
            data: category
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Error fetching the category',
            success: false,
            error
        })
    }
}
exports.updateCategory = async (req, res, next) => {
    try {
        const categoryId = req.params.id;
        const updatedCategory = await Category.findByIdAndUpdate(categoryId, req.body);
        return res.status(200).json({
            message: 'Category was modified',
            success: true,
            data: updatedCategory
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Error modifying the category',
            success: false,
            error
        })
    }
}
exports.removeCategory = async (req, res, next) => {
    try {
        const categoryId = req.params.id;
        await Category.findByIdAndRemove(categoryId);
        return res.status(200).json({
            message: 'Category was removed',
            success: true
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Error deleting the category',
            success: false,
            error
        })
    }
}