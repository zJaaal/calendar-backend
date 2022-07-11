// User/Auth Routes
// host + /api/auth

const { Router, json } = require("express");
const { createUser, loginUser, renewToken } = require("../controllers/auth");
const router = Router();

router.post("/", loginUser);
router.post("/new", createUser);
router.get("/renew", renewToken);

module.exports = router;
