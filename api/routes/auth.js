const User = require("../models/User");
const router = require("express").Router();
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
  try {
    // check if the user is exists
    const emailUser = await User.findOne({ email: req.body.email });
    const usernameUser = await User.findOne({ username: req.body.username });

    if (emailUser) {
      res.status(401).json({ type: "email", message: "this email is exists" });
      return;
    }

    if (usernameUser) {
      res
        .status(401)
        .json({ type: "username", message: "this username is exists" });
      return;
    }
    // create new user

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: CryptoJS.RC4.encrypt(
        req.body.password,
        process.env.PASS_SEC
      ).toString(),
    });

    try {
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
    } catch (error) {
      res.status(500).json(error);
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// Login for user

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.status(401).json({ type: "email", message: "user is not found!" });
      return;
    }
    const originalPassword = CryptoJS.RC4.decrypt(
      user.password,
      process.env.PASS_SEC
    ).toString(CryptoJS.enc.Utf8);

    if (originalPassword !== req.body.password) {
      res
        .status(401)
        .json({ type: "password", message: "incorrect password!" });
      return;
    }
    const { password, ...others } = user._doc;

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
      { expiresIn: "3d" }
    );
    res.status(200).json({ ...others, accessToken });
  } catch (error) {
    res.status(500).json(error);
    return;
  }
});

// Login for admin

router.post("/login/admin", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user || !user.isAdmin) {
      res.status(401).json({ type: "email", message: "user is not found!" });
      return;
    }
    const originalPassword = CryptoJS.RC4.decrypt(
      user.password,
      process.env.PASS_SEC
    ).toString(CryptoJS.enc.Utf8);

    if (originalPassword !== req.body.password) {
      res
        .status(401)
        .json({ type: "password", message: "incorrect password!" });
      return;
    }
    const { password, ...others } = user._doc;

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
      { expiresIn: "3d" }
    );
    res.status(200).json({ ...others, accessToken });
  } catch (error) {
    res.status(500).json(error);
    return;
  }
});

module.exports = router;
