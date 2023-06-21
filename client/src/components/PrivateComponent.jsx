import { useSelector } from "react-redux";
import { Navigate,Outlet } from "react-router-dom";
const PrivateComponent =()=>{
    const auth = useSelector((state)=>state.user.payload)
    return auth ?<Outlet />:<Navigate to='/sign-in' replace/>
}
export const AdminPrivateComponent = ()=>{
    const auth =  localStorage.getItem('admin')
    console.log(auth,'private');
    return auth?<Outlet />:<Navigate to='/admin/login' replace/>
}
export default PrivateComponent