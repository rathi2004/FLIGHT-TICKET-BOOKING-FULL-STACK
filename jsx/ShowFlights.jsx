
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import AirlinesIcon from '@mui/icons-material/Airlines';
import '../css/ShowFlights.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Appbar from './AppBar';



function ShowFlights (){

    const [records,setRecords]= useState([])
  useEffect(()=>{
   axios.get(`http://localhost:8080/allflight`)
   .then(res=>{
    
     setRecords(res.data);
   })
   .catch(err=>console.log(err));
  },[])
  
    return(
        <div>
            
            <Appbar/>
            <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 1,
              width: 900,
              height: 110,
              marginLeft: 38
            },
          }}
        >
         {records.map((get) => (
      <Paper elevation={10} key={get.id}>

      <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 100,
         
        },
      }}
    >
      <Paper elevation={0} >
        <div class="aa">

            <div className="text2">
              {get.from}
            </div>

            <div className="text3">
              {get.departuretime}
            </div>
            
        </div>
      </Paper>

      <Paper elevation={0} >
          <div class="aa2">
            {get.departure}
            <div>
              <FlightTakeoffIcon/>
            </div>
            <div>
              {get.returning}
            </div>
          </div>
      </Paper>

      <Paper elevation={0} >
        <div class="aa">
            <div className="text2">
              {get.to}
            </div>
            <div className="text3">
              {get.arrivingtime}
            </div>
        </div>
      </Paper>
      <Paper elevation={0} >
        <div class="aa3">
            <AirlinesIcon/>
            <div className="text4">
              {get.flightnumber}
            </div>
        </div>
      </Paper>
      <Paper elevation={0} >
        <div class="aa3">
            <AirlinesIcon/>
            <div className="text4">
              {get.flightname}
            </div>
        </div>
      </Paper>
      <Paper elevation={0} >
        <div>
            <div className="text7">
              Seats:{get.seats}
            </div>
            <div className="text5">
              {get.ticket}
            </div>
            <div className="text9">
              Price : {get.price}
            </div>
          </div>
        </Paper>
      <Paper elevation={0} ><button className="btn2"><Link to="/booking" id="ca">BOOK NOW</Link></button></Paper>
    </Box>
      </Paper>
      ))}
    </Box>
    </div>
    )
}

export default ShowFlights;