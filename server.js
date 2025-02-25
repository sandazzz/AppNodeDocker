const express = require("express");
const app = express();
const PORT = 3000;

// Tableau de citations aléatoires
const quotes = [
  "La vie est belle.",
  "Le succès, c’est se promener d’échec en échec tout en restant motivé.",
  "Le savoir est le pouvoir.",
  "Fais de ta vie un rêve, et d’un rêve, une réalité.",
  "Il n’y a pas de raccourci vers n’importe où qui en vaille la peine.",
];

// Route qui renvoie une citation aléatoire
app.get("/random-quote", (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  res.json({ quote: randomQuote });
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});
