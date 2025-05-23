
const {validationResult}= require('express-validator')
const httpStatusText = require ( '../utils/httpStatusText')

const ValidatorMiddleware = (req,res,next)=>{
    const errors = validationResult(req)
    if (!errors.isEmpty())
        {
          return res.status(400).json({ status : httpStatusText.FAIL, errors : errors.array() })
        }
        next()
}

module.exports = ValidatorMiddleware