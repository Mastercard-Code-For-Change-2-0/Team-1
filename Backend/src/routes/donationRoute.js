const express = require("express");
import express from "express";

import multer from "../middlewares/multer.js";
import { createDonation } from "../controllers/donationController";

const router = express.Router();

// POST /api/donations - create donation (with image upload)
router.post("/", multer.single("image"), (req, res, next) => {
  createDonation(req, res, next);
});

export default router;
