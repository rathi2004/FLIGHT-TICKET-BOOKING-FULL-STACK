import { Stack } from '@mui/material';
import React, { Component } from 'react';
import AdminAppBar from './AdminAppBar';
import AdminList from './AdminNestList';
import AdminCards from './AdminCards';
class AdminHome extends Component {
 
    render() { 
        return (
            <div>
                <AdminAppBar/>
                <Stack direction={"row"} spacing={1}>
                    <AdminList flex={2}/>
                    <AdminCards/>
                </Stack>
            </div>
        );
    }
}
 
export default AdminHome;