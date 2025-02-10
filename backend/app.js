const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoSanitize = require("express-mongo-sanitize");
const globalErrorHandler = require("./controllers/errorController")
const path = require('path'); // Para acessar file system
const AppError = require("./utils/appError");

const PORT = process.env.PORT || 4000;
const app = express();

app.use("/", express.static("uploads")) // Para aceitar arquivos estaticos de uploads

app.use(cookieParser()) //Para recuperar pequenos pedaços de dados do cliente

app.use(helmet()) // Define cabeçalhos HTTP adequadamente

app.use(cors({
  origin:[`https://localhost:${PORT}`], // Aceita esse servidor
  credentials: true // Enviara cookies de sessão APENAS para o endereço de origem
}))

app.use(express.static(path.join(__dirname, 'public'))); // Para carregar arquivos da pasta public



if(process.env.NODE_ENV === 'development') app.use(morgan('dev')); // Para informações adicionar no modo dev

app.use(express.json({limit: "10kb"})) // Para proteger o servidor

app.use(mongoSanitize()) //Para evitar ataques de query selector

// users route

// posts route

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404))
})

app.use(globalErrorHandler)
module.exports = app;