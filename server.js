app.get("/instagram", (req, res) => {
  res.send(instagram.toString());
});

app.get("/tiktok", (req, res) => {
  res.send(tiktok.toString());
});

app.get("/youtube", (req, res) => {
  res.send(youtube.toString());
});
