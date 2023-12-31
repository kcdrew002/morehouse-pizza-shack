const mongoose = require('mongoose')

const customerSchema = mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
    },
    {
      timestamps: true,
    }
  );


module.exports = mongoose.model("Customer", customerSchema);