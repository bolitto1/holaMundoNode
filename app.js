const express = require("express");
const app = express();
const PORT = 3000;

function obtenerFraseAleatoria() {
  const frases = ["hola", "holi", "holis"];
  return frases[Math.floor(Math.random() * frases.length)];
}

app.get("/frase", (req, res) => {
  res.json({
    mensaje: obtenerFraseAleatoria()
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});