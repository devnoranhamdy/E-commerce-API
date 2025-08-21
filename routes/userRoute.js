const express = require ('express')
const router = express.Router()
const {getSpecificUser ,updateUser , deleteUser ,getAllUsers , createUser } = require('../controller/userController')
const { getUserValidator , deleteUserValidator, updateUserValidator , creatUserValidator}= require('../utils/validators/userValidator')
const { protect , allowedTo } = require ('../middleware/decodedToken')
const role = require('../utils/roles')
const upload = require('../middleware/uploadphoto')

router.route('/')
.post(upload.single('avater'),  protect ,  allowedTo(role.ADMIN), creatUserValidator,createUser)
.get(protect ,  allowedTo(role.ADMIN),getAllUsers)


router.route('/:id')
.delete(protect ,  allowedTo(role.ADMIN),deleteUser)
.put(protect ,  allowedTo(role.ADMIN),updateUser)
.get(protect ,  allowedTo(role.ADMIN),getSpecificUser)



module.exports = router
