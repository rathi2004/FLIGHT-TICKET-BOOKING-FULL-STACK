import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

import { Stack } from '@mui/system';
import { Link } from 'react-router-dom';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CardMedia from '@mui/material/CardMedia';
import Coupongirl from '../assests/coupongirl.webp';
import '../css/Coupon.css';
import HomeIcon from './HomeIcon';
import axios from 'axios';

function Coupon() {
  
  const [records,setRecords]= React.useState([])
  React.useEffect(()=>{
   axios.get(`http://localhost:8080/getallcoupon`)
   .then(res=>{
    
     setRecords(res.data);
   })
   .catch(err=>console.log(err));
  },[])
  

  const [auth] = React.useState(true);
  const [anchorEl1, setAnchorEl1] = React.useState(null);

  
  const handleMenu1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };

  const handleClose1 = () => {
    setAnchorEl1(null);
  };
  const [anchorEl2, setAnchorEl2] = React.useState(null);

  
  const handleMenu2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };
  const [anchorEl3, setAnchorEl3] = React.useState(null);

  
  const handleMenu3 = (event) => {
    setAnchorEl3(event.currentTarget);
  };

  const handleClose3 = () => {
    setAnchorEl3(null);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" style={{backgroundColor:"#333"}}>
        <Toolbar>
            <Typography
           
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
                <Link to="/Home" id="ca">
                    <HomeIcon/>  
                    HOME
                </Link>
          </Typography>
          <Typography>
            DRAGON AIR
          </Typography>
            <Stack direction="row" spacing={0}>  
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu1}
                color="inherit"
              >
                <Typography
           
            component="div" paddingLeft={45}
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
           PLAN YOUR TRIP
          </Typography>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl1}
                anchorOrigin={{
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl1)}
                onClose={handleClose1}
              >
                <MenuItem onClick={handleClose1}><Link to="/coupon" style={{color:"black",textDecoration:"none"}}>Coupon</Link></MenuItem>
                <MenuItem onClick={handleClose1}><Link to="/booking" style={{color:"black",textDecoration:"none"}}>Ticket</Link></MenuItem>
                <MenuItem onClick={handleClose1}><Link to="/showflights" style={{color:"black",textDecoration:"none"}}>Show Flights</Link></MenuItem>
              </Menu>
            </div>
          )}
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu2}
                color="inherit"
              >
                <Typography
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
           SERVICES
          </Typography>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl2}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl2)}
                onClose={handleClose2}
              >
                <MenuItem onClick={handleClose2}><Link to="/Chauffer" style={{color:"black",textDecoration:"none"}}>Chauffer Drive</Link></MenuItem>
                <MenuItem onClick={handleClose2}><Link to="/Food" style={{color:"black",textDecoration:"none"}}>Food</Link></MenuItem>
                <MenuItem onClick={handleClose2}><Link to="/Hotel" style={{color:"black",textDecoration:"none"}}>Hotel</Link></MenuItem>
                <MenuItem onClick={handleClose2}><Link style={{color:"black",textDecoration:"none"}}>Laggage</Link></MenuItem>
              </Menu>
            </div>
          )}
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu3}
                color="inherit"
              >
                <Typography
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            HELP
          </Typography>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl3}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl3)}
                onClose={handleClose3}
              >
                <MenuItem onClick={handleClose3}><Link to="/Requirement" style={{color:"black",textDecoration:"none"}}>Visa and Passport</Link></MenuItem>
                <MenuItem onClick={handleClose3}><Link to="/health" style={{color:"black",textDecoration:"none"}}>Travel Health</Link></MenuItem>
                <MenuItem onClick={handleClose3}><Link to="/safety"style={{color:"black",textDecoration:"none"}}>Safety Info</Link></MenuItem>
                <MenuItem onClick={handleClose3}><Link to="/feedback" style={{color:"black",textDecoration:"none"}}>Feedback</Link></MenuItem>
               
              </Menu>
            </div>
          )}
            </Stack>
        
          
        </Toolbar>
      </AppBar>
      
      <div>
      <div style={{marginTop:"4.4%", position:"absolute"}}>
        <CardMedia component="img"image={Coupongirl}/>
        </div>
        <div className='picoffer'>
          <p id="offer1">FLY WITH OFFER</p>
          <b><p id="offer2">Dragon Air special offers</p></b>
          <p id="offer3">
          Browse our current offers below or log into your Dragon Air<br></br> to see all the offers available for your tier. </p>
        </div>

       
                
                <Box  sx={{
                marginLeft:30,
                marginRight:30,
               
              }}>

            <Stack direction="column" spacing={2} style={{marginTop: "12.3cm"}}>
            {records.map((get) => (
            <Card style={{width:"27cm"}}  key={get.id}>
                <Stack direction="row" spacing={20} id="couponstack1">
                <Typography id="coupontypo">
                    <div id="couponoff">
                        <b>{get.offers}</b>
                    </div>
                    <div id="couponoff2">
                        {get.couponinfo}
                    </div>
                </Typography>
                <Typography>
                    <div  id="tickcol">
                        <CheckCircleOutlineIcon/>Verified
                    </div>
                    <button id="couponbtn3"><Link to="/showflights" id="ca">Show Flights</Link></button>
                </Typography>

                </Stack>
            </Card>
           
           ))}
            </Stack>
                </Box>
                 
            </div>
    </Box>
  );
}

Coupon.propTypes = {
  window: PropTypes.func,
};

export default Coupon;
