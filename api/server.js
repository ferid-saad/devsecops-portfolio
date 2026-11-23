const express = require("express");
const cors = require("cors");
const profile = require("./data/profile");
const projects = require("./data/projects");
const skills = require("./data/skills");

const app = express();
const PORT = process.env.PORT || 4000;
const { contactSchema } = require("./validation/contact");
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} ${req.method} ${req.url}`);
  next();
});

app.get("/", (req, res) => {
  res.json({ name: "DevSecOps Portfolio API", status: "running" });
});

// Étape 30
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "L'API fonctionne",
    uptime: Math.round(process.uptime()),
    timestamp: new Date().toISOString(),
  });
});

// Étape 31
app.get("/api/profile", (req, res) => {
  res.json(profile);
});

// Étape 32
app.get("/api/projects", (req, res) => {
  res.json(projects);
});

// Bonus : un projet par son id (utile pour /projects/[slug] à l'étape 34)
app.get("/api/projects/:id", (req, res) => {
  const project = projects.find((p) => p.id === req.params.id);
  if (!project) {
    return res.status(404).json({ error: "Projet introuvable" });
  }
  res.json(project);
});

// Étape 33
app.get("/api/skills", (req, res) => {
  res.json(skills);
});
// Étape 46 + 48 : validation stricte avec Zod
app.post("/api/contact", (req, res) => {
  const result = contactSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      success: false,
      error: "Données invalides",
      details: result.error.issues.map((issue) => ({
        field: issue.path.join(".") || "body",
        message: issue.message,
      })),
    });
  }

  // On ne journalise pas le contenu du message ni l'e-mail (données personnelles)
  console.log("Nouveau message de contact reçu");

  res.status(201).json({
    success: true,
    message: "Message reçu, merci de votre contact",
    receivedAt: new Date().toISOString(),
  });
});
app.use((req, res) => {
  res.status(404).json({ error: "Route introuvable" });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`API démarrée sur le port ${PORT}`);
});