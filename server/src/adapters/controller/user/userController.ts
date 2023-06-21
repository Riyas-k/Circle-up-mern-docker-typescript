import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { UserDbInterface } from "../../../application/repositories/user/userRepositoryInf";
import { userRepositoryMongoDB } from "../../../framework/database/mongodb/repositories/user/userAuthRepositoryImp";
import {
  blockCurrUser,
  getAllUsers,
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
    res.json({ status });
  });
  const unBlockUser = asyncHandler(async (req: Request, res: Response) => {
    const { userId } = req.params;
    const status = await unBlockCurrUser(userId, dbRepositoryUser);
    res.json({ status });
  });
  return {
    getUsers,
    blockUser,
    unBlockUser,
  };
};
export default userControllers;
