const MSGS = require("../messages");
const Topic = require("../models/topic");

module.exports = {
    async create(req, res){
        try {
            let topic = new Topic(req.body)
            await topic.save()
            if (topic.id) {
              res.json(topic);
            }
        } catch (err) {
          res.status(500).send({ "error": MSGS.GENERIC_ERROR })
        }
    },
    async index(req, res){
        try {
            const topics = await Topic.find({})
            res.json(topics)
        } catch (err) {
          res.status(500).send({ "error": MSGS.GENERIC_ERROR })
        }    
    }
}


