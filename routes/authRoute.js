const express = require ('express')

const router = express.Router()
const { signup , login} = require('../controller/authController')
const { loginValidator , signupValidator}= require('../utils/validators/authValidator')
const upload = require('../middleware/uploadphoto')


router.route('/signup')
.post(upload.single('avater') , signupValidator,signup)
router.route('/login')
.post(loginValidator,login)




module.exports = router
