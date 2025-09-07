import { Request, Response } from "express";
import { handleCreateUser } from "../services/user.service";
const getHomePage = (req: Request, res: Response) => {
  return res.render("home");
};

const getUserPage = (req: Request, res: Response) => {
  return res.render("create-user");
};

const postUser = (req: Request, res: Response) => {
  handleCreateUser(req.body);
  return res.redirect("/");
};

export { getHomePage, getUserPage, postUser };
