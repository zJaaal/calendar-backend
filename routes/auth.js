// User/Auth Routes
// host + /api/auth

const { Router, json } = require("express");
const { createUser, loginUser, renewToken } = require("../controllers/auth");
const router = Router();

router.post("/login", loginUser);
router.post("/register", createUser);
router.get("/renew", renewToken);

module.exports = router;
