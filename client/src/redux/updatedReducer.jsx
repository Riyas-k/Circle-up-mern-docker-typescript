import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "updateUser",
  storage,
};
const initialState = {
  user: {},
  image:''
};

const updatedUser = createSlice({
  name: "singleUser",
  initialState,
  reducers: {
    setUpdatedDetails: (state, action) => {
      console.log(action.payload,'payload');
      return (state.user = action.payload);
    },
    setImageProfile:(state,action)=>{
        console.log(action.payload,'payloaddata');
        state.image = action.payload
      }
  },
});

const persistedSingleUserReducer = persistReducer(
  persistConfig,
  updatedUser.reducer
);

export const { setUpdatedDetails, clearUser,setImageProfile } = updatedUser.actions;
export default persistedSingleUserReducer;
