import { Request, Response } from "express";
// import { handleCreateProduct } from "services/user.service";

const postProduct = async (req: Request, res: Response) => {
  const file = req.file;
  const image = file?.filename ?? "";
  //   await handleCreateProduct({ ...req.body, image });
  return res.redirect("/admin/product");
};

export { postProduct };
