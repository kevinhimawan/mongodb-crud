var express = require('express');
var router = express.Router();
const {insertBook,showAllData,updateData,deleteBook} = require('../controllers/book.controller')

router.post('/',insertBook)
router.get('/',showAllData)
router.put('/update',updateData)
router.delete('/delete',deleteBook)

module.exports = router