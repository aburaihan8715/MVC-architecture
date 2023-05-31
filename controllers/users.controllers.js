let users = require("../models/users.model");
const path = require("node:path");

exports.getUsers = (req, res) => {
  res.send(users);
};

exports.createUser = (req, res) => {
  const name = req.body.name;
  const age = Number(req.body.age);
  const user = {
    name,
    age,
  };
  users.push(user);
  console.log(users);
  res.end();
};

// client side
exports.createUserForm = (req, res) => {
  res.sendFile(path.join(__dirname + "/../views/addUser.html"));
};
