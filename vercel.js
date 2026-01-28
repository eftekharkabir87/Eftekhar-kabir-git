/**
 * FINAL Vercel/Render Server
 * Serves static HTML + health check
 * Author: EFTEKHAR KABIR⚡
 */

const express = require("express");
const path = require("path");
const app = express();

// Serve static files from 'public' folder
app.use(express.static(path.join(__dirname, "public")));

// Root route → serve index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Optional: API route
app.get("/api", (req, res) => {
  res.json({
    success: true,
    message: "Hello from API 🚀",
    author: "EFTEKHAR KABIR⚡"
  });
});

// Health check route (for Render uptime)
app.get("/health", (req, res) => res.send("OK"));

// PORT handling (required for Render)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));

// Vercel export (required)
module.exports = app;
