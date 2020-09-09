const mongoose = require("mongoose");

const cateSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      lowercase: true,
    },
    createdAt: {
      type: Date,
      required: false,
    },
    updatedAt: {
      type: Date,
      required: false,
    },
  },
  { timestamps: true } //to include createdAt and updatedAt
);

module.exports = mongoose.model("Category", cateSchema);
