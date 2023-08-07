import configKeys from "../../../config/config";
import jwt from "jsonwebtoken";

export const adminAuthServices = () => {
  const generateAdminToken = async (id: string) => {
    try {
      if (configKeys.JWT_SECRET) {
        const token = jwt.sign({ id }, configKeys.JWT_SECRET, {
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
  return { generateAdminToken };
};

export type adminAuthServices = typeof adminAuthServices;
export type adminAuthServiceReturn = ReturnType<adminAuthServices>;
