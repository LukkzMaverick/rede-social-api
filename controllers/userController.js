const { validationResult } = require("express-validator")
const MSGS = require("../messages")
const User = require("../models/user")
const bcrypt = require('bcrypt');

module.exports = {
    async create(req, res) {
        try {
            let password = req.body.password

            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() })
            } else {
                let usuario = new User(req.body)
                if (req.body.picture_name) {
                    usuario.picture = `user/${req.body.picture_name}`
                }
                const salt = await bcrypt.genSalt(10);
                usuario.password = await bcrypt.hash(password, salt);
                await usuario.save()
                if (usuario.id) {
                    res.json(usuario);
                }
            }
        } catch (err) {
            res.status(500).send({ "error": err.message })
        }
    },
    async update(req, res) {
        try {
            const id = request.params.userId
            const salt = await bcrypt.genSalt(10)
            let bodyRequest = request.body

            if (request.body.picture_name) {
                bodyRequest.picture = `user/${request.body.picture_name}`
            }

            if (bodyRequest.password) {
                bodyRequest.password = await bcrypt.hash(bodyRequest.password, salt)
            }
            const update = { $set: bodyRequest }
            const user = await User.findByIdAndUpdate(id, update, { new: true })
            if (user) {
                res.send(user)
            } else {
                res.status(404).send({ error: MSGS.USER404 })
            }
        } catch (err) {
            res.status(500).send({ "error": err.message })
        }
    },
    async index(req, res) {
        try {
            const user = await User.find({})
            res.json(user)
        } catch (err) {
            console.error(err.message)
            res.status(500).send({ "error": 'Erro!' })
        }
    },
    async getOneById(req, res) {
        try {
            const id = req.params.id
            const user = await User.findById(id)
            if (user) {
                res.json(user)
            } else {
                res.status(404).send({ "error": MSGS.USER404 })
            }

        } catch (err) {
            console.error(err.message)
            res.status(500).send({ "error": 'Erro!' })
        }
    },
    async addEducation(req, res) {
        try {
            const id = req.user.id
            const profile = await User.findByIdAndUpdate(id, { $push: { education: req.body } }, { new: true })
            if (profile) {
                res.json(profile)
            } else {
                res.status(404).send({ "error": "user not found" })
            }
        } catch (err) {
            console.error(err.message)
            res.status(500).send({ "error": "Server Error" })
        }
    },
    async removeEducation(req, res) {
        try {
            const id = req.user.id
            const profile = await User.findByIdAndUpdate(id, { $pull: { education: req.body } }, { new: true })
            if (profile) {
                res.json(profile)
            } else {
                res.status(404).send({ "error": "user not found" })
            }
        } catch (err) {
            console.error(err.message)
            res.status(500).send({ "error": "Server Error" })
        }

    },
    async newFriendship(req, res) {
        try {
            data = req.body
            let user = await User.findById(req.user.id)
            user.friendships.push(req.body.id)
            await user.save().then(t => t.populate({ path: 'friendships', select: 'name picture username' }).execPopulate())
            if (user.id) {
                res.json(user.friendships)
            }
        } catch (err) {
            res.status(500).send({ "error": err.message })
        }
    },
    async deleteFriendship(req, res) {
        try {
            data = req.body
            const user = await User.findById(req.user.id).populate('friendships')
            user.friendships.pull(req.body.id)
            await user.save()
            if (user.id) {
                res.json(user.friendships)
            }
        } catch (err) {
            res.status(500).send({ "error": err.message })
        }
    },
    async getFriendship(req, res) {
        try {
            const user = await User.findById(req.user.id).populate('friendships')
            res.json(user.friendships)
        } catch (err) {
            res.status(500).send({ "error": MSGS.GENERIC_ERROR })
        }
    }
}


