const json = require('body-parser/lib/types/json');
const Books = require('../models/books');

module.exports.getAllBooks= async function(req,res){
    var id ="5f93dade73d3673a55beea4e"
    const books = await Books.findOne({_id: id});
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000/books');
    return res.json(200, {
       
        books:books.books
    })
    

}




