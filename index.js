const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./src/config/db");
const transactionRoutes = require("./src/routes/transactionRoutes"); // Pastikan path ini sesuai
const cors = require("cors");
const errorHandler = require("./src/middleware/errorHandler")
const morgan = require("morgan")

// Memuat konfigurasi dari file .env
dotenv.config();

// Menghubungkan ke MongoDB
connectDB();

// Membuat aplikasi Express
const app = express();

// CORS untuk mengizinkan permintaan dari berbagai origin
app.use(
  cors({
    origin: true,
  })
);

// Middleware untuk parsing JSON
app.use(express.json());
app.use(morgan("dev"));

// Rute API
app.route("/").get((req,res,next) => {
  return res.status(201).json({message : "Masuk"})
})
app.use("/api", require("./src/routes/transactionRoutes"));

app.use(errorHandler)
// Menentukan port dari variabel lingkungan atau 5000 sebagai default
const PORT = process.env.PORT || 5000;

// Menjalankan server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
