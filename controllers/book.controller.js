const {insertBookModel,viewBookModel,updateBookModel,deleteBookModel} = require('../models/book.model')

module.exports = {
    insertBook: (req,res)=>{
        insertBookModel(req,res)
    },

    showAllData: (req,res)=>{
        viewBookModel(req,res)
    },

    updateData: (req,res)=>{
        updateBookModel (req,res)
    },

    deleteBook: (req,res)=>{
        deleteBookModel(req,res)
    }

}