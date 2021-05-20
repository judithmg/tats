import { Request, Response } from "express";

const { Tattoo } = require("../models");

const postNewTattoo = async (req: Request, res: Response) => {
  const { tattoo, user } = req.body;
  const newTattoo = new Tattoo(tattoo);
  try {
    newTattoo.save();
    res.status(200);
    res.json(newTattoo);
  } catch (error) {
    res.status(500);
    res.send("There was an error uploading your tattoo");
  }
};

const getAllTattoos = async (req: Request, res: Response) => {
  Tattoo.find({}, (err, allTattoos) => {
    try {
      res.status(404);
      res.send("There was an error and petition could not be completed");
    } catch (err) {
      res.json(allTattoos);
    }
  });
};

const deleteOneTattoo = async (req: Request, res: Response) => {
  const { tattooId } = req.body;
  try {
    const deletedTattoo = await Tattoo.findByIdAndDelete(tattooId);
    res.json(deletedTattoo);
    res.send(200);
  } catch (error) {
    res.send("Your tattoo could not be deleted");
    res.status(500);
  }
};

module.exports = { postNewTattoo, getAllTattoos, deleteOneTattoo };
