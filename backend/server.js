const app = require("./app");
require("dotenv").config();
const PORT = process.env.PORT || 4000;
const server = app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`)
})

