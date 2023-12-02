
import axios from "axios";
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import {useEffect,useState} from 'react'
import Paper from '@mui/material/Paper';
import { Stack, Typography } from '@mui/material';
import AdminAppBar from './AdminAppBar';
import AdminList from './AdminNestList';
import { styled} from '@mui/material/styles';
import '../css/AdminFlightList.css';


  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
   
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
 
  
function AdminFeedback(){


  const [records,setRecords]= useState([])
  useEffect(()=>{
   axios.get(`http://localhost:8080/allfeedback`)
   .then(res=>{
    
     setRecords(res.data);
   })
   .catch(err=>console.log(err));
  },[])
  
      
      

      
    return(

        <div>

                <AdminAppBar/>
                <Stack direction={"row"} spacing={0.3}>
                    <AdminList flex={2}/>
                    
        <TableContainer id="adminflight1" component={Paper} style={{marginLeft:"7.2cm",marginTop:"1.8cm"}}>
          
           
            <Typography id="flightlist" >Feedback List</Typography>

         
          <hr></hr>
            <Table sx={{ minWidth: 650 }} >
                <TableHead style={{backgroundColor:"#2c3136"}}>
                    <TableRow >
                        <TableCell id="admintab" >
                        Feedback Type
                        </TableCell>
                        <TableCell id="admintab" align="right">
                        Feedback
                        </TableCell>
                    
                        
                    </TableRow>
                </TableHead>
               

              
                <TableBody>
                {records.map((get) => (
              
              <StyledTableRow key={get.id}>
                            
                            <TableCell component="th" scope="row">
                            {get.feedbackType}
                            </TableCell>
                            <TableCell align="right">
                            {get.comment}
                            </TableCell>
                           
                         </StyledTableRow>
                         ))}
                </TableBody>
            </Table>
        </TableContainer>
                </Stack>
           
            

           
        </div>
    )
      
}
export default AdminFeedback;