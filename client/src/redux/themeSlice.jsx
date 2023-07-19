import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
  mode: "light",
};

const persistConfig={
  key:'theme',
  storage
}

const theme = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "dark" ? "light" : "dark";
    },
  },
});

const persistTheme = persistReducer(persistConfig,theme.reducer)

export const { setMode } = theme.actions;
export default persistTheme;
