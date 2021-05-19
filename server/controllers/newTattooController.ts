import { Request, Response } from "express";

const { Tattoos } = require("../models");

const postNewTattoo = async (req: Request, res: Response) => {
  const { tattoo, user } = req.body;
};
