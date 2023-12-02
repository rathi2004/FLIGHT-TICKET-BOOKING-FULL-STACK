
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
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import '../css/UserList.css';


  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
   
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
     
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
function UserList (){

  const [data,setData]=useState([])
  const [records,setRecords]= useState([])
  useEffect(()=>{
   axios.get(`http://localhost:8080/alldetails`)
   .then(res=>{
     setData(res.data)
     setRecords(res.data);
   })
   .catch(err=>console.log(err));
  },[])
  const Filter = (event)=>{
   setRecords(data.filter(f=>f.email.toLowerCase().includes(event.target.value)))
   
  }

      
      

      
    return(

        <div>

                <AdminAppBar/>
                <Stack direction={"row"} spacing={0.3}>
                    <AdminList flex={2}/>
                    
        <TableContainer id="userlist1" component={Paper} style={{marginLeft:"7.2cm",marginTop:"1.7cm"}}>
        <Stack direction={"row"} spacing={96} >
           
           <Typography id="userlist2" >Registered Users</Typography>
           <Typography id="userlist2">
             
           <Search>
           <SearchIconWrapper>
             <SearchIcon />
           </SearchIconWrapper>
           <StyledInputBase type="text"onChange={Filter}
             placeholder="Search email..."
             inputProps={{ 'aria-label': 'search' }}
           />
         </Search>

           </Typography>
         </Stack>
         <hr></hr>
            <Table sx={{ minWidth: 650 }} >
                <TableHead style={{backgroundColor:"#2c3136"}}>
                    <TableRow >
                       <TableCell id="userlist" align="right">
                        Type
                        </TableCell>
                        <TableCell id="userlist" align="right">
                        Firstname
                        </TableCell>
                        <TableCell id="userlist" align="right">
                        Lastname
                        </TableCell>
                        <TableCell id="userlist" align="right">
                        Email
                        </TableCell>
                        <TableCell id="userlist" align="right">
                        Password
                        </TableCell>
                        <TableCell id="userlist" align="right">
                        Mobile no
                        </TableCell>
                        <TableCell id="userlist" align="right">
                        Gender
                        </TableCell>
                        <TableCell id="userlist" align="right">
                        Age
                        </TableCell>
                        
                       
                        
                    </TableRow>
                </TableHead>
               

              
                <TableBody>
                {records.map((post) => (
              
              <StyledTableRow key={post.id}>
                            
                            <TableCell component="th" scope="row">
                            {post.type}
                            </TableCell>
                            <TableCell align="right">
                            {post.firstName}
                            </TableCell>
                            <TableCell align="right">
                            {post.lastName}
                            </TableCell>
                            <TableCell align="right">
                            {post.email}
                            </TableCell>
                            <TableCell align="right">
                            {post.password}
                            </TableCell>
                            <TableCell align="right">
                            {post.mobileno}
                            </TableCell>
                            <TableCell align="right">
                            {post.gender}
                            </TableCell>
                            <TableCell align="right">
                            {post.age}
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
export default UserList;