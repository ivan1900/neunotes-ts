import { Request, Response } from 'express';

export const signup = async (req: Request, res: Response) => {
  console.log(req.body);
  res.status(200);
  res.json(req.body);
};

export const signin = async (req: Request, res: Response) => {
  res.status(200);
};
