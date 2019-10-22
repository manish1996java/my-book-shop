const Book = require('../models/book');

module.exports.books = (req,res,next) =>{
    Book.find().then((booklist)=>{
        
        res.status(200).json({
            message:"successfully get",
            books:booklist
        })
    }).catch((err)=>{
        res.json({
            message:"fail to get books",
            err:err
        })
    })
}

module.exports.upload = (req,res,next) =>{
    const book = new Book({
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        author: req.body.author,
        image: req.body.image
    })
    book.save().then((resolve)=>{
        console.log('check start');
        res.status(200).json({
            message: "successfully saved", 
        })
        console.log('check end');
    }).catch((err)=>{
        res.status(500).json({
            message: "failed to save",
            err: err
        })
    })
}

module.exports.update = (req,res,next) =>{
    let id = req.params.id;
    const book = new Book({
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        author: req.body.author,
        image: req.body.image
    })

    
    Book.updateOne({_id:id},book).then((result)=>{
        res.status(200).json({
            message:"successfully update",
        })
    }).catch((err)=>{
        res.json({
            message:"fail to update",
            err:err
        })
    });
}

module.exports.delete = (req,res,next) =>{
    let id = req.params.id;
    console.log(id);
    Book.deleteOne({_id:id})
    .then((result)=>{
        console.log(result);
        res.status(200).json({
            message:"successsfully delete"
        })
    })
    .catch((err)=>{
        res.status(404).json({
            message: "product not found",
            err:err
        })
    })
}

module.exports.getPage = (req,res,next) =>{
    let pageSize = +req.query.pagesize;
    let page = req.query.page;
    console.log("pagesize: "+pageSize+" page "+page);
    let bookquery = Book.find();
    if(pageSize && page){
        console.log("come inside")
        bookquery
        .skip(pageSize * (page-1))
        .limit(pageSize)
    }
    bookquery.then((book)=>{
        console.log(book);
        res.status(200).json({
            message:"fetched data",
            books:book
        })
    }).catch((err)=>{
        res.json({
            err:err
        })
    })

}