import { postRepositoryMongoDb } from "../../../framework/database/mongodb/repositories/user/postRepositoryImp";

export const postRepository = (
  repository: ReturnType<postRepositoryMongoDb>
) => {
  const addPost = async (
    userId: string,
    text: string,
    image: string,
    userName: string
  ) => {
    return repository.addPostDetails(userId, text, image, userName);
  };
  const fetchPosts = async () => {
    return repository.getPosts();
  };
  const fetchUserPosts = async (userId: string) => {
    return repository.fetchUserPost(userId);
  };

  const deletePost = async(postId:string)=>{
    return repository.postDelete(postId)
  }
  return {
    addPost,
    fetchPosts,
    fetchUserPosts,deletePost
  };
};

export type postDbInterface = typeof postRepository;
