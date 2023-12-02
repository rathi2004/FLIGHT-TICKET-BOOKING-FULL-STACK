import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Stack } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';


function Adminsetting() {

  const [anchorElUser, setAnchorElUser] = React.useState(null);

 
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

 
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
   <AppBar style={{backgroundColor:"#2c3136",width:"5cm"}}>
<Container>
        <Toolbar disableGutters>
          <Box>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 , fontSize:15 , color:'#37a6c4' }}>
                <Stack direction={"row"} spacing={1}>
                    <Typography><PersonIcon/></Typography>
                    <Typography>Account</Typography>
                </Stack>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' , marginLeft:'50px'}}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
             <MenuItem  onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Change Password</Typography>
                </MenuItem>
                <MenuItem  onClick={handleCloseUserMenu}>
                  
                  <Typography textAlign="center"><Link to="/adminlogin" style={{textDecoration:"none",color:"black"}}>Logout</Link></Typography>
                </MenuItem>
            </Menu>
          </Box>
          </Toolbar>
      </Container>
   </AppBar>

       
  );
}
export default Adminsetting;