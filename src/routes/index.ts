import express from "express";
import multer from "multer";
import controller from "../controllers";

const randomFileName =
  Math.random().toString(36).substring(2, 15) +
  Math.random().toString(36).substring(2, 15) +
  ".png";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./images");
  },
  filename: (req, file, cb) => {
    cb(null, randomFileName);
  },
});

const router = express.Router();
const upload = multer({ storage: storage }).single("image");

router.post("/", upload, controller.saveImage);

router.use("/images", express.static("./images")); // https://stackoverflow.com/a/44561891

export { upload };
export default router;
