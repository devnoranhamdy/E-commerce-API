const express = require ('express')
const {getAllSubCtegories ,getSpecificSubCtegorie ,addSubCtegorie ,deleteSubCtegorie ,updateSubCtegorie , nestedRouteForAddCategoryIdToParam } = require('../controller/subCategoryController')
const {addSubCtegorievalidator ,getSpecificSubCtegorievalidator , deleteSubCtegorievalidator , updateSubCtegorievalidator} = require ('../utils/validators/subCategoryValidator')
const { protect , allowedTo } = require ('../middleware/decodedToken')
const role = require('../utils/roles')

const router = express.Router({mergeParams : true})

router.route('/')
.get(getAllSubCtegories)
.post(protect ,  allowedTo(role.ADMIN),nestedRouteForAddCategoryIdToParam, addSubCtegorievalidator, addSubCtegorie)
router.route('/:id')
.get(getSpecificSubCtegorievalidator , getSpecificSubCtegorie)
.delete(protect ,  allowedTo(role.ADMIN),deleteSubCtegorievalidator, deleteSubCtegorie)
.put(protect ,  allowedTo(role.ADMIN),updateSubCtegorievalidator , updateSubCtegorie)




module.exports = router