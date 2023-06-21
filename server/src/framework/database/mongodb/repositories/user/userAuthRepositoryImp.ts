import User from "../../models/userModels/userModel";

export const userRepositoryMongoDB = ()=> {
    const addUser = async (user:{
        firstName?:string,
        lastName?:string,
        UserName?:string,
        phone?:number,
        email?:string,
        password?:string
    }) =>{
        const newUser = new User(user);
        return await newUser.save()
    }
    const getUserByEmail = async (email:string)=>{
        const user : any = await User.findOne({email:email});
        return user
    }
    const getUserValid = async(email:string)=>{
        const user:any = await User.findOne({email:email})
       
        return user
    }
    const getAllUsers = async()=>{
        const users:any = await User.find()
        return users
    }
    const blockCurrUser = async(userId:string)=>{
       const status:any = await User.findByIdAndUpdate({_id:userId},{$set:{isBlock:true}})
       return status
    }
    const unBlockCurrUser = async(userId:string)=>{
        const status:any = await User.findByIdAndUpdate({_id:userId},{$set:{isBlock:false}})
        return status
    }
    const newUserGoogle = async(user: { email: string; photoURL: string,displayName:string })=>{
        console.log(user,);
          const {email,photoURL,displayName}= user
          try {
            const newUser = new User({
                UserName:displayName,
                email:email,
                dp:photoURL
            })
            return await newUser.save()
          } catch (error) {
            console.log(error);
          }
    }

    return {
        addUser,getUserByEmail,getUserValid,getAllUsers,blockCurrUser,unBlockCurrUser,newUserGoogle
    }
}

export type userRepositoryMongoDB = typeof userRepositoryMongoDB;