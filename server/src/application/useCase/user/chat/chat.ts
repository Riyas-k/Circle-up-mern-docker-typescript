import { HttpStatus } from "../../../../types/httpstatuscodes";
import AppError from "../../../../utilities/appError";
import { chatDbInterfaceType } from "../../../repositories/user/chatDbRepostitoryInterface";

export const chatCreate = async (
  senderId: string,
  receiverId: string,
  repository: ReturnType<chatDbInterfaceType>
) => {
  try {
    const chat: any = await repository.createChat(senderId, receiverId);
    if (!chat) {
      throw new AppError("user not found", HttpStatus.UNAUTHORIZED);
    }
    return chat;
  } catch (error) {
    console.log(error);
  }
};
export const getAllChats = async (
  userId: string,
  repository: ReturnType<chatDbInterfaceType>
) => {
  try {
    const getChats: any = await repository.getAllChat(userId);
    if (!getChats) {
      throw new AppError("Posts Are not Available", HttpStatus.BAD_REQUEST);
    }
    return getChats;
  } catch (error) {
    console.log(error);
  }
};
export const getChat = async (
  firstId: string,
  secondId: string,
  repository: ReturnType<chatDbInterfaceType>
) => {
  try {
    const getChats: any = await repository.getChat(firstId, secondId);
    if (!getChats) {
      throw new AppError("Posts Are not Available", HttpStatus.BAD_REQUEST);
    }
    return getChats;
  } catch (error) {
    console.log(error);
  }
};
