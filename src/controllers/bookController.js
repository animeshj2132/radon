const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModel")

const createBook1= async function (req, res) {
    let book = req.body
    let A_id=req.body.author_id
    let P_id=req.body.publisher_id
    let authorPresent=await authorModel.findById(A_id);
    let publisherPresent= await publisherModel.findById(P_id);
   if(authorPresent){
       if(publisherPresent){
           let saveData=await bookModel.create(book)
           res.send({msg : saveData})
       }
       else{
           res.send({msg:"publisher_id is not present"})
       }
   }
   else{
       res.send({msg :"author_id is not present"})
   }
}



const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}



const getBooksWithAuthorAndPublisherDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate(['author_id', 'publisher_id'])
    res.send({data: specificBook})

}

let updateCover =  async function (req, res) {
    let pubBody= req.body.publisher;
    let findPublisher =await publisherModel.find({name:pubBody})
    
    let specificBook = await bookModel.updateMany(
       {publisher:findPublisher},
        {$set:{isHardCover:true}},
        {new:true}
    )
    res.send({ data: specificBook })

}

let updateBookPrice =  async function (req, res) {
   
    let findAuthor = await authorModel.find({rating:{$gt:3.5}})
    let specificBook = await bookModel.updateMany(
        {author:findAuthor},
        {$set:{$inc:{price:10}}},
        {new:true}
    ).count()
    res.send({ data: specificBook })

}

module.exports.createBook1= createBook1
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorAndPublisherDetails = getBooksWithAuthorAndPublisherDetails
module.exports.updateCover = updateCover
module.exports.updateBookPrice = updateBookPrice