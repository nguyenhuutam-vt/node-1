import { Request, Response } from "express";
import { ProductSchema, TProductSchema } from "src/validation/product.schema";
// import { handleCreateProduct } from "services/user.service";

const getAdminCreateProductPage = async (req: Request, res: Response) => {
  const errors: string[] = [];
  const oldData = {
    name: "",
    price: "",
    detailDesc: "",
    shortDesc: "",
    quantity: "",
    factory: "",
    target: "",
  };
  return res.render("admin/product/create.ejs", { errors, oldData });
};

const postProduct = async (req: Request, res: Response) => {
  const { name, price, detailDesc, shortDesc, quantity, factory, target } =
    req.body as TProductSchema;

  const validate = ProductSchema.safeParse(req.body);
  if (!validate.success) {
    const errorMessages = validate.error.errors.map((err) => err.message);
    const oldData = {
      name: name || "",
      price: price || "",
      detailDesc: detailDesc || "",
      shortDesc: shortDesc || "",
      quantity: quantity || "",
      factory: factory || "",
      target: target || "",
    };
    return res.status(400).render("admin/product/create.ejs", {
      errors: errorMessages,
      oldData,
    });
  }

  //   await handleCreateProduct({ ...req.body, image });
  return res.redirect("/admin/product");
};

export { postProduct, getAdminCreateProductPage };
