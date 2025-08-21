const express = require ('express')

const router = express.Router()
const {getSpecificCategory ,updateCategory , deleteCategory ,getAllCategories , createCategory } = require('../controller/categoryController')
const { getCategoryValidator , deleteCategoryValidator, updateCategoryValidator , creatCategoryValidator}= require('../utils/validators/categoryValidator')
const { protect , allowedTo } = require ('../middleware/decodedToken')
const role = require('../utils/roles')

router.route('/')
.post(protect ,  allowedTo(role.ADMIN),creatCategoryValidator, createCategory)
.get(getAllCategories)

const supCategoryRoute = require('./supCategoryRoute')

router.use('/:categoryId/subcategory',supCategoryRoute )


router.route('/:id')
.delete(protect ,  allowedTo(role.ADMIN),deleteCategoryValidator,deleteCategory)
.put( protect ,  allowedTo(role.ADMIN),updateCategoryValidator,updateCategory)
.get(getCategoryValidator,getSpecificCategory)



module.exports = router