import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import configKeys from "../../../config/config";

export const authServices = () => {
  const encryptPassword = async (password: string) => {
    try {
      const salt = await bcrypt.genSalt(10);
      password = await bcrypt.hash(password, salt);
      return password;
    } catch (error) {
      console.log(error);
    }
  };

  const generateToken = async (userId: string) => {
    try {
      if (configKeys.JWT_SECRET) {
        const token = jwt.sign({ userId }, configKeys.JWT_SECRET, {
          expiresIn: "30d",
        });
        return token;
      } else {
        throw new Error("JWT TOKEN is not defined");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const comparePassword = async (password: string, bodyPassword: string) => {
    try {
      const passwordMatch = await bcrypt.compare(password, bodyPassword);
      return passwordMatch;
    } catch (error) {
      console.log(error);
    }
  };
  const verifyToken = (token: string) => {
    try {
      if (configKeys.JWT_SECRET) {
        const isVerify = jwt.verify(token, configKeys.JWT_SECRET);
        return isVerify;
      }
    } catch (error) {
      console.log(error);
    }
  };
  return {
    encryptPassword,
    generateToken,
    comparePassword,
    verifyToken,
  };
};

export type AuthServices = typeof authServices;
export type AuthServicesReturn = ReturnType<AuthServices>;
