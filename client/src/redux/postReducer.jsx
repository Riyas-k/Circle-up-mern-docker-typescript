import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "post",
  storage,
};

const initialState = {
  posts: [],
  loading: false,
  deleted:false,
  profile:false
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPost: (state, action) => {
      state.posts = action.payload;
    },
    setLoading: (state) => {
      state.loading = !state.loading;
    },
    deletePost: (state, action) => {
      const postId = action.payload;
      state.posts = state?.posts?.payload.filter(
        (post) => post?._id !== postId
      );
    },
    deletedLoading:(state)=>{
      state.deleted = !state.deleted
    },
    profileLoading:(state)=>{
      state.deleted = !state.deleted
    }
  },
});

const persistedSingleUserReducer = persistReducer(
  persistConfig,
  postSlice.reducer
);

export const { setPost, setLoading, deletePost,deletedLoading,profileLoading } = postSlice.actions;
export default persistedSingleUserReducer;
