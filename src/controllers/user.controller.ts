import { Request, Response } from "express";
import {
  getAllUser,
  getUserById,
  handleCreateUser,
  handleDeleteUser,
  handleUpdateUser,
} from "services/user.service";
const getHomePage = async (req: Request, res: Response) => {
  const users = await getAllUser();
  return res.render("home", { users: users });
};

const getUserPage = (req: Request, res: Response) => {
  return res.render("admin/user/create");
};

const postUser = async (req: Request, res: Response) => {
  await handleCreateUser(req.body);
  return res.redirect("/admin/user");
};

const postDeleteUser = async (req: Request, res: Response) => {
  const userId = req.params.id;
  await handleDeleteUser(userId);
  return res.redirect("/");
};

const getViewUserPage = async (req: Request, res: Response) => {
  const userId = req.params.id;
  const user = await getUserById(Number(userId));
  return res.render("view-user", { user });
};

const getEditUserPage = async (req: Request, res: Response) => {
  const userId = req.params.id;
  const user = await getUserById(Number(userId));
  return res.render("edit-user", { user });
};

const postUpdateUser = async (req: Request, res: Response) => {
  const userId = req.params.id;
  await handleUpdateUser(userId, req.body);
  return res.redirect("/");
};

export {
  getHomePage,
  getUserPage,
  postUser,
  postUpdateUser,
  postDeleteUser,
  getViewUserPage,
  getEditUserPage,
};
