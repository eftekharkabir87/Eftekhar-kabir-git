/**
 * Eftekhar Kabir Profile Page
 * Render + Vercel compatible
 * All-in-one merged server
 */

const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Serve static files from public folder
app.use(express.static(path.join(__dirname, "public")));

// ✅ Home route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// ✅ Optional: health check
app.get("/health", (req, res) => res.send("OK"));

// ✅ Fallback for unknown routes
app.use((req, res) => {
  res.status(404).send("404 | Page Not Found");
});

// ✅ Only listen on Render, Vercel handles serverless automatically
if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log("Server running on port", PORT);
  });
}

// ✅ Export app for Vercel
module.exports = app;
