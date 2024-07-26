const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FormSchema = new Schema({
  name: { type: "String", require: true },
  email: { type: "String", require: true },
  company: { type: "String", require: true },
  needsWebsite: { type: "Boolean" },
  needsLandingPage: { type: "Boolean" },
  needsEcommerceStore: { type: "Boolean" },
  other: { type: "String" },
  budget: { type: "String", require: true },
  time: { type: "String", require: true },
  details: { type: "String" },
});

module.exports = mongoose.model("Form", FormSchema);
