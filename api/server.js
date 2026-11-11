const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} ${req.method} ${req.url}`);
  next();
});

app.get("/", (req, res) => {
  res.json({ name: "DevSecOps Portfolio API", status: "running" });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`API démarrée sur le port ${PORT}`);
});