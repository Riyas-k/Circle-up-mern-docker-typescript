import { Application } from "express";
import authRouter from "./user/userRoutes";
import adminAuthRouter from "./admin/adminRoutes";
import postRouter from "./user/post";

const routes = (app: Application) => {
  app.use("/", authRouter());
  app.use("/admin", adminAuthRouter());
  app.use('/',postRouter())
};

export default routes;
