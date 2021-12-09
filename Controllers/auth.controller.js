var mysql = require("mysql");

var sqlConnection = mysql.createConnection({
  host: "34.123.142.54",
  user: "user",
  password: "user",
  database: "fitness_app",
});

sqlConnection.connect();

const login = (req, res) => {
  console.log(req.body);

  const email = req.body.email;
  const pass = req.body.password;

  const query = "SELECT * FROM fitness_app.users WHERE name=? AND password=?";
  const values = [email, pass];

  sqlConnection.query(query, values, (error, results, field) => {
    if (error) {
      return res.status(401).json({
        message: "Inavlid Email or Password",
      });
    }

    if (results.length < 1) {
      return res.status(401).json({
        message: "Inavlid Email or Password",
      });
    }

    const accountType = results[0].accounttype;

    if (results.length >= 1) {
      return res.status(200).json({
        User: accountType,
      });
    }
  });
};

const signup = (req, res) => {
  console.log(req.query);

  const email = req.body.email;
  const pass = req.body.password;
  const accounttype = req.body.accounttype;

  const values = [email, accounttype, pass];

  const query =
    "INSERT INTO `fitness_app`.`users` (`name`, `accounttype`, `password`) VALUES (?, ?, ?)";

  sqlConnection.query(query, values, (error, results, field) => {
    if (error) {
      console.log(error);
      return res.status(404).json({
        message: "Inavlid Email or Password",
      });
    }
    console.log("No Error");
    return res.status(200).json({
      status: "success",
    });
  });
};

module.exports = {
  login,
  signup,
};
