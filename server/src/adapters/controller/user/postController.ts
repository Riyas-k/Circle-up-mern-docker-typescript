import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { postDbInterface } from "../../../application/repositories/user/postDbRepositoryInterface";
import { postRepositoryMongoDb } from "../../../framework/database/mongodb/repositories/user/postRepositoryImp";
import { dataUserPosts, postData, postDelete, putData } from "../../../application/useCase/user/auth/post";


const postControllers = (postDbRepository:postDbInterface,postDbRepositoryService:postRepositoryMongoDb)=>{
     const postRepository = postDbRepository(postDbRepositoryService())
    const addPost = asyncHandler(async(req:Request,res:Response)=>{
            const {text,image,userName} = req.body;
            const {userId} = req.params;
            const data = await putData(userId,text,image,userName,postRepository)
            res.json(data)
    })
    const fetchPosts = asyncHandler(async(req:Request,res:Response)=>{
           const data = await postData(postRepository)
           res.json(data)
    })
    const fetchUserPosts = asyncHandler(async(req:Request,res:Response)=>{
        const {userId} = req.params;
           const data = await dataUserPosts(userId,postRepository)
           res.json(data)
    })
    const deletePost = asyncHandler(async(req:Request,res:Response)=>{
       const {postId} = req.params;
        await postDelete(postId,postRepository)
         res.json({status:true})
    })

   return {
    addPost,fetchPosts,fetchUserPosts,deletePost
   }
}

export default postControllers