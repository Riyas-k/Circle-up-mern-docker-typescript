/* eslint-disable react-hooks/exhaustive-deps */
// import { useDispatch, useSelector } from "react-redux";
import { useSelector } from "react-redux";
import Header from "../../components/user/Header/Header";
import FriendListWidget from "../../components/user/widgets/FriendListWidget";
import MyPostWidget from "../../components/user/widgets/MyPostWidget";
import PostsWidget from "../../components/user/widgets/PostsWidget";
import UserWidget from "../../components/user/widgets/UserWidget";
import { Box, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { userBlocked } from "../../redux/loginReducers";
// import { useDispatch, useSelector } from "react-redux";

function Home() {
  // const auth = useSelector((state) => state.login.blocked);
  // console.log(auth,'hi');
  // const dispatch = useDispatch()
  //  const navigate = useNavigate()
  // useEffect(()=>{
  //   if(auth){
  //     console.log('hi home');
  //     dispatch(userBlocked())
  //       navigate('/sign-in')
  //   }
  // })
  const isNotMobile = useMediaQuery("(min-width:1000px)");
  const data = useSelector((store) => store.user.payload);
   console.log(data,'jo');
  const {_id} = data
  const {dp} = data
  console.log(_id,dp,'home c');
  const [click,setClick] = useState(false) 

  const details = useSelector((store)=>store.update.user)
  console.log(details,'john');

  const handleClick = ()=>{
    setClick(!click)
  }

  useEffect(()=>{
  },[click])

  return (
    <>
      <Header />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNotMobile ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNotMobile ? "26%" : undefined}>
          <UserWidget userId={_id}/>
        </Box>
        <Box
          flexBasis={isNotMobile ? "45%" : undefined}
          mt={isNotMobile ? undefined : "2rem"}
        >
          <MyPostWidget dp={dp}/>
          <PostsWidget  click={click} userId={_id} dp={dp}/>

        </Box>
        {isNotMobile && <Box flexBasis="26%">
             <FriendListWidget dp={dp}/>
          </Box>}
      </Box>
    </>
  );
}

export default Home;
