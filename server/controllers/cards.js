const joi = require('joi');
const { User } = require('../models/User');
const { Card } = require('../models/Card');
const { resolve } = require('path');
const { rejects } = require('assert');
const { response } = require('../app');

module.exports = {
    list: async function (req, res, next) {
        try {
            const result = await Card.find({});
            res.json(result);
        }
        catch (err) {
            console.log(err);
            res.status(400).json({ error: 'error getting cards' });
        }
    },

    details: async function (req, res, next) {
        try {
            const schema = joi.object({
                id: joi.string().required(),
            });

            const { error, value } = schema.validate(req.params);

            if (error) {
                console.log(error.details[0].message);
                throw `error get details`;
            }

            const card = await Card.findById(value.id);
            if (!card) throw "Invalid card id, no such card.";
            res.json(card);
        }
        catch (err) {
            res.status(400).json({ error: "Invalid data" });
            console.log(`Error: ${err}`);
        }
    },

    userCards: async function (req, res, next) {
        try {
            const schema = joi.object({
                id: joi.string().required(),
            });

            const { error, value } = schema.validate(req.params);

            if (error) {
                console.log(error.details[0].message);
                throw 'error get details';
            }

            const user = await User.findById(value.id);
            if (!user || !user.isBiz) throw "Invalid user id, no such user.";

            const cards = await Card.find({ user_id: user._id });
            res.json(cards);
        }
        catch (err) {
            res.status(400).json({ error: `error get cards of a user` });
            console.log(err.message);
        }
    },

    addNew: async function (req, res, next) {
        try {
                        console.log(req.token.email)
            const user = await User.findOne({ email: req.token.email });
            if (!user || !user.isBiz) throw "Not a business user";

            const schema = joi.object({
                title: joi.string().min(2).max(256).required(),
                subTitle: joi.string().min(2).max(256).required(),
                description: joi.string().min(2).max(1024).required(),
                price: joi.number().required(),
                phone: joi.string().min(9).max(17).required(),
                image: joi.string().min(6).max(1024),
            });

            const { error, value } = schema.validate(req.body);

            if (error) {
                console.log(error.details[0].message);
                throw 'error add card';
            }

            const card = new Card({
                title: value.title,
                subTitle: value.subTitle,
                description: value.description,
                price: value.price,
                phone: value.phone,
                image: value.image,
                bizNumber: Math.floor(Math.random() * 10000000),
                user_id: user._id,
            });

            const newCard = await card.save();
            console.log(newCard)
            res.json(newCard);
        }
        catch (err) {
            console.log(err.message);
            res.status(400).json({ error: `error adding card` });
        }
    },

    updateDetails: async function (req, res, next) {
        try {
            const user = await User.findOne({ email: req.token.email });
            if (!user || !user.isBiz) throw "Not a business user";

            const schema = joi.object({
                title: joi.string().min(2).max(256).required(),
                subTitle: joi.string().min(2).max(256).required(),
                description: joi.string().min(2).max(1024).required(),
                price: joi.number().required(),
                phone: joi.string().min(9).max(17).required(),
                image: joi.string().min(6).max(1024),
            }).min(1);

            const { error, value } = schema.validate(req.body);

            if (error) {
                console.log(error.details[0].message);
                throw 'error updating card';
            }

            const filter = {
                _id: req.params.id,
                userID: user._id,
            };

            const card = await Card.findOneAndUpdate(filter, value);
            if (!card) throw "No card with this ID in the database";
            const uCard = await Card.findById(card._id);
            res.json(uCard);
        }
        catch (err) {
            console.log(err.message);
            res.status(400).json({ error: `error updating card` });
        }
    },

    deleteCard: async function (req, res, next) {
        try {
            const user = await User.findOne({ email: req.token.email });
            if (!user || !user.isBiz) throw "Not a business user";

            const schema = joi.object({
                id: joi.string().required(),
            });

            const { error, value } = schema.validate(req.params);

            if (error) {
                console.log(error.details[0].message);
                throw `error delete card`;
            }

            const deleted = await Card.findOneAndRemove({
                _id: value.id,
                user_id: user._id,
            });

            if (!deleted) throw "failed to delete";
            res.json(deleted);
        }
        catch (err) {
            console.log(err.message);
            res.status(400).json({ error: `error delete card` });
        }
    },

    getCart: async function (req, res) {
        try {
            const schema = joi.object({
                id: joi.string().required(),
            });

            const { error, value } = schema.validate(req.params);

            if (error) {
                console.log(error.details[0].message);
                throw 'error get details';
            }

            const user = await User.findById(value.id);
            if (!user || !user.isBiz) throw "Invalid user id, no such user.";

            const arr = user.cart_id;
            const newArr= [];
            let endres = []
            arr.forEach(async (cardId) => {

                newArr.push(new Promise((resolve,rejects) => {
                    const card = Card.findById({ _id: cardId });
                    resolve(card)
                    rejects('item not found')
                }))

            })
            endres = await Promise.all(newArr)
            res.json(endres)
            
        }
        catch (err) {
            res.status(400).json({ error: `error get cards of a user` });
            console.log(err.message);
        }
    },

    deleteProductFromCart: async function (req, res) {
        try {
            const user = await User.findOne({ email: req.token.email });
            if (!user || !user.isBiz) throw "Not signed in";

            const arr = user.cart_id;
            const cardId = req.body._id
            const updatedCart = arr.filter(e => e.toString() !== cardId)
            console.log(updatedCart)

            const response = await user.updateOne({cart_id:updatedCart})
            res.json(response)            
        }
        catch (err) {
            res.status(400).json({ error: `error deleting products` });
            console.log(err.message);
        }
    }
}