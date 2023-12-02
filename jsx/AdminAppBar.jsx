import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AdbIcon from '@mui/icons-material/Adb';

import { Stack } from '@mui/material';
import Adminsetting from './adminset';

function AdminAppBar() {
 

  return (
    
    <AppBar position="fixed" style={{color:'#37a6c4' ,  backgroundColor:"#3e454c"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <Stack direction={"row"}>
            <Stack direction={"row"}>

                <AdbIcon sx={{ display: { xs: 'none'}, mr: 1 }} />
                <Typography>
                  Flight Ticket Booking | Admin Panel
                </Typography>
            </Stack>
              <Adminsetting/>
            <Stack>
            </Stack>
          </Stack>
          
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default AdminAppBar;