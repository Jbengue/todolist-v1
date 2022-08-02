//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res) {

  var today = new Date();

  var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  var day = today.toLocaleDateString("en_GB", options);

  // var day = "";
  // var currentDay = today.getDay();
  //
  // switch (currentDay) {
  //   case 0:
  //     day = "sunday"
  //     break;
  //   case 1:
  //     day = "Monday"
  //     break;
  //   case 2:
  //     day = "Tuesday"
  //     break;
  //   case 3:
  //     day = "Wednesday"
  //     break;
  //   case 4:
  //     day = "Thursday"
  //     break;
  //   case 5:
  //     day = "Friday"
  //     break;
  //   case 0:
  //     day = "Sunday"
  //     break;
  //   default:
  //   console.log("Error : current day is equal to : " + currentDay);
  // }

  res.render("list", {
    kindOfDay: day
  });

});


app.listen(process.env.PORT || 3000, function() {
  console.log("Server is running on port 3000.");
});
