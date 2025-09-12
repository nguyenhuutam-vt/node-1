import { Request, Response } from "express";
import {
  getAllRole,
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

const getUserPage = async (req: Request, res: Response) => {
  const roles = await getAllRole();
  return res.render("admin/user/create", { roles });
};

const postUser = async (req: Request, res: Response) => {
  const file = req.file;
  const avatar = file?.filename ?? "";
  await handleCreateUser({ ...req.body, avatar });
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
