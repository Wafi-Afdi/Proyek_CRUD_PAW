const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Menghubungkan ke MongoDB menggunakan variabel lingkungan dari .env
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);  // Keluar dari proses jika gagal terhubung
    }
};

module.exports = connectDB;
