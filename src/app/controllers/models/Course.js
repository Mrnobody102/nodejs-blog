const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;

const Course = new Schema({
    name: {type: String, maxLength: 255},
    price: {type: String},
    image: {type: String, maxLength: 255},
    slug: {type: String, maxLength: 255},
    createAt: {type: Date, default: Date.now},
    updateAt: {type: Date, default: Date.now},
});

module.exports = mongoose.model('Course', Course);


