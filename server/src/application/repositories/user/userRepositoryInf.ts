import { modelNames } from "mongoose";
import { userRepositoryMongoDB } from "../../../framework/database/mongodb/repositories/user/userAuthRepositoryImp";

export const userDbRepository = (
  repository: ReturnType<userRepositoryMongoDB>
) => {
  const addUser = async (user: {
    firstName?: string;
    lastName?: string;
    UserName?: string;
    phone?: number;
    email?: string;
    password?: string;
  }) => {
    try {
      return await repository.addUser(user);
    } catch (error) {
      console.log(error);
    }
  };
  const getUserByEmail = async (email: string) => {
    try {
      return repository.getUserByEmail(email);
    } catch (error) {
      console.log(error);
    }
  };
  const getUserValid = async (email: string) => {
    try {
      return repository.getUserValid(email);
    } catch (error) {
      console.log(error);
    }
  };
  const getAllUsers = async () => {
    try {
      return repository.getAllUsers();
    } catch (error) {
      console.log(error);
    }
  };
  const blockCurrUser = async (userId: string) => {
    try {
      return repository.blockCurrUser(userId);
    } catch (error) {
      console.log(error);
    }
  };
  const unBlockCurrUser = async (userId: string) => {
    try {
      return repository.unBlockCurrUser(userId);
    } catch (error) {
      console.log(error);
    }
  };
  const newUserGoogle = async (user: {
    email: string;
    photoURL: string;
    displayName: string;
  }) => {
    try {
      return repository.newUserGoogle(user);
    } catch (error) {
      console.log(error);
    }
  };
  const getUserData = async (userId: string) => {
    try {
      return repository.getUserData(userId);
    } catch (error) {
      console.log(error);
    }
  };
  const updateUser = async (
    username: string,
    name: string,
    phoneNumber: number,
    email: string,
    location: string,
    bio: string,
    dp: string,
    userId: string
  ) => {
    try {
      return repository.updateUserData(
        username,
        name,
        phoneNumber,
        email,
        location,
        bio,
        dp,
        userId
      );
    } catch (error) {
      console.log(error);
    }
  };
  const correctEmail = async (email: string) => {
    try {
      return repository.emailCheck(email);
    } catch (error) {
      console.log(error);
    }
  };
  const changeNew = async (email: string, password: string) => {
    try {
      return repository.updatePassword(email, password);
    } catch (error) {
      console.log(error);
    }
  };
  const getUserById = async (friendId: string) => {
    try {
      return repository.getUserPostUser(friendId);
    } catch (error) {
      console.log(error);
    }
  };
  const getProfile = async (userId: string) => {
    try {
      return repository.getUserProfile(userId);
    } catch (error) {
      console.log(error);
    }
  };
  const getUserIdProfile = async (userId: string) => {
    try {
      return repository.getUserWidget(userId);
    } catch (error) {
      console.log(error);
    }
  };
  const getUserName = async (name: string) => {
    try {
      return repository.getUserSpell(name);
    } catch (error) {
      console.log(error);
    }
  };
  const putFollower = async (friendId: string, userId: string) => {
    try {
      return repository.addFollower(friendId, userId);
    } catch (error) {
      console.log(error);
    }
  };
  const removeFollow = async (friendId: string, userId: string) => {
    try {
      return repository.removeFollower(friendId, userId);
    } catch (error) {
      console.log(error);
    }
  };
  const getFollowers = async (userId: string) => {
    try {
      return repository.followerList(userId);
    } catch (error) {
      console.log(error);
    }
  };
  const getFollowings = async (userId: string) => {
    try {
      return repository.followingList(userId);
    } catch (error) {
      console.log(error);
    }
  };
  const findSuggest = async (userId: string) => {
    try {
      return repository.suggestionUser(userId);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchPosts = async () => {
    try {
      return repository.fetchPosts();
    } catch (error) {
      console.log(error);
    }
  };
  const reportRemove = async (postId: string, index: number) => {
    try {
      return repository.removeReport(postId, index);
    } catch (error) {
      console.log(error);
    }
  };
  const getPostsReported = async () => {
    try {
      return repository.getReportedPosts();
    } catch (error) {
      console.log(error);
    }
  };
  const confirmReport = async (postId: string) => {
    try {
      return repository.reportConfirm(postId);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    addUser,
    getUserIdProfile,
    getUserName,
    getFollowers,
    getFollowings,
    getUserByEmail,
    removeFollow,
    getUserValid,
    reportRemove,
    getAllUsers,
    blockCurrUser,
    unBlockCurrUser,
    findSuggest,
    newUserGoogle,
    getUserData,
    updateUser,
    getPostsReported,
    correctEmail,
    getProfile,
    confirmReport,
    changeNew,
    getUserById,
    putFollower,
    fetchPosts,
  };
};
export type UserDbInterface = typeof userDbRepository;
