const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoSanitize = require("express-mongo-sanitize");

const PORT = process.env.PORT || 4000;
const app = express();

app.use("/", express.static("uploads")) // Para aceitar arquivos estaticos de uploads

app.use(cookieParser()) //Para recuperar pequenos pedaços de dados do cliente

app.use(helmet()) // Define cabeçalhos HTTP adequadamente

app.use(cors({
  origin:[`https://localhost:${PORT}`], // Aceita esse servidor
  credentials: true // Enviara cookies de sessão APENAS para o endereço de origem
}))

module.exports = app;