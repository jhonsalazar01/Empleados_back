const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // MongoDB connection string
        const con = await mongoose.connect("mongodb+srv://jhonsalazar01:gYNE3RqRJfNpRi0y@final.0ux8x.mongodb.net/Final", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(`MongoDB connected: ${con.connection.host}`);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB;
