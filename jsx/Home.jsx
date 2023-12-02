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
import {CardMedia, CardActions, CardContent } from '@mui/material';
import { Stack } from '@mui/system';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Hoteltree from '../assests/hoteltree.webp';
import Hotelsis from '../assests/hotelsis.webp';
import Playboy from '../assests/playboy.webp';
import Phone from '../assests/phone.jpg';
import google from '../assests/GooglePlay.png';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import apple from '../assests/appleapp.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import {useNavigate } from 'react-router-dom';
import '../css/Home.css';
import ImageLists from './ImageList';

function Homepage() {
  const navigate=useNavigate();


    function checkdata  (){
        
        let hoteldesti=document.getElementById("dcity").value;
        let hotelcheckout=document.getElementById("acity").value;     
        let hotelcheckin=document.getElementById("hdeparture").value;     
        if(hoteldesti===""){
            alert("please enter destination");
        }
        
        else if(hotelcheckout===""){
            alert("please chose check out date");
        }
        else if(hotelcheckin===""){
            alert("please choose check in date");
        }
        else{
          
            navigate('/home');
        }
    }

  const [auth] = React.useState(true);
  const [anchorEl4, setAnchorEl4] = React.useState(null);

  
  const handleMenu4 = (event) => {
    setAnchorEl4(event.currentTarget);
  };

  const handleClose4 = () => {
    setAnchorEl4(null);
  };

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
                <Link id="ca" to="/home">
                    <Stack direction={"row"}>

                    {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu4}
                color="inherit"
              >
                <Typography
           
            component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
          <AccountCircleIcon/>
          </Typography>
              </IconButton>
              <Menu  style={{marginTop:"3%"}}
                id="menu-appbar"
                anchorEl={anchorEl4}
                anchorOrigin={{
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl4)}
                onClose={handleClose4}
              >
                <MenuItem onClick={handleClose4}><Link to="/adminlogin" style={{color:"black",textDecoration:"none"}}>Admin Login</Link></MenuItem>
                <MenuItem onClick={handleClose4}><Link to="/" style={{color:"black",textDecoration:"none"}}>Logout</Link></MenuItem>
                <MenuItem onClick={handleClose4}><Link to="/userchangepassword" style={{color:"black",textDecoration:"none"}}>Change Password</Link></MenuItem>
                
              </Menu>
            </div>
          )}
                    </Stack>
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
              <Menu style={{marginTop:"3%"}}
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
              <Menu style={{marginTop:"3%"}}
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
                <MenuItem onClick={handleClose2}><Link  style={{color:"black",textDecoration:"none"}}>Chauffer Drive</Link></MenuItem>
                <MenuItem onClick={handleClose2}><Link  style={{color:"black",textDecoration:"none"}}>Food</Link></MenuItem>
                <MenuItem onClick={handleClose2}><Link  style={{color:"black",textDecoration:"none"}}>Hotel</Link></MenuItem>
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
              <Menu style={{marginTop:"3%"}}
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
                <MenuItem onClick={handleClose3}><Link  style={{color:"black",textDecoration:"none"}}>Visa and Passport</Link></MenuItem>
                <MenuItem onClick={handleClose3}><Link to="/health" style={{color:"black",textDecoration:"none"}}>Travel Health</Link></MenuItem>
                <MenuItem onClick={handleClose3}><Link to="/safety" style={{color:"black",textDecoration:"none"}}>Safety Info</Link></MenuItem>
                <MenuItem onClick={handleClose3}><Link to="feedback"  style={{color:"black",textDecoration:"none"}}>Feedback</Link></MenuItem>
               
              </Menu>
            </div>
          )}
            </Stack>
        
          
        </Toolbar>
      </AppBar>
    
      <Box component="main" >
        <div  style={{marginTop:"4.5%", position:"absolute"}}>
      <div>
        <ImageLists/>
      </div>
        </div>
        <div className='picflight'>
          <Stack direction={'column'} spacing={1}>
          <Typography id="trip5">THE DRAGON EXPERIENCE</Typography>
          <Typography id="trip6">Book a flight</Typography>
          <Typography id="trip7">Relax in comfort and discover what it means to Fly Better <br></br>with us.</Typography>

          </Stack>
          
        </div>
        
        <div className='pictypehome'>
          
        <hr></hr><br></br>

            
            <Card>
            <CardContent>
                    <Link to="/adminhome" style={{color:" rgba(197, 15, 15, 0.996)"}}>Log in to earn miles on your trips</Link>
                    <form>
                    <Box
                      component="form"
                      sx={{
                        '& > :not(style)': { m: 1, width: '28ch' },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField type="text" label="Deparute city" variant="outlined"  id="dcity" />
                      <TextField type="text" label="Arraival city" variant="outlined"  id="acity" />
                      <TextField type="date" label="Departure" variant="outlined"  InputLabelProps={{shrink: true,}} id="hdeparture" />
                      <button  id="homebut" onClick={checkdata}>Show Flights</button>
                      
                    </Box>
                    </form>
    
                  
            </CardContent>
            </Card>
            </div>

        <div className='Homeflight'>
          
        <p className='whyflight'>Why should I book a flight through Dragon Air? </p>
          <Stack direction="row" spacing={12}>
            
            <div>
              <Typography >
              
              <CardActions>
              <img width="200px" height="200px" src={Hoteltree} alt="e" id="circle"/>

              </CardActions><br></br>
                 Earn Skywards Miles on every booking 
              </Typography>

             
            </div>
            <div>
              <Typography >
              <CardActions>
                <img width="200px" height="200px" src={Playboy} alt="e" id="circle"/>
              </CardActions><br></br>
              Daily offers and rates to suit every budget
              </Typography>
            </div>
            <div>
               <Typography>
             <CardActions>
              <img width="200px" height="200px" src={Hotelsis} alt="e" id="circle"/>
             </CardActions><br></br>
               24/7 contact centre support,<br></br> available in 42 languages
               </Typography>
            </div>
            <div>
              <Typography>
            <CardActions>
              <img width="200px" height="200px" src={Phone} alt="e" id="circle"/>
            </CardActions><br></br>
              Friends checking online using<br></br> a laptop and a smart phone

              </Typography>
            </div>
          </Stack>
          <hr></hr>


        </div>

       <div  id="homedown">
          
            
            <Stack id="homedownlink" direction={'row'} spacing={35}>


              <Typography><Link style={{textDecoration:"none",color:"gray"}} to="/health">Travel Health</Link></Typography>
              <Typography><Link style={{textDecoration:"none",color:"gray"}} to="/safety">Safety Info</Link></Typography>
              
              <Typography>Visa and Passport</Typography>
              <Typography><Link style={{textDecoration:"none",color:"gray"}} to="/feedback">Feedback</Link></Typography>
              

            </Stack>
            <br></br>
            <br></br>
            <hr id="dhr"></hr>
            <br></br>
           <Stack direction={'row'} spacing={3}>

            
            <Stack id="homedown1">
             <p id="homei">SUBSCRIBE TO OUR SPECIAL OFFER</p>
             <Stack direction={'row'} spacing={3}>
             Save with our latest fares and offers.Unsubscribe or change your preferences
              Subscribe For details on how we use your information, please see our privacy policy.
             </Stack>
              
            </Stack>
            <Stack>
             <p id="homei">DRAGON AIR APP</p>
             Book and manage your flights on the go.
             <Stack direction={'row'} spacing={1}  id="homeicon1">
             <CardMedia id="himg" component="img"image={apple}/>
             <CardMedia id="himg" component="img"image={google}/>
             </Stack>
              
            </Stack>
            <Stack id="homedown2">
             <p id="homei">CONNECT WITH US</p>
             Share your Dragon experience
                <Stack direction={'row'} spacing={3} id="homeicon">

                  <FacebookIcon/>
                  <InstagramIcon/>
                  <TwitterIcon/>
                  <LinkedInIcon/>
                  <YouTubeIcon/>
                </Stack>
               
            </Stack>

           </Stack>
       </div>
      </Box>
    </Box>
  );
}

Homepage.propTypes = {
  window: PropTypes.func,
};

export default Homepage;
