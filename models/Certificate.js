const mongoose = require("mongoose");

const certificateSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
    },
    event_id: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Event",
    },
    status: {
      type: String,
      enum: ["pending", "completed"],
    },
    team: [
      {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Certificate", certificateSchema);
