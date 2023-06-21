import { userRepositoryMongoDB } from "../../../framework/database/mongodb/repositories/user/userAuthRepositoryImp";

export const userDbRepository = (repository:ReturnType<userRepositoryMongoDB>) =>{
    const addUser = async(user:{
        firstName?:string,
        lastName?:string,
        UserName?:string,
        phone?:number,
        email?:string,
        password?:string
    })=>{
        return await repository.addUser(user)
    };
    const getUserByEmail = async(email:string)=>{
        return repository.getUserByEmail(email)
    }
    const getUserValid = async(email:string)=>{
        return repository.getUserValid(email)
    }
    const getAllUsers = async()=>{
        return repository.getAllUsers()
    }
    const blockCurrUser = async(userId:string)=>{
        return repository.blockCurrUser(userId)
    }
    const unBlockCurrUser = async(userId:string)=>{
        return repository.unBlockCurrUser(userId)
    }
    const newUserGoogle = async(user: { email: string; photoURL: string,displayName:string })=>{
        return repository.newUserGoogle(user)
    }
    return {
        addUser,getUserByEmail,getUserValid,getAllUsers,blockCurrUser,unBlockCurrUser,newUserGoogle
    }
}
export type UserDbInterface = typeof userDbRepository;