import { Request, Response } from "express";
import { getAllUser, handleCreateUser } from "../services/user.service";
import { get } from "http";
const getHomePage = async (req: Request, res: Response) => {
  const users = await getAllUser();
  return res.render("home", { users: users });
};

const getUserPage = (req: Request, res: Response) => {
  return res.render("create-user");
};

const postUser = (req: Request, res: Response) => {
  handleCreateUser(req.body);
  return res.redirect("/");
};

export { getHomePage, getUserPage, postUser };
