import express, { Express } from "express";
import {
  getEditUserPage,
  getHomePage,
  getProductPage,
  getUserPage,
  getViewUserPage,
  postDeleteUser,
  postUpdateUser,
  postUser,
} from "../controllers/user.controller";
import {
  getAdminOrderPage,
  getAdminProductPage,
  getAdminUserPage,
  getDashBoardPage,
} from "controllers/admin/dashboard.controller";
import fileUploadMiddleware from "src/middleware/multer";
import {
  getAdminCreateProductPage,
  getEditProductPage,
  getViewProductPage,
  postDeleteProduct,
  postProduct,
  postUpdateProduct,
} from "controllers/admin/product.controller";

const router = express.Router();

const webRoutes = (app: Express) => {
  router.get("/", getHomePage);

  router.get("/create-user", getUserPage);
  router.post("/delete-user/:id", postDeleteUser);
  router.get("/view-user/:id", getViewUserPage);
  //update
  router.get("/edit-user/:id", getEditUserPage);
  router.post("/edit-user/:id", postUpdateUser);
  app.use("/", router);

  //admin
  router.get("/admin", getDashBoardPage);
  router.get("/admin/create-user", getUserPage);
  router.post("/admin/create-user", fileUploadMiddleware("avatar"), postUser);
  router.get("/admin/user", getAdminUserPage);
  router.get("/admin/order", getAdminOrderPage);
  router.get("/admin/product", getAdminProductPage);
  router.post("/admin/delete-user/:id", postDeleteUser);
  router.get("/admin/view-user/:id", getViewUserPage);
  router.get("/admin/edit-user/:id", getEditUserPage);
  router.post(
    "/admin/edit-user/:id",
    fileUploadMiddleware("avatar"),
    postUpdateUser
  );

  //product
  router.get("/admin/create/product", getAdminCreateProductPage);
  router.post(
    "/admin/create-product",
    fileUploadMiddleware("image", "images/product"),
    postProduct
  );
  router.get("/admin/view-product/:id", getViewProductPage);
  router.get("/admin/edit-product/:id", getEditProductPage);
  router.post(
    "/admin/edit-product/:id",
    fileUploadMiddleware("image", "images/product"),
    postUpdateProduct
  );

    router.post("/admin/delete-product/:id", postDeleteProduct);

  //client
  router.get("/product/:id", getProductPage);
};

export default webRoutes;
