const PublisherModel= require("../models/publisherModel")

const createPublisher= async (req, res)=> {
    let publisher = req.body
    let publisherCreated = await PublisherModel.create(publisher)
    res.send({data: publisherCreated})
}

const getPublisherData= async (req, res)=> {
    let publishers = await PublisherModel.find()
    res.send({data:publishers })
}

module.exports.createPublisher= createPublisher
module.exports.getPublisherData= getPublisherData