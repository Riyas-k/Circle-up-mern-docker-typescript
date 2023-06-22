import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { AuthServices } from "../../../framework/services/user/userAuthServiceImp";
import { AuthServiceInterface } from "../../../application/services/user/userAuthServiceInt";
import { userRepositoryMongoDB } from "../../../framework/database/mongodb/repositories/user/userAuthRepositoryImp";
import {
  UserDbInterface,
  userDbRepository,
} from "../../../application/repositories/user/userRepositoryInf";
import {
  addUser,
  checkUser,
  userLogin,
  userRegister,
} from "../../../application/useCase/user/auth/userAuth";

const authController = (
  authServiceInterface: AuthServiceInterface,
  authService: AuthServices,
  UserDbInterface: UserDbInterface,
  userDbService: userRepositoryMongoDB
) => {
  const dbUserRepository = UserDbInterface(userDbService());
  const authServices = authServiceInterface(authService());
  const registerUser = asyncHandler(async (req: Request, res: Response) => {
    const { firstName, lastName, UserName, phone, email, password } = req.body;
    const user = {
      firstName,
      lastName,
      UserName,
      phone,
      email,
      password,
    };
    const token = await userRegister(user, dbUserRepository, authServices);
    console.log(token);
    if (token.status == true) {
      res.json({ status: true, message: "User registered", token });
    } else {
      res.json({ status: false });
    }
  });
  const loginUser = asyncHandler(async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const userDetails = { email, password };
    const user = await userLogin(userDetails, dbUserRepository, authServices);
    if (user.status) {
      const { userExist } = user;
      const { token } = user;
      if (userExist.isBlock) {
        res.json({ blocked: "Blocked by Admin" });
      } else {
        res.json({ status: true, userExist: userExist, token: token });
      }
    } else {
      res.json({ status: false });
    }
  });

  const googleUser = asyncHandler(async (req: Request, res: Response) => {
    const { email, displayName, photoURL } = req.body;
    console.log(req.body);
    const values = { email, displayName, photoURL };
    console.log(values);
    const userGoogle = await addUser(values, dbUserRepository, authServices);
    console.log(userGoogle);
    if (userGoogle.status == true) {
      res.json({ status: true, message: "User registered", userGoogle });
    } else {
      res.json({ status: false });
    }
  });

  const verifyGoogleUser = asyncHandler(async(req:Request,res:Response)=>{
    const {email} = req.params;
     const data = await checkUser(email,dbUserRepository,authServices)
      res.json ({data:data})
  })

  return {
    registerUser,
    loginUser,
    googleUser,verifyGoogleUser
  };
};

export default authController;
