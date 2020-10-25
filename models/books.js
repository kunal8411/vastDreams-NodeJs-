const mongoose= require('mongoose');


const bookSchema = new mongoose.Schema({
    books:[{
        title:{ type:String},
        isbn:{ type:String},
        pageCount:{ type:String},
        thumbnailUrl:{ type:String},
        shortDescription:{ type:String},
        longDescription:{ type:String},
        status:{ type:String},
        authors:[{
            type:String
        }],
        categories:[{
            type:String
        }]

    }]
    
},  {
        timestamps: true
});


const Books=mongoose.model('Books',bookSchema); 

module.exports= Books;