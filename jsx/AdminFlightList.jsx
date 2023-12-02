
import axios from "axios";
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import {useEffect,useState} from 'react'
import Paper from '@mui/material/Paper';
import { Stack, Typography } from '@mui/material';
import AdminAppBar from './AdminAppBar';
import AdminList from './AdminNestList';
import { styled, alpha } from '@mui/material/styles';
import '../css/AdminFlightList.css';


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
  
function AdminFlightLists(){

  const [data,setData]=useState([])
  const [records,setRecords]= useState([])
  useEffect(()=>{
   axios.get(`http://localhost:8080/allflight`)
   .then(res=>{
     setData(res.data)
     setRecords(res.data);
   })
   .catch(err=>console.log(err));
  },[])
  const Filter = (event)=>{
   setRecords(data.filter(f=>f.flightname.toLowerCase().includes(event.target.value)))
   
  }
      
      

      
    return(

        <div>

                <AdminAppBar/>
                <Stack direction={"row"} spacing={0.3}>
                    <AdminList flex={2}/>
                    
        <TableContainer id="adminflight1" component={Paper} style={{marginLeft:"7.2cm",marginTop:"1.8cm"}}>
          <Stack direction={"row"} spacing={109} >
           
            <Typography id="flightlist" >Flight List</Typography>
            <Typography id="flightlist">
              
            <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase type="text"onChange={Filter}
              placeholder="Search flight..."
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

            </Typography>
          </Stack>
          <hr></hr>
            <Table sx={{ minWidth: 650 }} >
                <TableHead style={{backgroundColor:"#2c3136"}}>
                    <TableRow >
                        <TableCell id="admintab" >
                        Flight Name
                        </TableCell>
                        <TableCell id="admintab" align="right">
                        Flight Number
                        </TableCell>
                        <TableCell id="admintab" align="right">
                        Departure City
                        </TableCell>
                        <TableCell id="admintab" align="right">
                        Arriving City
                        </TableCell>
                        <TableCell id="admintab" align="right">
                        Departure Date
                        </TableCell>
                        <TableCell id="admintab" align="right">
                        Araival Date
                        </TableCell>
                        <TableCell id="admintab" align="right">
                        Departure Time
                        </TableCell>
                        <TableCell id="admintab" align="right">
                        Araival Time
                        </TableCell>
                        <TableCell id="admintab" align="right">
                        Available Seats
                        </TableCell>
                        <TableCell id="admintab" align="right">
                        Available Ticket
                        </TableCell>
                        <TableCell id="admintab" align="right">
                        Price
                        </TableCell>
                        
                    </TableRow>
                </TableHead>
               

              
                <TableBody>
                {records.map((post) => (
              
              <StyledTableRow key={post.id}>
                            
                            <TableCell component="th" scope="row">
                            {post.flightname}
                            </TableCell>
                            <TableCell align="right">
                            {post.flightnumber}
                            </TableCell>
                            <TableCell align="right">
                            {post.from}
                            </TableCell>
                            <TableCell align="right">
                            {post.to}
                            </TableCell>
                            <TableCell align="right">
                            {post.departure}
                            </TableCell>
                            <TableCell align="right">
                            {post.returning}
                            </TableCell>
                            <TableCell align="right">
                            {post.departuretime}
                            </TableCell>
                            <TableCell align="right">
                            {post.arrivingtime}
                            </TableCell>
                            <TableCell align="right">
                            {post.seats}
                            </TableCell>
                            <TableCell align="right">
                            {post.ticket}
                            </TableCell>
                            <TableCell align="right">
                            {post.price}
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
export default AdminFlightLists;