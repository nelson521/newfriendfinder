var path = require("path");

module.exports = function(app) {


  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });
  app.get("/hello", function(req, res) {
    res.send("hello");
  });

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });

};
