import { Request, Response } from "express";
import { getAllProduct, getAllUser } from "services/user.service";

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
  const products = await getAllProduct();

  return res.render("admin/product/show", { products });
};

export {
  getDashBoardPage,
  getAdminUserPage,
  getAdminOrderPage,
  getAdminProductPage,
};
