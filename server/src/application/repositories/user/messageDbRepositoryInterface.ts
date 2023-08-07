import { messageRepositoryType } from "../../../framework/database/mongodb/repositories/user/messageRepository";

export const messageDbInterface = (
  repository: ReturnType<messageRepositoryType>
) => {
  const createMessage = async (
    chatId: string,
    senderId: string,
    message: string
  ) => {
    try {
      return await repository.createMessage(chatId, senderId, message);
    } catch (error) {
      console.log(error);
    }
  };
  const getMessage = async (chatId: string) => {
    try {
      return await repository.getMessage(chatId);
    } catch (error) {
      console.log(error);
    }
  };
  return {
    createMessage,
    getMessage,
  };
};

export type messageDbInterfaceType = typeof messageDbInterface;
