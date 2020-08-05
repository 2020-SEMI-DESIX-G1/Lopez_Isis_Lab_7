const mongoose = require('mongoose');

const MONGO_URL = `process.env.MONGODB_SERVER`;



const connectDb = () => mongoose.connect('mongodb+srv://lbelbook:lbelbook123@cluster0.isxwv.mongodb.net/lbelbook?retryWrites=true&w=majority');

module.exports = connectDb;