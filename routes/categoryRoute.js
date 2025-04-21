const express = require ('express')
const router = express.Router()
const categoryController = require('../controller/categoryController')

router.route('/')
.post(categoryController.createCategory)
.get(categoryController.getAllCategories)


router.route('/:id')
.delete(categoryController.deleteCategory)
.put(categoryController.updateCategory)
.get(categoryController.getSpecificCategory)



module.exports = router