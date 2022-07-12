// User/Auth Routes
// host + /api/auth

const { Router, json } = require("express");
const { createUser, loginUser, renewToken } = require("../controllers/auth");
const { validateSchemas } = require("../middlewares/validateSchemas");
const { checkEmail } = require("../middlewares/checkEmail");
const { userLoginSchema, userRegisterSchema } = require("../schemas/auth");
const router = Router();

router.post("/login", validateSchemas(userLoginSchema), loginUser);

router.post(
  "/register",
  validateSchemas(userRegisterSchema),
  checkEmail,
  createUser
);

router.get("/renew", renewToken);

module.exports = router;
