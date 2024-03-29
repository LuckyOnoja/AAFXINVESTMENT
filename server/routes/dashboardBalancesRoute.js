const express = require("express");
const router = express.Router();
const dashboardBalancesModel = require("../models/dashboardBalancesModel");

router.post("/dashboardBalance", async (req, res) => {
  try {
    const { UserId } = req.body;
    const updatedBalance = await dashboardBalancesModel.findOneAndUpdate(
      { UserId: UserId },
      req.body,
      { new: true, upsert: true }
    );
    res.status(200).json({ balances: updatedBalance });
  } catch (error) {
    console.error("Could not update balance:", error);
    res.status(500).send("Internal Server Error");
  }
});
router.get("/dashboardBalance", async (req, res) => {
  try {
    const { userId } = req.query;
    const userBalances = await dashboardBalancesModel.find({ UserId: userId });
    res.status(200).json({ balances: userBalances });
  } catch (error) {
    console.error("Could not retrieve balances:", error);
    res.status(500).send("Internal Server Error");
  }
});
router.get("/dashboardAdminBalance", async (req, res) => {
  try {
    const userBalances = await dashboardBalancesModel.find();
    res.status(200).json({ balances: userBalances });
  } catch (error) {
    console.error("Could not retrieve balances:", error);
    res.status(500).send("Internal Server Error");
  }
});
module.exports = router;
