import { UserDbInterface } from "../../../repositories/user/userRepositoryInf";
// import { AuthServiceInterface } from "../../../services/user/userAuthServiceInt";

export const getAllUsers  = async( userRepository: ReturnType<UserDbInterface>)=>{
      try{
        const details = await userRepository.getAllUsers()
        return details
      }
    catch(err){
        console.log(err,'err is in use case')
    }
    }
    export const blockCurrUser = async(userId:string,userRepository: ReturnType<UserDbInterface>)=>{
        try {
            const status =  await userRepository.blockCurrUser(userId)
            return status
        } catch (error) {
            console.log(error);
        }
    }

    export const unBlockCurrUser = async(userId:string,userRepository:ReturnType<UserDbInterface>)=>{
        try {
            const status = await userRepository.unBlockCurrUser(userId)
            return status
        } catch (error) {
            console.log(error);
        }
    }