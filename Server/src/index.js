const server = require("../src/app");
const { database } = require("../src/DB_connection");
const PORT = 3001;


database.sync({ alter: true }).then(() => {
    server.listen(PORT, () => {
        console.log(`Server running into ${PORT} Port`);
    });
})
    .catch(err => console.log(err))

