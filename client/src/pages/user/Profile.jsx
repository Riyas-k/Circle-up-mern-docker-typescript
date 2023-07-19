/* eslint-disable react-hooks/exhaustive-deps */
import { Box, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Header from "../../components/user/Header/Header";
import FriendListWidget from "../../components/user/widgets/FriendListWidget";
import MyPostWidget from "../../components/user/widgets/MyPostWidget";
import PostsWidget from "../../components/user/widgets/PostsWidget";
import UserWidget from "../../components/user/widgets/UserWidget";
import axios from '../../axios/axios'
import { setLoading } from "../../redux/postReducer";

const Profile = () => {
  const [user, setUser] = useState(null);
  const { userId } = useParams();
  const isNotMobile = useMediaQuery("(min-width:1000px)");
  const [click,setClick] = useState(false)
  const [run,setRun] = useState(false)
  const [checkId,setCheckId] = useState(false)
  const handleClick = () =>{
    setRun(!run)
  }
  const handleEffect = () => {
    setClick(!click);
  };

  //api for fetch the user of any followers  with id and setUser with data
        const fetchUser = async()=>{
            const data = await axios.get(`/profile/${userId}`)
            setUser(data.data)
        }
        useEffect(()=>{
            fetchUser()
        },[click,userId])

  // if (!user) return null;

const data = useSelector((store)=>store.user)
console.log(data.payload,'id ch');
const {_id,dp} = useSelector((store)=>store?.user?.payload)
console.log(_id,dp,'is herer');
console.log(_id,userId,'ids');

const loading = useSelector((store) => store.post.loading);
 
const checkUserId = ()=>{
  if(
    userId==_id ) setCheckId(true)
}

useEffect(()=>{
   checkUserId()
},[userId])
const dispatch = useDispatch()
console.log(checkId,'profile');
useEffect(() => {
  if (!loading) {
    console.log('redux store updated');
    // fetchUser()
    dispatch(setLoading())
    dispatch(setLoading())
  }
}, [loading]);
   
  
  return (
    <Box>
      <Header /> 
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNotMobile ? "flex" : "block"}
        gap="2rem"
        justifyContent="center"
      >
        <Box flexBasis={isNotMobile ? "26%" : undefined}>
          {/* pass the userId here if it is possible */}
          {
            user &&
          <UserWidget userId={userId} checkId={checkId} profilePic={dp}/>
          }
          <Box m="2rem 0" />
          {/* pass the userId as props */}
          <FriendListWidget userId={_id}  handleEffect={handleEffect} handleClick={handleClick} />
        </Box>
    
          <Box
          flexBasis={isNotMobile ? "42%" : undefined}
          mt={checkId && isNotMobile ? "-0rem" : "-2rem"}
        >    { checkId &&
          <MyPostWidget  dp={dp}/>
        }
          <Box m="2rem 0" />
          {/* pass the userId as props */}
          <PostsWidget isProfile userId={userId} dp={dp}/>
        </Box>
       
      </Box>
    </Box>
  );
};

export default Profile;
