const express = require("express");
const { getRoute, postRoute, putRoute, deleteRoute } = require("../controllers/root.controllers");
const userRouter = express.Router();

userRouter.get("/", getRoute);
userRouter.get("/:id", getRoute);
userRouter.post("/", postRoute);
userRouter.put("/", putRoute);
userRouter.delete("/", deleteRoute);

module.exports = userRouter;
