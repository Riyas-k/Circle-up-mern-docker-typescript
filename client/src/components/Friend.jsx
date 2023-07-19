/* eslint-disable react/prop-types */
import { PersonAddOutlined, PersonRemoveOutlined } from "@mui/icons-material";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
// import {setFriends} from 'state';
import FlexBetween from "./FlexBetween";
import UserImage from "./UserImage";
import { useNavigate } from "react-router-dom";
import axios from "../axios/axios";
import { useEffect, useState } from "react";

const Friend = ({
  friendId,
  name,
  subtitle,
  // userPicturePath,
  // handleRequest,
  // handleClick,
  // isProfilePost,
}) => {
  //need to destructure props from 1st set the PostsWidget

  // const dispatch = useDispatch();
  const navigate = useNavigate();
  //access the store;

  const { palette } = useTheme();
  const primaryLight = palette.primary.light;
  const primaryDark = palette.primary.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;
  const [user, setUser] = useState();

  //write api for fetching the users with id and userId and set to the store friends []
  const getUser = async () => {
    const data = await axios.get(`/${friendId}`);
    console.log(data.data,'joli');
    setUser(data.data);
  };
  useEffect(() => {
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, [friendId]);
if(user)
  return (
    <FlexBetween>
      <FlexBetween gap="1rem">
      
        {
            user?(

              <UserImage image={user[0]?.dp} />
            ):(
              <UserImage image="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=" />
            )
        }
        <Box
          onClick={() => {
            navigate(`/profile/${friendId}`);
            // navigate(0); // to change url on friends friends profile
          }}
        >
          <Typography
            color={main}
            variant="h5"
            fontWeight="500"
            sx={{
              "&:hover": {
                color: palette.primary.light,
                cursor: "pointer",
              },
            }}
          >
            {name}
          </Typography>
          <Typography color={medium} fontSize="0.75rem">
            {subtitle}
          </Typography>
        </Box>
      </FlexBetween>
      {/* write on iconButton inside a function to add friend  */}
      <IconButton sx={{ backgroundColor: primaryLight, p: "0.6rem" }}>
        {/* conditionally render the icons i f it is friend or not friend Down */}
        <PersonAddOutlined sx={{ color: primaryDark }} />
        <PersonAddOutlined sx={{ color: primaryDark }} />
      </IconButton>
    </FlexBetween>
  );
};

export default Friend;
