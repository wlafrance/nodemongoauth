const router = require("express").Router();
const User = require("../Model/User");

//VALIDATION
const Joi = require("@hapi/joi");

const schema = {
  name: Joi.string()
    .min(6)
    .required(),
  email: Joi.string()
    .min(5)
    .required()
    .email(),
  password: Joi.string()
    .min(6)
    .required()
};

router.post("/register", async (req, res) => {
  console.log("Validating User Input");
  const validation = Joi.validate(req.body, schema);
  res.send(validation.error.details[0].message);

  // //Creatae new user
  // const user = new User({
  //   name: req.body.name,
  //   email: req.body.email,
  //   password: req.body.password
  // });

  // try {
  //   const savedUser = await user.save();
  //   console.log(savedUser);
  //   res.send({ user: user });
  // } catch (err) {
  //   res.status(400).send(err);
  // }
});

// For this to work you need a body parser (see index.js)

module.exports = router;
