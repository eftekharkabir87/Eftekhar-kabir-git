/**
 * Universal HTML Server
 * Render + Vercel compatible
 * Author: EFTEKHAR KABIR⚡
 */

const express = require("express");
const path = require("path");
const app = express();

// Serve static HTML
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Health check (Render safe)
app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

/**
 * 🔴 IMPORTANT PART
 * Only listen when NOT on Vercel
 */
if (!process.env.VERCEL) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log("✅ Server running on port " + PORT);
  });
}

// ✅ Required for Vercel
module.exports = app;
