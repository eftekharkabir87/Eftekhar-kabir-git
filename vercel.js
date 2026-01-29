/**
 * Render-first static HTML server
 * Works on Render / Vercel
 * Shows ONLY your HTML
 * Author: EFTEKHAR KABIR⚡
 */

const express = require("express");
const path = require("path");
const app = express();

// Serve static files (HTML, CSS, JS, media)
app.use(express.static(path.join(__dirname, "public")));

// Root → show your HTML
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Health check (Render needs this)
app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

// Required PORT handling
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("✅ HTML server running on port " + PORT);
});

// Export for Vercel
module.exports = app;
