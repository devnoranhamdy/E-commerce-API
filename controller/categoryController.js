const express = require ('express')
const Category = require ('../models/category')
const httpStatusText = require ( '../utils/httpStatusText')
const slugify = require ('slugify')
const asyncHandler = require('express-async-handler')



const createCategory = asyncHandler ( async (req,res)=>{
    
        const { name } = req.body ; 
        const newCategory = new Category({name , slug : slugify(name)})
        await newCategory.save()
        res.status(201).json({ status : httpStatusText.SUCCESS , data : newCategory , message : "new category added successfuly"})
   
}
);

const getAllCategories = asyncHandler(async (req, res)=>{

    const query = req.query
    const limit = query.limit*1 || 10
    const page =  query.page*1 || 1
    const skip = (page -1 )*limit
    const allCategories =  await Category.find({},{"__v": 0}).limit(limit).skip(skip)
    res.status(200).json({ status : httpStatusText.SUCCESS , result : allCategories.length , page ,  data : allCategories   })

});

const getSpecificCategory = asyncHandler(async(req,res)=>{
    const { id } = req.params ; 
    const SpecificCategory =  await Category.findById(id,{'__v': 0})
    if (!SpecificCategory){
         return res.status(400).json({ status : httpStatusText.FAIL , data : null , message : " not found !" })

    }
         return res.status(200).json({ status : httpStatusText.SUCCESS , data : SpecificCategory })
    
});

const deleteCategory = asyncHandler(async(req,res)=>{
     const { id  } = req.params; 
     const deleteCategory = await Category.findByIdAndDelete(id)
     res.status(200).json({ status : httpStatusText.SUCCESS  , message : " deleted successfuly " })
    
});

const updateCategory = asyncHandler(async(req,res)=>{
    const {  id  } = req.params ;
    const { name }  = req.body ; 
    const updatedCategory = await Category.findByIdAndUpdate(id ,{name , slug : slugify(name)} , {new : true})
    if (!updatedCategory){
        return res.status(400).json({ status : httpStatusText.FAIL , data : null , message : " not found !" })

   }
   return res.status(200).json({ status : httpStatusText.SUCCESS , data : updatedCategory , message : " updated successfuly " })
   
});



module.exports = 
{
    createCategory ,
    getAllCategories ,
    deleteCategory ,
    getSpecificCategory ,
    updateCategory

}

