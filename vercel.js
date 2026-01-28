/**
 * 100% Working Express Server
 * Deploy on Vercel / Render / Railway
 * Author: EFTEKHAR KABIR⚡
 */

const express = require("express");
const app = express();

// Parse JSON + URL encoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Root route (works everywhere)
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Server is running 🚀",
    platform: "Vercel / Render / Railway",
    author: "EFTEKHAR KABIR⚡",
  });
});

// A simple test route
app.get("/hello", (req, res) => {
  res.send("Hello from Express!");
});

// Health check (optional)
app.get("/health", (req, res) => {
  res.send("OK");
});

// Listen (Render/Railway use PORT)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

// Vercel export
module.exports = app;
