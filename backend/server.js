const express = require("express");

const app = express();
app.use(express.json());
app.use(require("sanitize").middleware);

const PORT = 3000;

const connection = require("./db/db_connection.js").connect();

process.on("SIGINT", function () {
  console.log("Caught interrupt signal, cleaning up.");
  connection.end(function (err) {
    if (err) throw err;
    process.exit();
  });
});

require("./db/dbCreator.js").createDB(connection);

require("./api/router.js").route(app, connection);

// starte server
let server = app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log("Listening on PORT", PORT);
});
