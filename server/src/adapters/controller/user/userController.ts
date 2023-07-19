import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { UserDbInterface } from "../../../application/repositories/user/userRepositoryInf";
import { userRepositoryMongoDB } from "../../../framework/database/mongodb/repositories/user/userAuthRepositoryImp";
import {
  blockCurrUser,
  getUserFetch,
  getAllUsers,
  getUserData,
  unBlockCurrUser,
} from "../../../application/useCase/user/auth/userDetails";

const userControllers = (
  userDbRepository: UserDbInterface,
  userDbRepositoryService: userRepositoryMongoDB
) => {
  const dbRepositoryUser = userDbRepository(userDbRepositoryService());
  const getUsers = asyncHandler(async (req: Request, res: Response) => {
    const data = await getAllUsers(dbRepositoryUser);
    res.json({ data });
  });
  const blockUser = asyncHandler(async (req: Request, res: Response) => {
    const { userId } = req.params;
    const status = await blockCurrUser(userId, dbRepositoryUser);
    console.log(status, "===");
    res.json({ status });
  });
  const unBlockUser = asyncHandler(async (req: Request, res: Response) => {
    const { userId } = req.params;
    const status = await unBlockCurrUser(userId, dbRepositoryUser);
    // const data = await getUserData(userId,dbRepositoryUser)
    // console.log(data);
    res.json({ status });
  });


  return {
    getUsers,
    blockUser,
    unBlockUser,
  };
};
export default userControllers;
