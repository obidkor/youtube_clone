"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

_mongoose["default"].connect(process.env.PRODUCTION ? process.env.MONGO_URL : process.env.MONGO_URL1, {
  useNewUrlParser: true,
  useFindAndModify: false
});

var db = _mongoose["default"].connection;

var handleOpen = function handleOpen() {
  console.log("✅ connected to db");
};

var handleError = function handleError(error) {
  console.log("\u274C Error on DB connection : ".concat(error));
};

db.once("open", handleOpen);
db.on("error", handleError);