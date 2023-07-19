import User from "../../models/userModels/userModel";

export const userRepositoryMongoDB = () => {
  const addUser = async (user: {
    firstName?: string;
    lastName?: string;
    UserName?: string;
    phone?: number;
    email?: string;
    password?: string;
  }) => {
    const newUser = new User(user);
    return await newUser.save();
  };
  const getUserByEmail = async (email: string) => {
    const user: any = await User.findOne({ email: email });
    return user;
  };
  const getUserValid = async (email: string) => {
    const user: any = await User.findOne({ email: email });

    return user;
  };
  const getAllUsers = async () => {
    const users: any = await User.find();
    return users;
  };
  const blockCurrUser = async (userId: string) => {
    const status: any = await User.findOneAndUpdate(
      { _id: userId },
      { $set: { isBlock: true} },  { new: true }
    );
    return status;
  };
  const unBlockCurrUser = async (userId: string) => {
    const status: any = await User.findOneAndUpdate(
      { _id: userId },
      { $set: { isBlock: false } },  { new: true }
      );
    return status;
  };
  const newUserGoogle = async (user: {
    email: string;
    photoURL: string;
    displayName: string;
  }) => {
    console.log(user);
    const { email, photoURL, displayName } = user;
    try {
      const newUser = new User({
        UserName: displayName,
        email: email,
        dp: photoURL,
      });
      return await newUser.save();
    } catch (error) {
      console.log(error);
    }
  };
  const getUserData = async(userId:string)=>{
    try {
        const data = await User.findOne({_id:userId})
        console.log(data,'+++++++++++++');
        return data
    } catch (error) {
        console.log(error);
    }
  }
  const updateUserData = async(username:string,name:string,phoneNumber:number,email:string,location:string,bio:string,dp:string,userId:string)=>{
    try{
        const user = await User.findOne({_id:userId})
        if(user){
          const newUser = await User.updateOne({_id:userId},{$set:{
             firstName:name,
             UserName:username,
             phone:phoneNumber,
             email:email,
             location:location,
             bio:bio,
             dp:dp
          }})
        
        }
        const dataUser = await User.findOne({_id:userId})
        return dataUser
    }catch(error){
      console.log(error)
    }
  }

  const emailCheck = async(email:string)=>{
    try {
      let details = await User.findOne({email:email})
      if(details){
        return true
      }else{
        return false
      }
    } catch (error) {
      console.log(error);
      throw  error
    }
  }
  const updatePassword = async(email:string,password:string)=>{
    try {
      let details = await User.findOneAndUpdate({email:email},{$set:{password:password}},{new:true})
      console.log(details);
      return true
      
    } catch (error) {
      console.log(error);
    }
  }

  const getUserPostUser = async(friendId:string)=>{
    try {
      const data = await User.find({_id:friendId})
      return data
    } catch (error) {
      console.log(error);
    }
  }
  const getUserProfile = async(userId:string)=>{
    try {
      const data = await User.findOne({_id:userId})

      return data
      
    } catch (error) {
      console.log(error);
    }
  }

  const getUserWidget = async(userId:string)=>{
    try {
      const data = await User.findOne({_id:userId})
      return data
    } catch (error) {
      console.log(error);
    }
  }

  const getUserSpell = async(name:string)=>{
    try {
      const data:any  = await User.find({
        UserName:{$regex: `^${name}`, $options: "i"}
      });
      console.log(data,'lol');
      return data
      
    } catch (error) {
      console.log(error);
    }
  }


  return {
    addUser,getUserWidget,getUserSpell,
    getUserByEmail,
    getUserValid,
    getAllUsers,
    blockCurrUser,
    unBlockCurrUser,
    newUserGoogle,
    getUserData,
    updatePassword,
    updateUserData,emailCheck,getUserPostUser,getUserProfile
  };
};

export type userRepositoryMongoDB = typeof userRepositoryMongoDB;
