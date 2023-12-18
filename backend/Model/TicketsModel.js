const mongoose = require("mongoose");

const ticketsSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    default: 1,
  },
  price: {
    type: Number,
    required: true,
    default: 20,
  },
});

const Tickets = mongoose.model("tickets", ticketsSchema);

module.exports = Tickets;