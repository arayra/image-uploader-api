import { Request, Response } from "express";

const saveImage = (req: Request, res: Response) => {
  res.send("yahaha");
};

export default { saveImage };
