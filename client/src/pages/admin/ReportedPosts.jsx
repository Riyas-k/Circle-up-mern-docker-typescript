import React, { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useDispatch } from "react-redux";
import { clearAdmin } from "../../redux/adminAuthReducer";
import {
  Box,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  IconButton,
  Paper,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import AdminHeader from "../../components/admin/AdminHeader";
import Sidebar from "../../components/admin/Sidebar";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/admin/Footer";

// Mocked data for demonstration
const reportedPostsData = [
  {
    id: 1,
    username: "JohnDoe",
    reason: "Inappropriate content",
    postContent: "https://example.com/image1.jpg",
    dateReported: "2023-06-18",
  },
  {
    id: 2,
    username: "JaneSmith",
    reason: "Spam",
    postContent: "https://example.com/image2.jpg",
    dateReported: "2023-06-17",
  },
  // Add more mocked data as needed
];

const ReportedPosts = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const dispatch = useDispatch();

  const handleLogout = () => {
    MySwal.fire({
      title: "Are you sure?",
      text: "To Logout!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Logout",
      cancelButtonText: "Cancel",
      customClass: {
        confirmButton: "btn bg-danger",
        cancelButton: "btn bg-success",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(clearAdmin());
        navigate("/admin/login");
      }
    });
  };

  const handleNavigate = (link) => {
    navigate(link);
  };

  const handleDelete = (postId) => {
    // Handle delete logic for the post with the given ID
    console.log("Delete post:", postId);
  };

  return (
    <>
      <AdminHeader toggleSidebar={toggleSidebar} handleLogout={handleLogout} />
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        closeSidebar={() => setIsSidebarOpen(false)}
        navigate={handleNavigate} // Pass the handleNavigate function
      />
      <Box sx={{ p: 2, textAlign: "center" }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Reported Posts
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ "@media (max-width: 600px)": { display: "none" } }}
                >
                  No
                </TableCell>
                <TableCell>Username</TableCell>
                <TableCell>Reason</TableCell>
                <TableCell>Post Content</TableCell>
                <TableCell>Date Reported</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {reportedPostsData.map((post, index) => (
                <TableRow key={post.id}>
                  <TableCell
                    sx={{ "@media (max-width: 600px)": { display: "none" } }}
                  >
                    {index + 1}
                  </TableCell>
                  <TableCell>{post.username}</TableCell>
                  <TableCell>{post.reason}</TableCell>
                  <TableCell>
                    <img
                      src={post.postContent}
                      alt="Post"
                      style={{ width: "100px", height: "auto" }}
                    />
                  </TableCell>
                  <TableCell>{post.dateReported}</TableCell>
                  <TableCell>
                    <IconButton
                      color="error"
                      onClick={() => handleDelete(post.id)}
                      aria-label="Delete"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
     <Footer />

    </>
  );
};

export default ReportedPosts;
