import { AuthServicesReturn } from "../../../framework/services/user/userAuthServiceImp";

export const AuthServiceInterface = (service: AuthServicesReturn) => {
  const encryptPassword = async (password: string) => {
    try {
      return await service.encryptPassword(password);
    } catch (error) {
      console.log(error);
    }
  };
  const generateToken = async (userId: string) => {
    try {
      return service.generateToken(userId);
    } catch (error) {
      console.log(error);
    }
  };
  const comparePassword = async (password: string, bodyPassword: string) => {
    try {
      return await service.comparePassword(password, bodyPassword);
    } catch (error) {
      console.log(error);
    }
  };
  return {
    encryptPassword,
    generateToken,
    comparePassword,
  };
};

export type AuthServiceInterface = typeof AuthServiceInterface;
