
const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

// Storage config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // folder where files will be stored
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

// Optional: File type check
const fileFilter = function (req, file, cb) {
  const allowedTypes = /pdf|doc|docx/;
  const ext = allowedTypes.test(file.originalname.toLowerCase());
  if (ext) {
    cb(null, true);
  } else {
    cb("Only PDF/DOC files allowed!");
  }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

router.post("/upload", upload.single("resume"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  res.status(200).json({ message: "Resume uploaded successfully!" });
});

module.exports = router;
