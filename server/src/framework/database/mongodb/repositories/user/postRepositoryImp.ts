import Post from "../../models/userModels/postModel";

export const postRepositoryMongoDb =()=>{
   const addPostDetails = async(userId:string,text:string,image:string,userName:string)=>{
        const post = {
            userId:userId,
            description:text,
            image:image,
            userName:userName
        }
                const newPost = new Post(post)
                console.log(newPost,'post');     
                return newPost.save()  
   }
   const getPosts = async()=>{
       const data = await Post.find();
       return data
   }
   const getUser = async(friendId:string)=>{
    const data = await Post.findOne({userId:friendId})
     return data
   }

   const fetchUserPost = async(userId:string)=>{
     const data = await Post.find({userId:userId})
     return data
   }
   const postDelete = async(postId:string)=>{
    try {
      await Post.deleteOne({_id:postId})
    return true
    } catch (error) {
      console.log(error);
    }
    
   }
   return {
    addPostDetails,getPosts,getUser,fetchUserPost,postDelete
   }
}

export type postRepositoryMongoDb = typeof postRepositoryMongoDb