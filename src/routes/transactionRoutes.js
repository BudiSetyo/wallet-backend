const Router = require("express").Router();
const { authentication } = require("../middlewares/authentication");
const {
  topUp, transfer, history
} = require("../handlers/transactionHandlers");

// Topup
Router.patch("/topup", authentication, topUp);

// Transfer
Router.post("/transfer", authentication, transfer);

// Get transaction history
Router.get("/", authentication, history);

// Subscribe
Router.post("/subscribe", authentication);

module.exports = Router;