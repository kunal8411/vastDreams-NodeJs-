const express= require('express');
const path= require('path');
const router= express.Router();


const booksController= require('../controller/booksController')

router.get('/books', booksController.getAllBooks)

module.exports=router;