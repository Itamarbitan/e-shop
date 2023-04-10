const { number } = require("joi");
const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 256,
    },
    subTitle: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 256,
    },
    description: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 1024,
    },
    price: {
        type: Number,
        required: true,
    },
    phone: {
        type: String,
        required: true,
        minlength: 9,
        maxlength: 17,
    },
    image: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 1024,
    },
    bizNumber: {
        type: String,
        minlength: 7,
        maxlength: 7,
        required: true,
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }
});

const Card = mongoose.model("card", cardSchema);

exports.Card = Card;