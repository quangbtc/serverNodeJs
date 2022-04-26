import express from "express";
import homeController from "../controllers/api/homeController";
let router = express.Router();
let initApiRouters = (app) => {
  router.get("/", homeController.getHomePage);
  return app.use("/api/v1/", router);
};
module.exports = initApiRouters;
