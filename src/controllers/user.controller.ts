import { Request, Response } from "express";
import { getProducts } from "services/client/item.service";
import {
  getAllRole,
  getAllUser,
  getUserById,
  handleCreateUser,
  handleDeleteUser,
  handleUpdateUser,
} from "services/user.service";
const getHomePage = async (req: Request, res: Response) => {
  // const users = await getAllUser();
  const products = await getProducts();
  console.log(products);
  return res.render("clinet/home/show.ejs", { products });
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
  return res.redirect("/admin/user");
};

const getViewUserPage = async (req: Request, res: Response) => {
  const userId = req.params.id;
  const user = await getUserById(Number(userId));
  return res.render("admin/user/detail", { user });
};

const getEditUserPage = async (req: Request, res: Response) => {
  const userId = req.params.id;
  const user = await getUserById(Number(userId));
  const roles = await getAllRole();

  return res.render("admin/user/edit", { roles, user });
};

const postUpdateUser = async (req: Request, res: Response) => {
  const userId = req.params.id;
  const file = req.file;
  const avatar = file?.filename ?? null;
  await handleUpdateUser(userId, { ...req.body, avatar });
  return res.redirect("/admin/user");
};

const getProductPage = async (req: Request, res: Response) => {
  return res.render("clinet/product/detail.ejs");
};

export {
  getHomePage,
  getUserPage,
  postUser,
  postUpdateUser,
  postDeleteUser,
  getViewUserPage,
  getEditUserPage,
  getProductPage,
};
