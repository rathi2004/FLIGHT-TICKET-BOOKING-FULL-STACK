import React from 'react';

import Box from '@mui/material/Box';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FlightIcon from '@mui/icons-material/Flight';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Tooltip from '@mui/material/Tooltip';
import ArrowRight from '@mui/icons-material/ArrowRight';
import { useNavigate } from 'react-router-dom';
import FeedbackIcon from '@mui/icons-material/Feedback';
import Home from '@mui/icons-material/Home';
import Settings from '@mui/icons-material/Settings';
import People from '@mui/icons-material/People';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { Collapse } from '@mui/material';



const FireNav = styled(List)({
  '& .MuiListItemButton-root': {
    paddingLeft: 24,
    paddingRight: 24,
  },
  '& .MuiListItemIcon-root': {
    minWidth: 0,
    marginRight: 16,
  },
  '& .MuiSvgIcon-root': {
    fontSize: 20,
  },
});

export default function AdminNestList() {
  const [openPlace, setOpenPlace] = React.useState(false);
  const navigate=useNavigate();
  
  
    const handleClickPlace = () => {
        setOpenPlace(!openPlace);
    }
    const AddFlight =() =>{
      navigate('/addflight');
  }
    const FlightList =() =>{
      navigate('/adminflightlist');
  }
  const Dashboard =() =>{
  navigate('/adminhome');
  }
  const RegUser =() =>{
  navigate('/userlist');
  }
  const ManageFlight =() =>{
  navigate('/manageflight');
  }
  const Feedback =() =>{
    navigate('/adminfeedback');
    }
  const ManageCoupon =() =>{
    navigate('/admincoupon');
    }
  
  return (
    <div>
    <Box sx={{ display: 'flex',height:'19.3cm',marginTop:"1.7cm",position:"fixed", background: { paper: '#2c3136' }}}>
      <ThemeProvider
        theme={createTheme({
          components: {
            MuiListItemButton: {
              defaultProps: {
                disableTouchRipple: true,
              },
            },
          },
          palette: {
            mode: 'dark',
            primary: { main: 'rgb(102, 157, 246)' },
            background: { paper: '#2c3136' },
          },
        })}
      >
        <Paper elevation={0} style={{borderRadius:"0%"}}>
          <FireNav component="nav" disablePadding>
            <ListItemButton >
              <ListItemIcon sx={{ fontSize: 20 }}>🔥</ListItemIcon>
              <ListItemText
                sx={{ my: 0 }}
                
                primary="Admin panel"
                primaryTypographyProps={{
                  fontSize: 17,
                  fontWeight: 'medium',
                  letterSpacing: 0,
                }}
              />
            </ListItemButton>
            <Divider />
            <ListItem component="div" disablePadding>
              <ListItemButton sx={{ height: 56 }}>
                <ListItemIcon>
                  <Home style={{color:'#37a6c4'}}/>
                </ListItemIcon>
                <ListItemText
                  primary="Dashboard"
                  primaryTypographyProps={{
                    color: '#37a6c4',
                    fontWeight: 'medium',
                    variant: 'body2',
                  }}
                  onClick={Dashboard}
                />
              </ListItemButton>
              <Tooltip title="Project Settings">
                <IconButton
                  size="large"
                  sx={{
                    '& svg': {
                      color: 'rgba(255,255,255,0.8)',
                      transition: '0.2s',
                      transform: 'translateX(0) rotate(0)',
                    },
                    '&:hover, &:focus': {
                      bgcolor: 'unset',
                      '& svg:first-of-type': {
                        transform: 'translateX(-4px) rotate(-20deg)',
                      },
                      '& svg:last-of-type': {
                        right: 0,
                        opacity: 1,
                      },
                    },
                    '&:after': {
                      content: '""',
                      position: 'absolute',
                      height: '80%',
                      display: 'block',
                      left: 0,
                      width: '1px',
                      bgcolor: 'divider',
                    },
                  }}
                >
                  <Settings />
                  <ArrowRight sx={{ position: 'absolute', right: 4, opacity: 0 }} />
                </IconButton>
              </Tooltip>
            </ListItem>
            <Divider />
            <Box style={{width:"7cm"}}
              
            >
              <ListItemButton onClick={handleClickPlace}>
            <ListItemIcon>
                <FlightIcon style={{color:"#585c64"}}/>
            </ListItemIcon>
            <ListItemText primary="Flight" />
            {openPlace ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
            <Collapse in={openPlace} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }} style={{backgroundColor:"rgba(0, 0, 0, 0.32)"}}>
           
            <ListItemText primary="Add Flight" onClick={AddFlight} />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} style={{backgroundColor:"rgba(0, 0, 0, 0.32)"}}>
            
            <ListItemText primary="Manage Flight" onClick={ManageFlight}  />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} style={{backgroundColor:"rgba(0, 0, 0, 0.32)"}}>
           
            <ListItemText primary="List Flight" onClick={FlightList}/>
          </ListItemButton>
          
          
         
        </List>
            </Collapse>
            <ListItemButton>
        <ListItemIcon>
            <AirplaneTicketIcon style={{color:"#585c64"}}/>
            </ListItemIcon>
            <ListItemText primary='Booking'/>
        </ListItemButton><ListItemButton>
        <ListItemIcon>
            <People style={{color:"#585c64"}}/>
            </ListItemIcon>
            <ListItemText primary='Reg User' onClick={RegUser}/>
        </ListItemButton>
        <ListItemButton>
        <ListItemIcon>
            <FeedbackIcon  style={{color:"#585c64"}}/>
            </ListItemIcon>
            <ListItemText primary='Feedback' onClick={Feedback}/>
        </ListItemButton>
        <ListItemButton>
        <ListItemIcon>
            <LocalOfferIcon  style={{color:"#585c64"}}/>
            </ListItemIcon>
            <ListItemText primary='ManageCoupon' onClick={ManageCoupon}/>
        </ListItemButton>
        
            </Box>

          </FireNav>
        </Paper>
      </ThemeProvider>
      
    </Box>
    </div>
  );
}

