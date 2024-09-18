const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./src/config/db');  
const transactionRoutes = require('./src/routes/transactionRoutes');  // Pastikan path ini sesuai

// Memuat konfigurasi dari file .env
dotenv.config(); 

// Menghubungkan ke MongoDB
connectDB();

// Membuat aplikasi Express
const app = express();

// Middleware untuk parsing JSON
app.use(express.json());

// Rute API
app.use('/api', require('./src/routes/transactionRoutes'));

// Menentukan port dari variabel lingkungan atau 5000 sebagai default
const PORT = process.env.PORT || 5000;

// Menjalankan server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
