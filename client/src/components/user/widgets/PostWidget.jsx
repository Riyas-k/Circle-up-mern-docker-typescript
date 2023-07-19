/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  ChatBubbleOutlineOutlined,
  FavoriteBorderOutlined,
  FavoriteOutlined,
  MoreHorizOutlined,
  ShareOutlined,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Popover,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import FlexBetween from "../../FlexBetween";
import Friend from "../../Friend";
import WidgetWrapper from "../../WidgetWrapper";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { format } from "timeago.js";
import axios from "../../../axios/axios";
import { deletePost, deletedLoading, setLoading } from "../../../redux/postReducer";

const PostWidget = ({
  postId,fetchPosts,getUserPosts,isProfile,
  postUserId,
  postCreatedAt,
  name,dp,
  description,
  userName,
  image,
  likes,
  comments,
  report,
}) => {
  console.log(dp,'koooooooooooooooooooooi');
  const postTime = format(postCreatedAt);
  const [isComments, setIsComments] = useState(false);
  const [isEditVisible, setIsEditVisible] = useState(false);
  const [isDeleteVisible, setIsDeleteVisible] = useState(false);
  const [editDescription, setEditDescription] = useState(description);
  const [isReportVisible, setIsReportVisible] = useState(false);
  const [reportReason, setReportReason] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const { _id } = useSelector((store) => store.user.payload);
  const dispatch = useDispatch();
  const { palette } = useTheme();
  const main = palette.neutral.main;
  const primary = palette.primary.main;
  const isProfilePost = useState(true);
  const open = Boolean(anchorEl);
  const [load,setLoad] = useState(false)


  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = () => {
    setIsEditVisible(true);
  };

  const handleDeleteConfirm = () => {
    setIsDeleteVisible(true);
    setAnchorEl(null);
  };

  const handleReportConfirm = () => {
    setIsReportVisible(true);
    setAnchorEl(null);
  };

  const handleSaveEdit = () => {
    // Perform save edit action
  };

  const handleReportCancel = () => {
    setIsReportVisible(false);
    setReportReason("");
  };

  const handleDeleteCancel = () => {
    setIsDeleteVisible(false);
  };

  const handleDelete = async () => {
    // Perform delete action
    const res = await axios.delete(`/${postId}/post`);
    if (res.data.status) {
      dispatch(deletePost(postId));
      setIsDeleteVisible(false);
      handleDeleteCancel();
      console.log("after delete");
      dispatch(deletedLoading())
      setLoad(true)
    }
  };
 


  return (
    <WidgetWrapper m="2rem 0">
      <Friend
        friendId={postUserId}
        name={name}
        subtitle={postTime}
        userPicturePath=""
        isProfilePost={isProfilePost} dp={dp}
      />
      <Typography color={main} sx={{ mt: "1rem" }}>
        {description}
      </Typography>
      {image?.map((name, index) => (
        <React.Fragment key={index}>
          <img
            width="100%"
            height="auto"
            src={name}
            alt="post"
            style={{ borderRadius: "0.75rem", marginTop: "0.75rem" }}
          />
        </React.Fragment>
      ))}

      <FlexBetween mt="0.25rem">
        <FlexBetween gap="1rem">
          <FlexBetween gap="0.3rem">
            <IconButton onClick={() => {}}>
              <FavoriteOutlined sx={{ color: primary }} />
              <FavoriteBorderOutlined />
            </IconButton>
            <Typography>{likes?.length}</Typography>
          </FlexBetween>
          <FlexBetween gap="0.3rem">
            <IconButton onClick={() => {}}>
              <ChatBubbleOutlineOutlined />
            </IconButton>
            <Typography>{comments?.length}</Typography>
          </FlexBetween>
        </FlexBetween>
        <div>
          <IconButton>
            <MoreHorizOutlined
              onClick={handlePopoverOpen}
              aria-describedby="more-options"
            />
          </IconButton>
          <Popover
            id="more-options"
            open={open}
            anchorEl={anchorEl}
            onClose={handlePopoverClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            {postUserId === _id ? (
              <Box p={2}>
                <Button onClick={handleEdit}>Edit</Button>
                <Button onClick={handleDeleteConfirm} color="error">
                  Delete
                </Button>
              </Box>
            ) : (
              <Box>
                <Button
                  onClick={handleReportConfirm}
                  color="error"
                  disabled={reportReason.trim() === ""}
                >
                  Report
                </Button>
              </Box>
            )}
          </Popover>
        </div>
      </FlexBetween>

      <Dialog open={isEditVisible} onClose={() => setIsEditVisible(false)}>
        <DialogTitle>Edit Post</DialogTitle>
        <DialogContent>
          <TextField
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            label="Edit description"
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsEditVisible(false)}>Cancel</Button>
          <Button onClick={handleSaveEdit} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={isReportVisible} onClose={handleReportCancel}>
        <DialogTitle>Report Post</DialogTitle>
        <DialogContent>
          <TextField
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            label="Reason for reporting"
            value={reportReason}
            onChange={(e) => setReportReason(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleReportCancel}>Cancel</Button>
          <Button
            onClick={handleReportConfirm}
            color="error"
            disabled={reportReason.trim() === ""}
          >
            Report
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={isDeleteVisible} onClose={handleDeleteCancel}>
        <DialogTitle>Delete Post</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to delete this post?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteCancel}>Cancel</Button>
          <Button onClick={handleDelete} color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </WidgetWrapper>
  );
};

export default PostWidget;
