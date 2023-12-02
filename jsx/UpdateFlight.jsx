import axios from 'axios';
import React,{useEffect,useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';

import AdminAppBar from './AdminAppBar';
import {FormLabel, Stack, TextField, Typography } from '@mui/material';
import AdminList from './AdminNestList';

function UpdateFlight () {
    
    const {id}=useParams();
   
    const [values,setValues]=useState({
        id:id,
        from:"",
        to:"",
        departure:"",        
        returning:"",        
        departuretime:"",        
        arrivingtime:"",        
        seats:"",        
        ticket:"",        
        flightname:"",        
        flightnumber:"",        
        price:""     
    })
    useEffect(()=>{
        axios.get('http://localhost:8080/flightbyid/'+id)
        .then(res=>{
            
            setValues({...values,id: res.data.id,
                from: res.data.from,
                to: res.data.to,
                departure: res.data.departure,
                returning: res.data.returning,
                departuretime: res.data.departuretime,
                arrivingtime: res.data.arrivingtime,
                seats: res.data.seats,
                ticket: res.data.ticket,
                flightname: res.data.flightname,
                flightnumber: res.data.flightnumber,
                price: res.data.price
                
               
            })
        })
        .catch(err => console.log(err))
    },[])
    const navigate = useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault();
      
        axios.put('http://localhost:8080/flights/'+id,values)
        .then(res=>{
            console.log(res)
            navigate('/manageflight');
        })
        .catch(err => console.log(err))
    } 
        return (

          
            <div>

<AdminAppBar/>
    <Stack direction={"row"} spacing={1}>
        <AdminList flex={2}/>
        <div style={{marginTop:"2cm",marginLeft:"7.5cm"}}>

        <Typography id="flightlist">Update A Flight Details </Typography><hr></hr>
        
        <div>

        

            <form onSubmit={handleSubmit}>
               
                    
                        <p>
                            <FormLabel>BASIC INFO</FormLabel>
                            </p>
                    
                    <Stack direction={'column'} spacing={4}>
                        <Stack direction={'row'} spacing={3}>

                        
                        <TextField  style={{width:"7cm"}} type="text" label="Flight name" variant="outlined" value={values.flightname} onChange={e => setValues({...values,flightname: e.target.value})} required id="fname" />
                        <TextField  style={{width:"7cm"}} type="text" label="Flight number" variant="outlined" value={values.flightnumber} onChange={e => setValues({...values,flightnumber: e.target.value})} required  id="fnumber" />
                       
                        
                        <TextField  style={{width:"7cm"}} type="text" label="Flying from"  variant="outlined" value={values.from} onChange={e => setValues({...values,from: e.target.value})} required  id="from" />
                        <TextField  style={{width:"7cm"}} type="text" label="Flying to" variant="outlined"value={values.to} onChange={e => setValues({...values,to: e.target.value})} required  id="to" />
                        </Stack>
                        
                        <Stack direction={'row'} spacing={3}>

                        <TextField  style={{width:"7cm"}} InputLabelProps={{shrink: true}}  label="Departure" type="date" value={values.departure} onChange={e => setValues({...values,departure: e.target.value})} required  id="dep"/>
                        <TextField  style={{width:"7cm"}} InputLabelProps={{shrink: true}} label="Returning" type="date" value={values.returning} onChange={e => setValues({...values,returning: e.target.value})} required  id="ret" />

                        <TextField  style={{width:"7cm"}} type="text" label="Departure time" variant="outlined" value={values.departuretime} onChange={e => setValues({...values,departuretime: e.target.value})} required id="dtime" />
                        <TextField  style={{width:"7cm"}} type="text" label="Arriving time" variant="outlined" value={values.arrivingtime} onChange={e => setValues({...values,arrivingtime: e.target.value})} required  id="atime" />
                        </Stack>
                    
                        <Stack direction={'row'} spacing={3}>

                        <TextField  style={{width:"7cm"}} type="number" label="Seats" variant="outlined" value={values.seats} onChange={e => setValues({...values,seats: e.target.value})} required  id="seats" />
                        <TextField style={{width:"7cm"}} type="text" label="Ticket" variant="outlined" value={values.ticket} onChange={e => setValues({...values,ticket: e.target.value})} required  id="ticket" />
                        <TextField  style={{width:"7cm"}} type="number" label="Price" variant="outlined" value={values.price} onChange={e => setValues({...values, price: e.target.value})} required id="price" />
                        <button style={{borderRadius:"4%",width:"7cm",borderColor:"#2c3136",backgroundColor:"#2c3136",color:"white"}}>UPDATE FLIGHT</button>
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
 
export default UpdateFlight;