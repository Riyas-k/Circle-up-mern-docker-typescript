import {configureStore} from "@reduxjs/toolkit";
import loginReducers from "./loginReducers";
import userReducer from "./userSlice";
import singleUser from './singlereducer';
import AdminAuth from './adminAuthReducer';
import themeReducer from './themeSlice'

const store = configureStore({
    reducer:{
        login:loginReducers,
        users:userReducer,
        user:singleUser,
        admin:AdminAuth,
        theme:themeReducer
    }
})
export default store