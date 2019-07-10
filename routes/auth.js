const router = require("express").Router();

const User = require("../Model/User");

router.post("/register", async (req, res) => {
  try {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });

    const savedUser = await user.save();
    res.send(savedUser);
  } catch (error) {
    res.status(400).send(error);
  }
});

// For this to work you need a body parser (see index.js)

module.exports = router;
