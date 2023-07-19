/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "../../../axios/axios";
import { deletedLoading, setLoading, setPost } from "../../../redux/postReducer";
import PostWidget from "./PostWidget";
import { Box, LinearProgress } from "@mui/material";

const PostsWidget = ({ click, isProfile = false, userId,dp }) => {
  console.log(isProfile, "profile of user");
  console.log(userId, "joooooooooooooooooooooooooe");
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const loading = useSelector((store) => store.post.loading);
  const deleted = useSelector((store) => store.post.deleted);


  const data = useSelector((store) => store.post);
  console.log(data, "payload");
  const fetchPosts = async () => {
    const res = await axios.get("/");
    dispatch(setPost({ payload: res.data }));
    setIsLoading(false);
    setPosts(res.data);
  };
  const getUserPosts = async () => {
    const res = await axios.get(`/post/${userId}`);
    setIsLoading(false);
    setPosts(res.data);
  };
  const buttonClicked = () => {
    setPosts(!posts);
  };

  useEffect(() => {
    if (isProfile) {
      getUserPosts();
    } else {
      fetchPosts();
    }
  }, [isProfile, userId, click]);
  useEffect(() => {
    if (loading) {
      fetchPosts();
      dispatch(setLoading());
    }
  }, [loading, posts]);


  useEffect(()=>{
    if(deleted && isProfile){
      console.log('2 side true');
      getUserPosts();
      dispatch(deletedLoading())
    }else if(deleted){
      console.log('1 side true');
      fetchPosts()
      dispatch(deletedLoading())
    }
  },[deleted])
  return (
    <>
      {isLoading ? (
        <>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <LinearProgress color="secondary" />
            <LinearProgress color="success" />
            <LinearProgress color="inherit" />
          </Box>
        </>
      ) : posts?.length === 0 ? (
        isProfile ? (
          <p>No posts to show</p>
        ) : (
          <p>Follow some friends to see their posts</p>
        )
      ) : (
        [...posts]
          .reverse()
          .map(
            ({
              _id,
              userId,
              description,
              userName,
              image,
              likes,
              comments,
              report,
              createdAt,
           
            }) => (
              <PostWidget
                key={_id}
                postId={_id}
                postUserId={userId}
                postCreatedAt={createdAt}
                description={description}
                name={userName}
                image={image}
                likes={likes}
                isProfile={isProfile} getUserPosts={getUserPosts}
                comments={comments}
                buttonClicked={buttonClicked}
                dp={dp}
                report={report}
                fetchPosts={fetchPosts}
              />
            )
          )
      )}
    </>
  );
};

export default PostsWidget;
