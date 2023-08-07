import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { resolve } from "path";
import { chatDbInterfaceType } from "../../../application/repositories/user/chatDbRepostitoryInterface";
import { chatRepositoryType } from "../../../framework/database/mongodb/repositories/user/chatRepository";
import {
  chatCreate,
  getAllChats,
  getChat,
} from "../../../application/useCase/user/chat/chat";

const chatController = (
  chatDbInterface: chatDbInterfaceType,
  chatDbImp: chatRepositoryType
) => {
  const dbRepositoryChat = chatDbInterface(chatDbImp());

  const createChat = asyncHandler(async (req: Request, res: Response) => {
    try {
      const { senderId, receiverId } = req.body;
      const newChat = await chatCreate(senderId, receiverId, dbRepositoryChat);
      console.log(newChat, "Chat");
      res.json({ status: "success", newChat });
    } catch (error) {
      console.log(error);
    }
  });
  const userChats = asyncHandler(async (req: Request, res: Response) => {
    try {
      const { userId } = req.params;
      console.log(req.params);
      const chats = await getAllChats(userId, dbRepositoryChat);
      res.json({
        status: "success",
        chats,
      });
    } catch (error) {
      console.log(error);
    }
  });
  const findChat = asyncHandler(async (req: Request, res: Response) => {
    try {
      const { firstId, secondId } = req.params;
      const chat = await getChat(firstId, secondId, dbRepositoryChat);
      res.json({ status: "success", chat });
    } catch (error) {
      console.log(error);
    }
  });
  return {
    createChat,
    findChat,
    userChats,
  };
};

export default chatController;
