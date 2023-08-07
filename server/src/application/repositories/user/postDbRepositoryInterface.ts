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
    try {
      return repository.addPostDetails(userId, text, image, userName);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchPosts = async (userId: string) => {
    try {
      return repository.getPosts(userId);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchUserPosts = async (userId: string) => {
    try {
      return repository.fetchUserPost(userId);
    } catch (error) {
      console.log(error);
    }
  };

  const deletePost = async (postId: string) => {
    try {
      return repository.postDelete(postId);
    } catch (error) {
      console.log(error);
    }
  };
  const editPost = async (postId: string, text: string) => {
    try {
      return repository.postEdit(postId, text);
    } catch (error) {
      console.log(error);
    }
  };
  const likePost = async (postId: string, userId: string) => {
    try {
      return repository.postLike(postId, userId);
    } catch (error) {
      console.log(error);
    }
  };
  const unLikePost = async (postId: string, userId: string) => {
    try {
      return repository.unLike(postId, userId);
    } catch (error) {
      console.log(error);
    }
  };
  const addComment = async (
    postId: string,
    userId: string,
    comment: string,
    firstName: string
  ) => {
    try {
      return repository.putComment(postId, userId, comment, firstName);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteComment = async (
    postId: string,
    userId: string,
    index: number
  ) => {
    try {
      return repository.postDeleteComment(postId, userId, index);
    } catch (error) {
      console.log(error);
    }
  };
  const reportPost = async (postId: string, userId: string, reason: string) => {
    try {
      return repository.addReport(postId, userId, reason);
    } catch (error) {
      console.log(error);
    }
  };
  return {
    addPost,
    fetchPosts,
    deleteComment,
    fetchUserPosts,
    deletePost,
    editPost,
    likePost,
    unLikePost,
    addComment,
    reportPost,
  };
};

export type postDbInterface = typeof postRepository;
