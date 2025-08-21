const express = require ('express')
const router = express.Router()
const {getSpecificBrand ,updateBrand , deleteBrand ,getAllBrands , createBrand } = require('../controller/brandController')
const { getBrandValidator , deleteBrandValidator, updateBrandValidator , creatBrandValidator}= require('../utils/validators/brandsValidator')
const { protect , allowedTo } = require ('../middleware/decodedToken')
const role = require('../utils/roles')

router.route('/')
.post(protect ,  allowedTo(role.ADMIN),creatBrandValidator, createBrand)
.get(getAllBrands)


router.route('/:id')
.delete(protect ,  allowedTo(role.ADMIN),deleteBrandValidator,deleteBrand)
.put(protect ,  allowedTo(role.ADMIN), updateBrandValidator,updateBrand)
.get(getBrandValidator,getSpecificBrand)



module.exports = router

