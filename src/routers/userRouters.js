import express from "express";
import userController from "../controllers/api/userController";
let router = express.Router();
let userRouters = (app) => {
  router.get("/users", userController.getListUsers);
  return app.use("/api/v1/", router);
};
module.exports = userRouters;
