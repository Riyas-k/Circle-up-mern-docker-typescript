import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';



const SettingsPage = () => {
  const MySwal = withReactContent(Swal);

  const handleLogout = () => {
    MySwal.fire({
      title: 'Are you sure?',
      text: 'To Logout!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Logout',
      cancelButtonText: 'Cancel',
      customClass: {
        confirmButton: 'btn bg-danger',
        cancelButton: 'btn bg-success',
      },
    }).then((result) => {
      if (result.isConfirmed) {
        // dispatch(clearUser());
        // Perform logout logic
      }
    });
  };

  const handleProfileEdit = (e) => {
    e.preventDefault();
    // Perform profile edit logic
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    // Perform password change logic
  };

  const handleAccountDeletion = (e) => {
    e.preventDefault();
    // Perform account deletion logic
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Settings
        </Typography>
        <form onSubmit={handleProfileEdit}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <AccountCircleIcon sx={{ fontSize: 64, mr: 2 }} />
            <input type="file" accept="image/*" />
          </Box>
          <TextField label="Username" variant="outlined" fullWidth sx={{ mb: 2 }} />
          <TextField label="Date of Birth" variant="outlined" fullWidth sx={{ mb: 2 }} />
          <TextField label="Email" variant="outlined" fullWidth sx={{ mb: 2 }} />
          <TextField label="Place" variant="outlined" fullWidth sx={{ mb: 2 }} />
          <TextField label="Address" variant="outlined" fullWidth sx={{ mb: 2 }} />
          <Button type="submit" variant="contained" sx={{ mr: 2 }}>
            Save Changes
          </Button>
        </form>
        <form onSubmit={handlePasswordChange}>
          <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
            Change Password
          </Typography>
          <TextField label="Current Password" variant="outlined" fullWidth sx={{ mb: 2 }} />
          <TextField label="New Password" variant="outlined" fullWidth sx={{ mb: 2 }} />
          <TextField label="Confirm New Password" variant="outlined" fullWidth sx={{ mb: 2 }} />
          <Button type="submit" variant="contained" sx={{ mr: 2 }}>
            Change Password
          </Button>
        </form>
        <form onSubmit={handleAccountDeletion}>
          <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
            Delete Account
          </Typography>
          <Typography sx={{ mb: 2 }}>
            Deleting your account will permanently remove all your data. This action cannot be undone.
          </Typography>
          <Button type="submit" variant="contained" color="error" sx={{ mr: 2 }}>
            Delete Account
          </Button>
        </form>
        <Button variant="outlined" onClick={handleLogout}>
          Logout
        </Button>
      </Box>
    </Box>
  );
};

export default SettingsPage;
