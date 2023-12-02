import React from 'react';
import AdminAppBar from './AdminAppBar';
import {FormLabel, Stack, TextField, Typography } from '@mui/material';

import axios from "axios";
import { useState } from "react";
import AdminList from './AdminNestList';


function AddCoupon(){

    const [offers, setOffers] = useState("");
    const [couponinfo, setCouponinfo] = useState("");

   async function handleSubmit(event)
    {
        event.preventDefault();
    try
        {
       
       
         await axios.post("http://localhost:8080/postcoupons",
        {
       
            offers:offers,
            couponinfo:couponinfo,
           
            
        
        });
        
        alert("SUCCESS: Coupons Posted Successfully");
        
          setOffers("");
          setCouponinfo("");
          
          

        }
    catch(err)
    {
      alert("Coupon Not Posted");
    }

   }
    return(
    <div>

        <AdminAppBar/>
            <Stack direction={"row"} spacing={1}>
                <AdminList flex={2}/>
                <div style={{marginTop:"2cm",marginLeft:"7.5cm"}}>

                <Typography id="flightlist">Post A Coupon Details </Typography><hr></hr>
                
                <div>

                

                    <form onSubmit={handleSubmit} >
                       
                            
                                <p>
                                    <FormLabel>BASIC INFO</FormLabel>
                                    </p>
                            
                            <Stack direction={'column'} spacing={4}>
                               
                                
                                <TextField  style={{width:"7cm"}} type="text" label="Offers" variant="outlined" onChange={(event) =>{setOffers(event.target.value);}} required  id="fname" />
                                <TextField  style={{width:"30cm"}} type="text" label="Description" variant="outlined" onChange={(event) =>{setCouponinfo(event.target.value);}} required  id="fnumber" />
                               
                               
                                <button style={{borderRadius:"4%",height:"1.5cm",width:"7cm",borderColor:"#2c3136",backgroundColor:"#2c3136",color:"white"}}>POST FLIGHT</button>
                               
                        <FormLabel>Your wings already exist. All you have to do is fly.</FormLabel>
                            </Stack>
                           
                       

                    
                    </form>

                    </div>
            </div>
            </Stack>
    </div>
    );
}
export default AddCoupon;