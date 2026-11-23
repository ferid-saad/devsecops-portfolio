const { z } = require("zod");

// Schéma strict : seuls ces champs sont acceptés, avec ces règles
const contactSchema = z.strictObject({
  name: z
    .string()
    .trim()
    .min(2, "Le nom doit contenir au moins 2 caractères")
    .max(100, "Le nom ne peut pas dépasser 100 caractères"),
  email: z
    .string()
    .trim()
    .max(254, "L'adresse e-mail est trop longue")
    .email("Adresse e-mail invalide"),
  subject: z
    .string()
    .trim()
    .max(150, "Le sujet ne peut pas dépasser 150 caractères")
    .optional(),
  message: z
    .string()
    .trim()
    .min(10, "Le message doit contenir au moins 10 caractères")
    .max(2000, "Le message ne peut pas dépasser 2000 caractères"),
});

module.exports = { contactSchema };