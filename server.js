const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Fake counters (we’ll automate later)
let instagram = 12500;
let tiktok = 8300;
let youtube = 4210;

// Root check
app.get("/", (req, res) => {
  res.send("Server is running");
});

// Instagram endpoint
app.get("/instagram", (req, res) => {
  res.json({ platform: "instagram", count: instagram });
});

// TikTok endpoint
app.get("/tiktok", (req, res) => {
  res.json({ platform: "tiktok", count: tiktok });
});

// YouTube endpoint
app.get("/youtube", (req, res) => {
  res.json({ platform: "youtube", count: youtube });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
