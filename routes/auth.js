const router = require("express").Router();
const User = require("../Model/User");

router.post("/register", async (req, res) => {
  console.log("submitting");
  //Creatae new user
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });

  try {
    const savedUser = await user.save();
    console.log(savedUser);
    res.send({ user: user });
  } catch (err) {
    res.status(400).send(err);
  }
});

// For this to work you need a body parser (see index.js)

module.exports = router;
