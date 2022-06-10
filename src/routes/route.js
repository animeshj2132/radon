const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publisherController= require("../controllers/publisherController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor  )

router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createBook1", bookController.createBook1  )

router.get("/getBooksData", bookController.getBooksData)

router.get("/getBooksWithAuthorAndPublisherDetails", bookController.getBooksWithAuthorAndPublisherDetails)

router.post("/createPublisher", publisherController.createPublisher )

router.get("/getPublisherData", publisherController.getPublisherData)

router.put("/updateCover", bookController.updateCover)

router.put("/updateBookPrice", bookController.updateBookPrice)


module.exports = router;