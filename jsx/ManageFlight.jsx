
import axios from "axios";
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import Paper from '@mui/material/Paper';
import {Stack, Typography } from '@mui/material';
import AdminAppBar from './AdminAppBar';
import AdminList from './AdminNestList';
import edit from '../assests/editing.png'
import '../css/AdminFlightList.css';
import { styled } from '@mui/material/styles';
import { Link } from "react-router-dom";

  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
   
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
class ManageFlight extends React.Component{

    state = {
        posts: [],
      };
      componentDidMount() {
        axios.get(`http://localhost:8080/allflight`).then((res) => {
          const posts = res.data;
          this.setState({ posts });
        });
      }

      deleteRow(id, e){
        axios.delete(`http://localhost:8080/deleteflight/${id}`)
          .then(res => {
            console.log(res);
            console.log(res.data);
            const posts = this.state.posts.filter(item => item.id !== id);
            this.setState({ posts });
          })
    
      }
     
      render(){

      
    return(

        <div>

                <AdminAppBar/>
                <Stack direction={"row"} spacing={0.3}>
                    <AdminList flex={2}/>
                    
        <TableContainer id="adminflight1" component={Paper} style={{marginLeft:"7.1cm",marginTop:"1.8cm"}}>
        <Typography id="flightlist">Manage Flight</Typography><hr></hr>
        
            <Table sx={{ minWidth: 650 }} >
                <TableHead style={{backgroundColor:"#2c3136"}}>
                    <TableRow>
                        <TableCell id="admintab">
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
                        Returnning Date
                        </TableCell>
                        <TableCell id="admintab" align="right">
                        Departure Time
                        </TableCell>
                        <TableCell id="admintab" align="right">
                        Arriving Time
                        </TableCell>
                        <TableCell id="admintab" align="right">
                        Available Seats
                        </TableCell>
                        <TableCell id="admintab" align="right">
                        Available Ticket
                        </TableCell>
                        <TableCell id="admintab" align="right">
                        Flight Price
                        </TableCell>
                        <TableCell id="admintab" align="right">
                        Delete
                        </TableCell>
                        <TableCell id="admintab" align="right">
                        Update
                        </TableCell>
                        
                    </TableRow>
                </TableHead>
               

              
                <TableBody>
                {this.state.posts.map((post,i) => (
              
              <StyledTableRow key={i}>
                            
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
                            <TableCell align="right">
                          
            
                            <DeleteIcon style={{width:"15px",height:"15px" ,color:"#585c64"}}  onClick={(e) => this.deleteRow(post.id, e)}/>
            
                            </TableCell>
                            <TableCell align="right">
                            <Link to={`/flights/${post.id}`} ><img style={{width:"15px",height:"15px"}} src={edit} alt="e"/></Link>
                            
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
}
export default ManageFlight;