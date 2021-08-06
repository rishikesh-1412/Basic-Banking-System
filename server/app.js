//express...............
const express = require("express");
const app = express();

app.use(express.json());

//assigning port number...........
const PORT = process.env.PORT || 5000

//database connection...........
require("./dbconnection/conn");

//router.................
app.use(require("./router/router"));

//listening to the port...............
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})