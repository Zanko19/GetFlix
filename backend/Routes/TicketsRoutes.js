const express = require("express");
const router = express.Router();
const ticketsController = require("../Controller/TicketsController");
const authenticateUser = require("../Middleware/Auth");

router.post("/buy-tickets", authenticateUser, ticketsController.buyTickets);

module.exports = router;