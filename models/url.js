const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
  shortid: {
    type: String,
    required: true,
  },
  redirect: {
    type: String,
    required: true,
  },
  visitHistory: [{ timestamp: { type: Number } }],
} , 
{timestamps:true} 
);


const url  = mongoose.model("Url", urlSchema);

module.exports = url; // Export the model to use it in other files