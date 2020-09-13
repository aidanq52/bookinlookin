const express = require("express");
const router = express.Router();
const Book = require("../models/book");

//Add book to library
router.post("/addBook", (req, res)=>{
    
    console.log("hit add book route")

    Book.create(req.body)
        .then(bookinDB=>{
            res.json(bookinDB);
        })
        .catch(err =>{
            res.status(401).json(err)
        });

});

//Remove book from Library
// router.delete(`/delete/${id}`, (req, res)=>{

// } )

//get all books
router.get("/library", (req, res)=>{

    console.log("hit library route")

    Book.find()
    .then(bookingDB=>{
        res.json(bookingDB);
    })
    .catch(err=>{
        res.status(401).json(err)
    })
} )

module.exports = router;