import { postDbInterface } from "../../../repositories/user/postDbRepositoryInterface";


export const putData = async(userId:string,text:string,image:string,userName:string,postDbRepository:ReturnType<postDbInterface>)=>{
       const data : any = await postDbRepository.addPost(userId,text,image,userName)
       //    console.log(data,'data');
       return data
}

export const postData = async(postDbRepository:ReturnType<postDbInterface>)=>{
            const data:any = await postDbRepository.fetchPosts()
            return data
}

export const dataUserPosts = async(userId:string,postDbRepository:ReturnType<postDbInterface>)=>{
       const data:any = await postDbRepository.fetchUserPosts(userId)
       return data
}

export const postDelete = async(postId:string,postDbRepository:ReturnType<postDbInterface>)=>{
       const data:any = await postDbRepository.deletePost(postId)
       return data
}