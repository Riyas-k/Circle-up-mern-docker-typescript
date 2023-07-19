/* eslint-disable react/prop-types */
import { Box, Typography, useTheme } from "@mui/material";
import Friend from "../../Friend";
import WidgetWrapper from "../../WidgetWrapper";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const FriendListWidget = ({userId, handleEffect,handleClick}) => {
  const dispatch = useDispatch();
  const { palette } = useTheme();
  const [click,setClick] = useState(false)
  //access store friends

  // api for getting frieds from
  //and set to the store of redux
  const handleRequest = () => {
    setClick(!click)
    handleEffect()
  }

  return (
    <WidgetWrapper>
      <Typography
        color={palette.neutral.dark}
        variant="h5"
        fontWeight="500"
        sx={{ mb: "1.5rem" }}
      >Followers</Typography>
      <Box display="flex" flexDirection="column" gap="1.5rem">
            {/* loop friends */}
            <Friend   handleRequest={handleRequest}
              handleClick={handleClick}/>
      </Box>
    </WidgetWrapper>
  );
};

export default FriendListWidget;
