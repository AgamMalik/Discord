const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/auth/authController");
const Joi = require("joi");
const validator = require("express-joi-validation").createValidator({});
const auth = require('../middleware/auth')

// before we let server to execute the logic in postRegister and postLogin....we want to validate the coming data....and for that we will be using JOI

// we will create a validate schema for every incoming request to register
const registerSchema = Joi.object({
  username: Joi.string().min(3).max(12).required(),
  password: Joi.string().min(6).max(12).required(),
  mail: Joi.string().email().required(),
});

const loginSchema = Joi.object({
  password: Joi.string().min(6).max(12).required(),
  mail: Joi.string().email().required(),
});


router.post("/register", validator.body(registerSchema), authControllers.controllers.postRegister);
router.post("/login", validator.body(loginSchema), authControllers.controllers.postLogin);

// test routes to verify if our middleware is working
router.get("/test", auth, (req, res) => {
  res.send("request passed");
})

module.exports = router;
