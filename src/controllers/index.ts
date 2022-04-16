import { Request, Response } from "express";
import multer from "multer";
import { upload } from "../routes";

const saveImage = (req: Request, res: Response) => {
  upload(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      res.send("Multer Error: " + err);
    } else if (err) res.send("Unknown Error: " + err);
  });
  res.status(200).json(req.file);
};

export default { saveImage };
