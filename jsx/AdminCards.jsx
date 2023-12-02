import { Box, Button, Card, CardActions, CardContent, Stack, Typography } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import '../css/AdminCard.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class AdminCards extends Component {
   
    render() { 
      
        return (
           

            <Box style={{marginTop:"1.7cm",marginLeft:"7.2cm"}}>
                <p id="dashboard">Dashboard</p><hr></hr>
<Stack direction={"row"} spacing={2}>

    <Card>
      
      <CardContent id="admincbox1">
        <Typography id="admintypo">
          REG USERS
        </Typography>
       
      </CardContent>
      <CardActions id="admincaac">
        <Button id="admincabut"><Link style={{textDecoration:"none"}} to="/userlist">FULL DETAIL<KeyboardArrowRightIcon/></Link></Button>
        
      </CardActions>
    </Card>
    <Card>
      
      <CardContent id="admincbox2">
        <Typography id="admintypo">
          BOOKED
        </Typography>
       
      </CardContent>
      <CardActions id="admincaac">
        <Button id="admincabut">FULL DETAIL<KeyboardArrowRightIcon/></Button>
        
      </CardActions>
    </Card>
    <Card>
      
      <CardContent id="admincbox3">
        <Typography id="admintypo">
          FLIGHT LIST
        </Typography>
       
      </CardContent>
      <CardActions id="admincaac">
        <Button id="admincabut"><Link style={{textDecoration:"none"}} to="/adminflightlist">FULL DETAIL<KeyboardArrowRightIcon/></Link></Button>
        
      </CardActions>
    </Card>
    <Card>
      
      <CardContent id="admincbox4">
        <Typography id="admintypo">
          FEEDBACK
        </Typography>
       
      </CardContent>
      <CardActions id="admincaac">
        <Button id="admincabut"><Link style={{textDecoration:"none"}} to="/adminfeedback">FULL DETAIL</Link><KeyboardArrowRightIcon/></Button>
        
      </CardActions>
    </Card>
    
</Stack>
            </Box>
           
        );
    }
}
 
export default AdminCards;