const express = require("express");
const router = express.Router();
const UserModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/signup", async (req, res) => {
  try {
    const { ref } = req.query;
    const {
      email,
      firstName,
      lastName,
      address,
      state,
      country,
      zipcode,
      username,
      password,
      date,
      balance,
      bonusBalance,
    } = req.body;
    const referralCode = generateReferralCode();

    const hashedPassword = await bcrypt.hash(password, 10);

    if (ref !== "") {
      const newUser = new UserModel({
        email,
        firstName,
        lastName,
        address,
        state,
        country,
        zipcode,
        username,
        password: hashedPassword,
        date,
        balance,
        bonusBalance,
        referralCode,
        codeReferredBy: ref,
      });
      const savedUser = await newUser.save();
      res.status(201).json({ user: savedUser });
    } else {
      const newUser = new UserModel({
        email,
        firstName,
        lastName,
        address,
        state,
        country,
        zipcode,
        username,
        password: hashedPassword,
        date,
        balance,
        bonusBalance,
        referralCode,
      });
      const savedUser = await newUser.save();
      res.status(201).json({ user: savedUser });
    }
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).send("Internal Server Error");
  }
});

function generateReferralCode() {
  const characters =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let referralCode = "";
  for (let i = 0; i < 10; i++) {
    referralCode += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return referralCode;
}

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).send("User not found");
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).send("Invalid password");
    }
    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, "your-secret-key", {
      expiresIn: "24h", // Token expires in 24hours
    });
    res.json({ token, user });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).send("Internal Server Error");
  }
});
router.get("/Users", async (req, res) => {
  try {
    // Fetch user transactions from the database
    const users = await UserModel.find();

    res.status(200).json({ users: users });
  } catch (error) {
    console.error("Error fetching transactions:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Route to fetch user data by ID
router.get("/singleUser", async (req, res) => {
  const { _id } = req.query;
  try {
    const user = await UserModel.findById(_id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json({ user });
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Route to update user data by ID
router.put("/singleUserPut", async (req, res) => {
  const { _id } = req.query;
  try {
    const user = await UserModel.findByIdAndUpdate(
      _id,
      { $set: req.body }, // Assuming req.body contains the updated fields
      { new: true }
    );
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json({ user });
  } catch (error) {
    console.error("Error updating user data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/referralLink", async (req, res) => {
  try {
    const { _id } = req.query;

    // Fetch user from the database by _id
    const user = await UserModel.findById(_id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Generate referral link using user's referral code
    const referralLink = `${process.env.CLIENT_NAME}/register?ref=${user.referralCode}`;

    res.json({ referralLink, count: user.referralCount });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/referralData", async (req, res) => {
  try {
    const { _id } = req.query;

    // Fetch user from the database by _id
    const user = await UserModel.findById(_id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Generate referral link using user's referral code
    const usersCode = user.referralCode;

    const referralLink = `http://localhost:3000/register?ref=${user.referralCode}`;

    const referredUsers = await UserModel.find({ codeReferredBy: usersCode });

    res.json({ referralLink, referredUsers });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/trackReferral", async (req, res) => {
  try {
    const { referralCode } = req.body;
    const referringUser = await UserModel.findOne({ referralCode });
    if (!referringUser) {
      return;
      res.status(404).json({ message: "Referring user not found" });
    }
    referringUser.referralCount++;
    await referringUser.save();
    res.json({ message: "Referral tracked Succesfully " });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
