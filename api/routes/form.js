const express = require("express");
const Form = require("../modules/formModule");

const router = express.Router();

router.get("/", async (req, res) => {
  const forms = await Form.find({});

  res.status(200).json(forms);
});

router.post("/", async (req, res) => {
  const {
    name,
    email,
    company,
    needsWebsite,
    needsLandingPage,
    needsEcommerceStore,
    other,
    budget,
    time,
    details,
  } = req.body;

  try {
    const form = await Form.create({
      name,
      email,
      company,
      needsWebsite,
      needsLandingPage,
      needsEcommerceStore,
      other,
      budget,
      time,
      details,
    });
    res.status(200).json(form);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
