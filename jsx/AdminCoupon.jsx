
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
import {Button, Stack, Typography } from '@mui/material';
import AdminAppBar from './AdminAppBar';
import AdminList from './AdminNestList';
import edit from '../assests/editing.png'
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/material/styles';
import { Link } from "react-router-dom";
import '../css/AdminCoupon.css'

  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
   
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
class AdminCoupon extends React.Component{

    state = {
        posts: [],
      };
      componentDidMount() {
        axios.get(`http://localhost:8080/getallcoupon`).then((res) => {
          const posts = res.data;
          this.setState({ posts });
        });
      }

      deleteRow(cid, e){
        axios.delete(`http://localhost:8080/deletecoupon/${cid}`)
          .then(res => {
            console.log(res);
            console.log(res.data);
            const posts = this.state.posts.filter(item => item.cid !== cid);
            this.setState({ posts });
          })
    
      }
     
      render(){

      
    return(

        <div>

                <AdminAppBar/>
                <Stack direction={"row"} spacing={0.3}>
                    <AdminList flex={2}/>
                    
        <TableContainer id="admincoupon1" component={Paper} style={{marginLeft:"7.1cm",marginTop:"1.8cm"}}>
          <Stack direction={"column"} spacing={4}>

              <Typography id="couponlist">Manage Coupons</Typography>
              <Button style={{borderRadius:"2px",marginTop:"1%",height:"1cm",width:"4cm",backgroundColor:"#2c3136"}} disableElevation><Link to ="/addcoupon" style={{textDecoration:"none",color:"white"}}><AddIcon/>COUPON</Link></Button>
          </Stack>
          <hr></hr>
            <Table sx={{ minWidth: 650 }} >
                <TableHead style={{backgroundColor:"#2c3136"}}>
                    <TableRow>
                        <TableCell id="admintab">
                       Offers
                        </TableCell>
                        <TableCell id="admintab" align="left">
                        Description
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
                            {post.offers}
                            </TableCell>
                            <TableCell align="left">
                            {post.couponinfo}
                            </TableCell>
                           
                            <TableCell align="right">
                          
            
                            <DeleteIcon style={{width:"15px",height:"15px" ,color:"#585c64"}}  onClick={(e) => this.deleteRow(post.cid, e)}/>
            
                            </TableCell>
                            <TableCell align="right">
                            <Link to={`/updatecoupon/${post.cid}`} ><img style={{width:"15px",height:"15px"}} src={edit} alt="e"/></Link>
                            
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
export default AdminCoupon;