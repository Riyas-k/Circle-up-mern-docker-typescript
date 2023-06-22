import express, { Router } from "express";
import authController from "../../../../adapters/controller/user/userAuthController";
import { userDbRepository } from "../../../../application/repositories/user/userRepositoryInf";
import { userRepositoryMongoDB } from "../../../database/mongodb/repositories/user/userAuthRepositoryImp";
import { AuthServiceInterface } from "../../../../application/services/user/userAuthServiceInt";
import { authServices } from "../../../services/user/userAuthServiceImp";

const authRouter = (): Router => {
  const router = express.Router();
  const controllers = authController(
    AuthServiceInterface,
    authServices,
    userDbRepository,
    userRepositoryMongoDB
  );

  router.post("/sign-up", controllers.registerUser);

  router.post("/sign-in", controllers.loginUser);

  router.post("/google", controllers.googleUser);

  router.get('/verify-google-user/:email',controllers.verifyGoogleUser)

  return router;
};

export default authRouter;
