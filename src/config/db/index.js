const mongoose = require('mongoose')
 
async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/my_database');
        console.log('Connect successfully!');
    } catch (e) {
        console.log('Connect failed!');
    }

}

module.exports = { connect } 