const express = require ('express')
const morgan = require ('morgan')
const categoryRoute = require('./routes/categoryRoute')
require('dotenv').config()
const cors = require ('cors')
const dbConnection = require('./config/db')


const app = express()
app.use(express.json())
app.use(cors())
dbConnection()

if (process.env.NODE_ENV == "development")
    {
        app.use(morgan('dev'))
        console.log(`mode : ${process.env.NODE_ENV}`)
    }
    

const port = process.env.PORT || 3000 



app.get('/', (req, res) => {
    res.send('Welcome to the homepage!');
  });


app.use('/api/categories',categoryRoute)
  
app.listen(port , ()=>{
console.log('Application Runninr Successfuly !')
});

