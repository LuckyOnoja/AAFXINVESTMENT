const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  address: { type: String, required: true },
  state: { type: String, required: true },
  country: { type: String, required: true },
  zipcode: { type: Number, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  date: { type: String, required: true },
  balance: { type: Number, required: true },
  bonusBalance: { type: Number, required: true },
  referralCode: { type: String, unique: true },
  referralCount: { type: Number, default: 0 },
  codeReferredBy: { type: String },
});

const UserModel = mongoose.model("Users", userSchema);

module.exports = UserModel;
