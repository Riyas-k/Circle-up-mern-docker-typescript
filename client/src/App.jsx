import { Navigate, Route, Routes } from "react-router-dom";
import SignIn from "./components/user/auth/SignIn";
import SignUp from "./components/user/auth/Signup";
import Home from "./pages/user/Home";
import Error from "./Error";
import AdminLogin from "./components/admin/auth/login";
import AdminHome from "./pages/admin/AdminHome";
import ViewUsersPage from "./pages/admin/ViewUsers";
import ReportedPosts from "./pages/admin/ReportedPosts";
import { useSelector } from "react-redux";
// import SettingsPage from "./pages/user/Settings";

function App() {
  const adminAuth = useSelector((state)=>state.admin.payload)
  const auth = useSelector((state)=>state.user.payload)
  return (
    <>
      <Routes>
        {/* user */}
        <Route path="/sign-in" element={!auth? <SignIn />:<Navigate to='/'/>} />
        <Route path="/sign-up" element={!auth?<SignUp />:<Navigate to="/"/>} />
    
          <Route path="/" element={auth?<Home />:<Navigate to='/sign-in'/>} />
          {/* <Route path="/settings" element={<SettingsPage />} /> */}
        
        {/* admin */}
        <Route path="/admin/login" element={!adminAuth?<AdminLogin />:<Navigate to="/admin"/>} />
  
        <Route  path="/admin" element={adminAuth? <AdminHome/>:<Navigate to='/admin/login'/>}/>
        <Route  path="/admin/view-users" element={adminAuth?<ViewUsersPage/>:<Navigate to='/admin/login'/>}/>
        <Route  path="/admin/reported-posts" element={adminAuth?<ReportedPosts/>:<Navigate to='/admin/login'/>}/>

        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
