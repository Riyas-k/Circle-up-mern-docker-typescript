import { chatRepositoryType } from "../../../framework/database/mongodb/repositories/user/chatRepository";

export const chatDbInterface = (repository: ReturnType<chatRepositoryType>) => {
  const createChat = async (senderId: string, receiverId: string) => {
    try {
      return await repository.createChat(senderId, receiverId);
    } catch (error) {
      console.log(error);
    }
  };
  const getAllChat = async (userId: string) => {
    try {
      return await repository.getAllChat(userId);
    } catch (error) {
      console.log(error);
    }
  };
  const getChat = async (firstId: string, secondId: string) => {
    try {
      return await repository.getChat(firstId, secondId);
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

export type chatDbInterfaceType = typeof chatDbInterface;
