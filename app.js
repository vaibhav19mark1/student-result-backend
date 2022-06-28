var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
var logger = require("morgan");
const cors = require("cors");

// todo: add service logger and cors. explore helmet

const {authMiddleware} = require("./routes/auth/middleware");
const config = require("./bin/config");
require("./routes/auth/middleware");
// var indexRouter = require("./routes/index");
// var adminRouter = require("./routes/admin");
var authRouter = require("./routes/auth/index");
var facultyRouter = require("./routes/faculty/index");
var studentRouter = require("./routes/student/index");
// var dashRouter = require("./routes/dashboard/index");

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(config.auth.secret));
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

// app.use("/users", usersRouter);
app.use("/auth", authRouter);
app.use("/faculty", facultyRouter);
app.use("/student", studentRouter);
// app.use("/dashboard", dashRouter);

app.use((req, res) => {
  return res.status(404).json({});
});

app.use((err, req, res, next) => {
  //   serviceLogger.fatal(err);
  res.status(500).json({
    message:
      "Please mail us at tech@convivialtechhub.com. Mistake is on our side!",
  });
});

module.exports = app;