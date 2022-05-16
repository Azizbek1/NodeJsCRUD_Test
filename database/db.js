const mongoose = require('mongoose');

module.exports = start = () => {
    mongoose.connect('mongodb://localhost:27017/test').then(() => {
        console.log(`Bazaga Ulandik! `)
    });
}