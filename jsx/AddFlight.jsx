import React from 'react';
import AdminAppBar from './AdminAppBar';
import { Box, Button, Card, CardContent, FormLabel, Stack, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { useState } from "react";
import AdminList from './AdminNestList';


function AddFlight(){

    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const[departure,setDeparture]=useState("");
    const [returning, setReturning] = useState("");
    const[departuretime,setDeparturetime]=useState("");
    const[arrivingtime,setArrivingtime]=useState("");
    const[seats,setSeats]=useState("");
    const[ticket,setTicket]=useState("");
    const[flightname,setFlightname]=useState("");
    const[flightnumber,setFlightnumber]=useState("");
    const[price,setPrice]=useState("");
    
    

   async function handleSubmit(event)
    {
        event.preventDefault();
    try
        {
       
       
         await axios.post("http://localhost:8080/postFlight",
        {
       
            from:from,
            to:to,
            departure:departure,
            returning:returning,
            departuretime:departuretime,
            arrivingtime:arrivingtime,
            seats:seats,
            ticket:ticket,
            flightname:flightname,
            flightnumber:flightnumber,
            price:price,
            
        
        });
        
        alert("SUCCESS: Flight Details Posted Successfully");
        
          setFrom("");
          setTo("");
          setDeparture("");
          setReturning("");
          setDeparturetime("");
          setArrivingtime("");
          setSeats("");
          setTicket("");
          setFlightname("");
          setFlightnumber("");
          setPrice("");
          

        }
    catch(err)
    {
      alert("User Registation Failed");
    }

   }
    return(
    <div>

        <AdminAppBar/>
            <Stack direction={"row"} spacing={1}>
                <AdminList flex={2}/>
                <div style={{marginTop:"2cm",marginLeft:"7.5cm"}}>

                <Typography id="flightlist">Post A Flight Details </Typography><hr></hr>
                
                <div>

                

                    <form onSubmit={handleSubmit} >
                       
                            
                                <p>
                                    <FormLabel>BASIC INFO</FormLabel>
                                    </p>
                            
                            <Stack direction={'column'} spacing={4}>
                                <Stack direction={'row'} spacing={3}>
                                
                                <TextField  style={{width:"7cm"}} type="text" label="Flight name" variant="outlined" onChange={(event) =>{setFlightname(event.target.value);}} required  id="fname" />
                                <TextField  style={{width:"7cm"}} type="text" label="Flight number" variant="outlined" onChange={(event) =>{setFlightnumber(event.target.value);}} required  id="fnumber" />
                               
                                
                                <TextField  style={{width:"7cm"}} type="text" label="Flying from"  variant="outlined" onChange={(event) =>{setFrom(event.target.value);}} required id="from" />
                                <TextField  style={{width:"7cm"}} type="text" label="Flying to" variant="outlined" onChange={(event) =>{setTo(event.target.value);}} required  id="to" />
                                </Stack>
                                
                                <Stack direction={'row'} spacing={3}>

                                <TextField  required style={{width:"7cm"}} InputLabelProps={{shrink: true}}  label="Departure" type="date" onChange={(event) =>{ setDeparture(event.target.value);}} id="dep"/>
                                <TextField  style={{width:"7cm"}} InputLabelProps={{shrink: true}} label="Returning" type="date" onChange={(event) =>{ setReturning(event.target.value);}} required id="ret" />

                                <TextField  style={{width:"7cm"}} type="text" label="Departure time" variant="outlined" onChange={(event) =>{setDeparturetime(event.target.value);}} required id="dtime" />
                                <TextField  style={{width:"7cm"}} type="text" label="Arriving time" variant="outlined" onChange={(event) =>{setArrivingtime(event.target.value);}} required id="atime" />
                                </Stack>
                            
                                <Stack direction={'row'} spacing={3}>

                                <TextField  style={{width:"7cm"}} type="number" label="Seats" variant="outlined" onChange={(event) =>{setSeats(event.target.value);}}required  id="seats" />
                                <TextField style={{width:"7cm"}} type="text" label="Ticket" variant="outlined" onChange={(event) =>{setTicket(event.target.value);}} required id="ticket" />
                                <TextField  style={{width:"7cm"}} type="number" label="Price" variant="outlined" onChange={(event) =>{setPrice(event.target.value);}} required id="price" />
                                <button style={{borderRadius:"4%",width:"7cm",borderColor:"#2c3136",backgroundColor:"#2c3136",color:"white"}}>POST FLIGHT</button>
                                </Stack>
                              
                                
                               
                                
                               
                               
                        <FormLabel>Your wings already exist. All you have to do is fly.</FormLabel>
                            </Stack>
                           
                       

                    
                    </form>

                    </div>
            </div>
            </Stack>
    </div>
    );
}
export default AddFlight;