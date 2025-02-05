const mongoose = require("mongoose")
const app = require("./app");
require("dotenv").config();

mongoose.connect(process.env.DB).then(() => {
    console.log(`DB Connection successfull`)
}).catch((err) => {
    console.log(err)
})

const PORT = process.env.PORT || 3000;



const server = app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`)
})

