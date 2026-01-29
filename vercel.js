/**
 * Eftekhar Kabir Profile Server
 * Render + Vercel compatible
 */

const express = require("express");
const path = require("path");

const app = express();

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Root route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Health check (optional)
app.get("/health", (req, res) => res.send("OK"));

// 404 fallback
app.use((req, res) => {
  res.status(404).send("404 | Page Not Found");
});

// Only listen on Render
if (!process.env.VERCEL) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log("✅ Server running on port", PORT);
  });
}

// Export for Vercel
module.exports = app;
