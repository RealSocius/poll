const utils = require("./utils.js");
const isJSON = utils.isJSON;

module.exports.route = function (expressApp, dbConnection) {
  // TODO: most important feature of the whole Project(Don't listen to him i'm pretty sure this isn't important) // Ignore, stupid
  expressApp.get("/api/v1/polls", function (req, res) {
    const param = req.queryInt("param");
    // TODO: give a list of all polls (cache? of) SQLCMD: SELECT COUNT(pollId) from Poll;
    res.send("abs" + param);
  });

  expressApp.get("/api/v1/all-polls", function (req, res) {
    dbConnection.query("SELECT * from Poll", function (error, results, fields) {
      if (error) throw error;
      console.log("The results are: ", results);
      console.log("The fields are: ", fields);
    });
    res.send(
      "|   1    | Meine tolle Poll | hier kann jeder tolle answers auswählen | auswalh,hier,third | chibbi | 134843957 |"
    );
  });

  expressApp.get("/api/v1/poll/:desiredPollID", function (req, res) {
    dbConnection.query(
      "SELECT * from Poll where pollId = " + desiredPollID,
      function (error, results, fields) {
        if (error) throw error;
        console.log("The results are: ", results);
        console.log("The fields are: ", fields);
      }
    );
    res.send(
      "|   1    | Meine tolle Poll | hier kann jeder tolle answers auswählen | auswalh,hier,third | chibbi | 134843957 |"
    );
  });

  expressApp.get("/api/v1/poll+answers/:desiredPollID", function (req, res) {
    dbConnection.query(
      "SELECT * from Poll where pollId = " + desiredPollID,
      function (error, results, fields) {
        if (error) throw error;
        console.log("The results are: ", results);
        console.log("The fields are: ", fields);
      }
    );
    dbConnection.query(
      "SELECT COUNT(answer) FROM anwsers where pollId = " +
        desiredPollID +
        " GROUP BY answer",
      function (error, results, fields) {
        if (error) throw error;
        console.log("The results are: ", results);
        console.log("The fields are: ", fields);
      }
    );
    res.send(
      "|   1    | Meine tolle Poll | hier kann jeder tolle answers auswählen | auswalh,hier,third | chibbi | 1623626089318 |" +
        " ANSWERS-IN-JSON-FORMAT"
    );
  });

  expressApp.get("/api/v1/answer/:desiredAnswerID", function (req, res) {
    dbConnection.query(
      "SELECT * from Poll where pollId = " + desiredAnswerID,
      function (error, results, fields) {
        if (error) throw error;
        console.log("The results are: ", results);
        console.log("The fields are: ", fields);
      }
    );
    res.send("|    21    |   1    | thomas  | third  | 1623626089318 |");
  });

  expressApp.post("/api/v1/createpoll", (req, res) => {
    let body = req.body;
    console.log("RAW DATA:\n", body, "\n");
    console.log("PARSED DATA:\n", JSON.parse(body), "\n\n");
    // Check so that nobody sends some evil JSON
    if (!isJSON(body)) {
      res.status(422).json({ message: "Please send a proper JSON" });
    }
    let json = JSON.parse(body);

    res.status(200).json({ message: "du bist toll" });
  });

  expressApp.post("/api/v1/create-answer", (req, res) => {
    let body = req.body;
    // Check so that nobody sends some evil JSON
    // in a function pls
    if (!isJSON(body)) {
      res.status(422).json({ message: "Please send a proper JSON" });
    }
    let json = dbConnection.query(
      "INSERT INTO Answer (pollId,creator,answer,creationDate) VALUES (" +
        desiredPollID +
        "," +
        creator +
        "," +
        selectedAnswer +
        "," +
        new Date().getTime() +
        "," +
        " )",
      function (error, results, fields) {
        if (error) throw error;
        console.log("The results are: ", results);
        console.log("The fields are: ", fields);
      }
    );
    res.status(200).json({ message: "du bist toll" });
  });
};
