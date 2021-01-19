const MSGS = require('../messages');
const Post = require('../models/post');

module.exports = {
    async index(req, res){
        try {
            const post = await Post.aggregate([
               {
                   $project: {
                       _id: '$_id',
                       author: '$author',
                       author_picture: '$author.picture',
                       content: '$content',
                       topic : '$topic',
                       count_dislikes: {$size: '$dislikes'},
                       count_likes: {$size: '$likes'},               
                  }
                }
           ])
           await Post.populate(post, {path: "author topic"});
           res.json(post)
        } catch (err) {
          res.status(500).send({ "error": err.message })
        }    
    },
    async create(req, res){
        try {
            req.body.author = req.user.id
            let post = new Post(req.body)
            await post.save()
            if (post.id) {
              res.json(post);
            }
        } catch (err) {
          res.status(500).send({ "error": MSGS.GENERIC_ERROR })
        }
    
    },
    async delete(req, res){
        try {
            const post_id = req.body.id
            const post = await Post.findOneAndDelete({ _id : post_id, author: req.user.id })
            if (post) {
              res.json(post)
            } else {
              res.status(404).send({ "error": "user not found" })
            }
          } catch (err) {
            res.status(500).send({ "error": err.message })
          }
    },
    async addDislike(req, res ) {
        try {
            const post = await Post.findByIdAndUpdate(req.params.id, 
                { $addToSet: { dislikes: req.user.id } }, { new: true })
            if (post) {
              res.json(post);
            }else {
                res.status(404).send({ "error": "post not found" })
            }
        } catch (err) {
          res.status(500).send({ "error": err.message })
        }
    },
    async removeDislike(req, res){
        try {
            const post = await Post.findByIdAndUpdate(req.params.id, 
                { $pull: { dislikes: req.user.id } }, { new: true })
            if (post) {
              res.json(post);
            }else {
                res.status(404).send({ "error": "post not found" })
            }
        } catch (err) {
          res.status(500).send({ "error": err.message })
        }
    },
    async addLike(req, res){
        try {
            const post = await Post.findByIdAndUpdate(req.params.id, 
                { $addToSet: { likes: req.user.id } }, { new: true })
            if (post) {
              res.json(post);
            }else {
                res.status(404).send({ "error": "post not found" })
            }
        } catch (err) {
          res.status(500).send({ "error": err.message })
        }
    },
    async removeLike(req, res){
        try {
            const post = await Post.findByIdAndUpdate(req.params.id, 
                { $pull: { likes: req.user.id } }, { new: true })
            if (post) {
              res.json(post);
            }else {
                res.status(404).send({ "error": "post not found" })
            }
        } catch (err) {
          res.status(500).send({ "error": err.message })
        }
    }
    
    
    
}