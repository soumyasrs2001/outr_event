const mongoose = require("mongoose");

const eventSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
    },
    start_date: {
      type: String,
    },
    end_date: {
      type: String,
    },
    location: {
      type: String,
    },
    event_proof: {
      type: String,
    },
    event_proof2: {
      type: String,
    },
    other_proof: {
      type: String,
    },
    // ... additional properties
  },
  { timestamps: true }
);

module.exports = mongoose.model("Event", eventSchema);
