const express = require("express");
const router = express.Router();
const { getUsers, createUser, createUserForm } = require("../controllers/users.controllers");

// users route
router.get("/users", getUsers);
router.post("/users", createUser);

// client side routing
router.get("/users/add", createUserForm);

module.exports = router;
