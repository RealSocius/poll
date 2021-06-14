module.exports.query = function () {
  connection.query(
    "SELECT * from Poll where pollId = desiredPollID",
    function (error, results, fields) {
      if (error) throw error;
      console.log("The results are: ", results);
      console.log("The fields are: ", fields);
    }
  );
};
