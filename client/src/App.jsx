import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import SignIn from "./components/user/auth/SignIn";
import SignUp from "./components/user/auth/Signup";
import Home from "./pages/user/Home";
import Error from "./Error";
import AdminLogin from "./components/admin/auth/login";
import AdminHome from "./pages/admin/AdminHome";
import ViewUsersPage from "./pages/admin/ViewUsers";
import ReportedPosts from "./pages/admin/ReportedPosts";
import { useDispatch, useSelector } from "react-redux";
// import SettingsPage from "./pages/user/Settings";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material";
import { themeSettings } from "./theme";
import { useEffect, useMemo } from "react";
import ForgotPasswordForm from "./components/user/auth/Email";
import PasswordForm from "./components/user/auth/Password";
import Profile from "./pages/user/Profile";
// import { userBlocked } from "./redux/loginReducers";

function App() {
  const adminAuth = useSelector((state) => state.admin.payload);
  const auth = useSelector((state) => state.user.payload);
  // const single = useSelector((store)=>store.user.payload)
  // console.log(single,'hello');
  const mode = useSelector((store) => store.theme.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
    const Auth = useSelector((state) => state.login.blocked);
  console.log(Auth);
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          {/* user */}
          <Route
            path="/sign-in"
            element={!auth ? <SignIn /> : <Navigate to="/" />}
          />
          <Route
            path="/sign-up"
            element={!auth ? <SignUp /> : <Navigate to="/" />}
          />
              <Route
            path="/forgot-password"
            element={!auth ? <ForgotPasswordForm /> : <Navigate to="/" />}
          />
               <Route
            path="/new-password"
            element={!auth ? <PasswordForm /> : <Navigate to="/" />}
          />
          
          
          <Route
            path="/"
            element={auth ? <Home /> : <Navigate to="/sign-in" />}
          />
          <Route path="/profile/:userId" element={auth ? <Profile /> : <Navigate to='/sign-in'/>} />

          {/* admin */}
          <Route
            path="/admin/login"
            element={!adminAuth ? <AdminLogin /> : <Navigate to="/admin" />}
          />

          <Route
            path="/admin"
            element={adminAuth ? <AdminHome /> : <Navigate to="/admin/login" />}
          />
          <Route
            path="/admin/view-users"
            element={
              adminAuth ? <ViewUsersPage /> : <Navigate to="/admin/login" />
            }
          />
          <Route
            path="/admin/reported-posts"
            element={
              adminAuth ? <ReportedPosts /> : <Navigate to="/admin/login" />
            }
          />

          <Route path="*" element={<Error />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
