// const express = require("express");
import express from "express";
import dotenv from "dotenv";
import initRouters from "./routers/web";
import initApiRouters from "./routers/api";
import userRouters from "./routers/userRouters";
import connectDB from "./config/connectDB";
dotenv.config();
const app = express();
initApiRouters(app);
initRouters(app);
userRouters(app);
const port = process.env.PORT || 8000;
connectDB();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
