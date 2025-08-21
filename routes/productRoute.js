const express = require ('express')

const router = express.Router()
const {getSpecificProduct ,updateProduct , deleteProduct ,getAllProducts , createProduct } = require('../controller/productController')
const { getProductValidator , deleteProductValidator, updateProductValidator , creatProductValidator}= require('../utils/validators/productValidator')
const { protect , allowedTo } = require ('../middleware/decodedToken')
const role = require('../utils/roles')

router.route('/')
.post(protect ,  allowedTo(role.ADMIN),creatProductValidator, createProduct)
.get(getAllProducts)


router.route('/:id')
.delete(protect ,  allowedTo(role.ADMIN),deleteProductValidator,deleteProduct)
.put( protect ,  allowedTo(role.ADMIN),updateProductValidator,updateProduct)
.get(getProductValidator,getSpecificProduct)



module.exports = router
