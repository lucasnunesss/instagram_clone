const mongoose = require("mongoose")
const app = require("./app");
require("dotenv").config();
process.on("uncaughtException", (err)=> {
    console.log("UNCAIGHT EXCEPTION! Shutting down")
    console.log(err.name, err.message)
    process.exit(1)
})
mongoose.connect(process.env.DB).then(() => {
    console.log(`DB Connection successfull`)
}).catch((err) => {
    console.log(err)
})

const PORT = process.env.PORT || 3000;



const server = app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`)
})

process.on("unhandledRejection", (err) => {
    console.log("UNHANDLE REJECTION! Shutting down");
    console.log(err.name, err.message);
    server.close(() => {
        process.exit(1)
    })
})
