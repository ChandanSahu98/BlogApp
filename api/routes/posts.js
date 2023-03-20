const router = require('express').Router();
const User = require('../models/User');
const Post = require('../models/Post');

//CREATE NEW POST
router.post("/", async(req, res) => {
    const newPost = new Post(req.body);
    try{
        const savedPost = await newPost.save();
        return res.status(200).json(savedPost); 
    }catch(err){
        res.status(500).json(err);
    }
});

//UPDATE NEW POST
router.put("/:id", async(req, res) => {
    try{
        const post = await Post.findById(req.params.id);
        if(post.username === req.body.username){
            try{
                const updatedPost = await Post.findByIdAndUpdate(req.params.id,
                    {
                        $set : req.body,
                    },
                    {new : true}
                    );
                return res.status(200).json(updatedPost);
            }
            catch(err){

            }
        }
        else{
            return res.status(401).json("You can only update yout post!");
        }
    }catch(err){
        res.status(500).json(err);
    }
});

//DELETE POST
router.delete("/:id", async(req, res) => {
    try{
        const post = await Post.findById(req.params.id);
        if(post.username === req.body.username){
            try{
                await Post.findByIdAndDelete(req.params.id);
                return res.status(200).json("Post Deleted Succesfully...")
            }
            catch(err){
                res.status(500).json(err);
            }
        }
        else{
            return res.status(401).json("You can delete only yout post!")
        }
    }
    catch(err){
        res.status(500).json(err);
    }
});

//GET POST
router.get("/:id", async(req, res) => {
    try{
        const post = await Post.findById(req.params.id);
        return res.status(200).json(post);
    }catch(err){
        res.status(500).json(err);
    }
})

//GET ALL POSTS
router.get("/", async(req, res) => {
    const username = req.query.user;
    const catName = req.query.cat;
    try{
        let posts;
        if(username){
            posts = await Post.find({username: username})
        }
        else if(catName){
            posts = await Post.find({categories: {
                $in: [catName]
            }})
        }
        else{
            posts = await Post.find();
        }
        return res.status(200).json(posts);
    }catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;