import { type } from "os";
import Chat from "../../models/userModels/chatModel";

export const chatRepositoryImp = () => {
  const createChat = async (senderId: string, receiverId: string) => {
    console.log("repo called", senderId, receiverId);

    try {
      const existingChat = await Chat.findOne({
        members: { $all: [senderId, receiverId] },
      });
      if (existingChat) {
        return existingChat;
      } else {
        const newChat = new Chat({
          members: [senderId, receiverId],
        });
        const savedChat = await newChat.save();
        return savedChat;
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  const getAllChat = async (userId: string) => {
    try {
      return await Chat.find({
        members: { $in: [userId] },
      });
    } catch (error) {
      console.log(error);
    }
  };
  const getChat = async (firsId: string, secondId: string) => {
    try {
      return await Chat.find({
        members: { $all: [firsId, secondId] },
      });
    } catch (error) {
      console.log(error);
    }
  };
  return {
    createChat,
    getAllChat,
    getChat,
  };
};
export type chatRepositoryType = typeof chatRepositoryImp;
