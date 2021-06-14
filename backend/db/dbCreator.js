module.exports.createDB = function (dbConnection) {
  dbConnection.query(
    "CREATE TABLE IF NOT EXISTS Poll (pollId int NOT NULL AUTO_INCREMENT UNIQUE,title varchar(255) NOT NULL,description varchar(4095),creator varchar(255), creationDate varchar(255))",
    function (error, results, fields) {
      if (error) throw error;
    }
  );
  dbConnection.query(
    "CREATE TABLE IF NOT EXISTS Answers (anwserId int NOT NULL AUTO_INCREMENT UNIQUE,pollId int NOT NULL,creator varchar(255),answer varchar(255), creationDate varchar(255))",
    function (error, results, fields) {
      if (error) throw error;
    }
  );
};
