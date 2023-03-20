const router = require('express').Router();
const User = require('../models/User');
const Category = require('../models/Category');

//CREATE
router.post("/", async(req, res) => {
    const newCat = new Category(req.body);
    try{
        const savedCat = await newCat.save();
        return res.status(200).json(savedCat); 
    }
    catch(err){
        res.status(500).json(err);
    }
})

router.get("/", async(req, res) => {
    try{
        const cats = await Category.find();
        return res.status(200).json(cats); 
    }
    catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;