const Donation = require("../models/donation");
const uploadToCloudinary = require("../services/cloudinary.js");

export const createDonation = async (req, res) => {
  try {
    const { donor, title, description, category, quantity } = req.body;
    let imageUrl = "";
    if (req.file && req.file.path) {
      const result = await uploadToCloudinary(req.file.path, "donations");
      imageUrl = result?.secure_url || "";
    }
    const donation = new Donation({
      donor,
      title,
      description,
      category,
      quantity,
      image: imageUrl,
    });
    await donation.save();
    res.status(201).json({ message: "Donation created", donation });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



