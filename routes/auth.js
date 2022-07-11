// User/Auth Routes
// host + /api/auth

const { Router, json } = require("express");
const router = Router();

router.post("/new", (req, res) => {
  res.json({ hello: "why are you here?" });
});

module.exports = router;
