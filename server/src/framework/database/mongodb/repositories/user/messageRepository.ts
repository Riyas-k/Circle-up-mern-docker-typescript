import { type } from "os";
import Message from "../../models/userModels/messageModel";

export const messageRepositoryImp = () => {
  const createMessage = async (
    chatId: string,
    senderId: string,
    message: string
  ) => {
    try {
      const newMessage = new Message({
        chatId,
        senderId,
        message,
      });
      return await newMessage.save();
    } catch (error) {
      console.log(error);
    }
  };
  const getMessage = async (chatId: string) => {
    try {
      return await Message.find({ chatId });
    } catch (error) {
      console.log(error);
    }
  };
  return {
    createMessage,
    getMessage,
  };
};

export type messageRepositoryType = typeof messageRepositoryImp;
