import { adminAuthServiceReturn } from "../../../framework/services/admin/adminAuthServiceImp";

export const AdminAuthServiceInterface = (service: adminAuthServiceReturn) => {
  const generateAdminToken = async (id: string) => {
    try {
      return service.generateAdminToken(id);
    } catch (error) {
      console.log(error);
    }
  };
  return { generateAdminToken };
};

export type AdminAuthServiceInterface = typeof AdminAuthServiceInterface;
