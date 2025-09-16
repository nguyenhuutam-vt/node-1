import { Request, Response } from "express";
import { getAllUser } from "services/user.service";

const getDashBoardPage = async (req: Request, res: Response) => {
  return res.render("admin/dashboard/dashboard");
};

const getAdminUserPage = async (req: Request, res: Response) => {
  const users = await getAllUser();

  return res.render("admin/user/show", { users: users });
};

const getAdminOrderPage = async (req: Request, res: Response) => {
  return res.render("admin/order/show");
};

const getAdminProductPage = async (req: Request, res: Response) => {
  return res.render("admin/product/show");
};

const getAdminCreateProductPage = async (req: Request, res: Response) => {
  return res.render("admin/product/create.ejs");
};

export {
  getDashBoardPage,
  getAdminUserPage,
  getAdminOrderPage,
  getAdminProductPage,
  getAdminCreateProductPage,
};
