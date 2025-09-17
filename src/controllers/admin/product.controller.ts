import { Request, Response } from "express";
import {
  getProductById,
  handleCreateProduct,
  handleDeleteProduct,
  handleUpdateProduct,
} from "services/user.service";
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

  const file = req.file;
  const avatar = file?.filename ?? "";
  await handleCreateProduct({ ...req.body, avatar });
  return res.redirect("/admin/product");
};

const getViewProductPage = async (req: Request, res: Response) => {
  const productId = req.params.id;
  const product = await getProductById(Number(productId));
  return res.render("admin/product/detail", { product });
};

const getEditProductPage = async (req: Request, res: Response) => {
  const productId = req.params.id;
  const product = await getProductById(Number(productId));

  const factoryOptions = [
    { value: "APPLE", label: "Apple (MacBook)" },
    { value: "ASUS", label: "Asus" },
    { value: "LENOVO", label: "Lenovo" },
    { value: "DELL", label: "Dell" },
    { value: "HP", label: "HP" },
    { value: "ACER", label: "Acer" },
    { value: "MSI", label: "MSI" },
    { value: "LG", label: "LG" },
    { value: "SAMSUNG", label: "Samsung" },
  ];
  const targetOptions = [
    { value: "GAMING", label: "Gaming" },
    { value: "BUSINESS", label: "Business" },
    { value: "STUDENT", label: "Student" },
    { value: "DESIGN", label: "Design" },
    { value: "DAILYUSE", label: "Daily Use" },
  ];

  return res.render("admin/product/edit", {
    product,
    factoryOptions,
    targetOptions,
  });
};

const postUpdateProduct = async (req: Request, res: Response) => {
  const userId = req.params.id;
  const file = req.file;
  const image = file?.filename ?? null;
  await handleUpdateProduct(userId, { ...req.body, image });
  return res.redirect("/admin/product");
};

const postDeleteProduct = async (req: Request, res: Response) => {
  const productId = req.params.id;
  await handleDeleteProduct(productId);
  return res.redirect("/admin/product");
};

export {
  postProduct,
  getAdminCreateProductPage,
  getViewProductPage,
  getEditProductPage,
  postUpdateProduct,
  postDeleteProduct,
};
