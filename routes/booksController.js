const express = require("express");
const router = express.Router();
const {Book} = require("../models/book");

//Add book to library
router.post("/", (req, res)=>{
    
    Book.create(req.body)
        .then(bookingDB=>{
            res.json(bookingDB);
        })
        .catch(err =>{
            res.status(401).json(err)
        });

});

//Remove book from Library

//get all books

module.exports = router;