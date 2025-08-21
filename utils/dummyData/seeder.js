const fs = require('fs')
require('dotenv').config({ path: '../../.env' })
const color = require('colors')
const Product = require ('../../models/product')
const dbConnection = require ('../../config/db')

dbConnection()
const Products = JSON.parse(fs.readFileSync('./products.json'))

const insertData = async()=>{
    try{
    await Product.create(Products)
    console.log('Product added successfuly'.green.inverse)
    process.exit()
    }catch(error){
         console.log(error);
    }
}
const destroyData = async () => {
  try {
    await Product.deleteMany();
    console.log('Data Destroyed'.red.inverse);
    process.exit();
  } catch (error) {
    console.log(error);
  }
};

if (process.argv[2] === '-i') {
  insertData();
} else if (process.argv[2] === '-d') {
  destroyData();
}