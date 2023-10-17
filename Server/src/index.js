require('dotenv').config();
const server = require("../src/app");
const { database } = require("../src/DB_connection");
const { PORT } = process.env;

database.sync({ alter: true }).then(() => {
    server.listen(PORT, () => {
        console.log(`Server running into ${PORT} Port`);
    });
})
    .catch(err => console.log(err))

