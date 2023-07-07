const mongoose = require('mongoose');

const connectDB = async() => {
    try {
        const conn = await mongoose.connect("mongodb+srv://tusharmahawar201:tushar201@cluster0.8ufxys8.mongodb.net/", {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit();
    }
};

module.exports = connectDB;