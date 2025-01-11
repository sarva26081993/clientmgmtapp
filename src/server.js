const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());

const port = 3000;

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "clientmgmtapp",
});

db.connect((err) => {
  if (err) {
    console.error("connection is not established with the dB", err);
  } else {
    console.log("connected to the dB");
  }
});

//application endpoints begin from here

app.get("/getAllMeetings", (req, res) => {
  //list down all meetings
  const sql = "select * from meetings";
  db.query(sql, (err, result) => {
    if (err) {
      console.error("Error in retreiving all clients");
      res.status(500).json({ error: "An error occurred" });
    } else {
      res.status(200).json(result);
    }
  });
});

app.get("/getClient/:name", (req, res) => {
  //search client by name
  // for multiple params /getClient/:name/:password etc
  const name = req.params.name;
  const sql = "select * from client where name=?";
  db.query(sql, [name], (err, result) => {
    //for multiple filters keep comma separated eg. [name,password]
    if (err) {
      console.error(`Error in fetching client details for ${name}`);
      res.status(500).json({ error: "Unable to find details" });
    } else {
      res.status(200).json(result);
    }
  });
});

app.post("/registerClient", (req, res) => {
  //store client details submitted from register form
  const { name, useremail, address, userpassword } = req.body;
  const sql = "insert into client values (?,?,?,?)";
  db.query(sql, [name, useremail, address, userpassword], (err, result) => {
    if (err) {
      console.error(`Error in fetching client details for ${name}`);
      res.status(500).json({ error: "Unable to store details" });
    } else {
      res.status(200).json({ message: "Client details saved successfully" });
    }
  });
});

app.post("/scheduleMeeting", (req, res) => {
  // store meeting details submitted from schedule meeting form
  const { topic, attendeescount, stime, etime } = req.body;
  const sql = "insert into meetings values(?,?,?,?)";
  db.query(sql, [topic, attendeescount, stime, etime], (err, result) => {
    if (err) {
      console.error(`Error in storing meeting details`);
      res.status(500).json({ error: "Unable to store meeting details" });
    } else {
      res.status(200).json({ message: "Meeting details saved successfully" });
    }
  });
});

app.get("/checkClient/:name/:password", (req, res) => {
  const { name, userpassword } = req.body;
  const sql = "select * from client where name=? and userpassword=?";
  db.query(sql, [name, userpassword], (err, result) => {
    if (err) {
      console.error(`No such user found`);
      res.status(500).json({ error: "Unable to locate such user" });
    }
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
