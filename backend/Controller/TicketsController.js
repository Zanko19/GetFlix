const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const User = require("../Model/user");
const Tickets = require("../Model/TicketsModels");

const buyTickets = async (req, res) => {
  try {
    //take user
    const userId = req.user._id;
    // create a new ticket for user
    const ticket = new Tickets({
      userId,
      quantity: req.body.quantity || 1,
    });
    //----------------------------------------------------------save mongodb
    await ticket.save();

    const Payments = mongoose.model("payments", {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
      },
      tickets: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "tickets",
          required: true,
        },
      ],
    });

    const payment = new Payments({
      userId,
      tickets: [ticket._id],
    });

    await payment.save();

    res.status(201).json({ message: "Tickets purchased successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  buyTickets,
};