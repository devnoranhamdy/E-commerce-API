require('dotenv').config()

const globalError = (error , req, res , next)=>{
   if (process.env.NODE_ENV == 'development') 
    {
        senErrorsForDev(error , res)
    } else {
        senErrorsForProdaction(error , res)

    }
    
}

const senErrorsForDev  = (error , res)=>{
    res.status(error.statusCode || 500 )
    .json({ 
        status :error.status || 'error' 
        , message : error.message || 'Internal Server Error' 
        , stack : error.stack  })
}

const senErrorsForProdaction  = (error , res)=>{
    res.status(error.statusCode || 500 )
    .json({ 
        status :error.status || 'error' 
        , message : error.message || 'Internal Server Error' 
         })
}


module.exports = globalError