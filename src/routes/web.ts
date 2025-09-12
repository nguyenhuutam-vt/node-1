import express, { Express } from "express";
import {
  getEditUserPage,
  getHomePage,
  getUserPage,
  getViewUserPage,
  postDeleteUser,
  postUpdateUser,
  postUser,
} from "../controllers/user.controller";

const router = express.Router();

const webRoutes = (app: Express) => {
  router.get("/", getHomePage);

  router.get("/create-user", getUserPage);
  router.post("/create-user", postUser);
  router.post("/delete-user/:id", postDeleteUser);
  router.get("/view-user/:id", getViewUserPage);
  //update
  router.get("/edit-user/:id", getEditUserPage);
  router.post("/edit-user/:id", postUpdateUser);
  app.use("/", router);
};

export default webRoutes;
