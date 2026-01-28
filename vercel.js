/**
 * 100% Stable Vercel/Render Server
 * Author: EFTEKHAR KABIR⚡
 */

const express = require("express");
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Root route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Server is running perfectly 🚀",
    author: "EFTEKHAR KABIR⚡",
    platform: "Vercel / Render / Railway"
  });
});

// Health check route (important for Render)
app.get("/health", (req, res) => {
  res.send("OK");
});

// PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));

// Export module for Vercel
module.exports = app;
