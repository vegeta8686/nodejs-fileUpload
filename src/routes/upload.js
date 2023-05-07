const express = require("express");
const router = express.Router();
const multer = require("multer");

// configuring multer disk storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

// checking image extensions
const filterFiles = (req, file, cb) => {
  const fileTypes = /jpg|png|jpeg|gif/;
  const extName = fileTypes.test(file.originalname.toLowerCase());

  if (extName) {
    return cb(null, true);
  }
  return cb("upload only images");
};

const upload = multer({ storage: storage, fileFilter: filterFiles });

// post req for uploading the files
router.post("/upload", upload.array("files"), (req, res) => {
  try {
    console.log(req.body);
    console.log(req.files);
    res.json({ message: "successfully uploaded" });
  } catch (err) {
    console.log('error');
    res.status(400).send({ status: 400, message: "Only images allowed" });
  }
});

// get request
router.get("/get", (req, res) => {
  res.status(200).send({ status: 200, message: "server data" });
});

// exporting these data to main index file
module.exports = router;
