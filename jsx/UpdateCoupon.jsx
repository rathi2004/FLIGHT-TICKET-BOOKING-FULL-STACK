import axios from 'axios';
import React,{useEffect,useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';

import AdminAppBar from './AdminAppBar';
import {FormLabel, Stack, TextField, Typography } from '@mui/material';
import AdminList from './AdminNestList';
import '../css/AdminCoupon.css'

function UpdateCoupon () {
    
    const {cid}=useParams();
   
    const [values,setValues]=useState({
        cid:cid,
        offers:"",
        couponinfo:""
          
    })
    useEffect(()=>{
        axios.get('http://localhost:8080/getcouponbyid/'+cid)
        .then(res=>{
            
            setValues({...values,cid: res.data.cid,
                offers: res.data.offers,
                couponinfo: res.data.couponinfo
               
            })
        })
        .catch(err => console.log(err))
    },[])
    const navigate = useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault();
      
        axios.put('http://localhost:8080/editcoupon/'+cid,values)
        .then(res=>{
            console.log(res)
            navigate('/admincoupon');
        })
        .catch(err => console.log(err))
    } 
        return (

          
            <div>

<AdminAppBar/>
    <Stack direction={"row"} spacing={1}>
        <AdminList flex={2}/>
        <div style={{marginTop:"2cm",marginLeft:"7.5cm"}}>

        <Typography id="flightlist">Update A Coupon Details </Typography><hr></hr>
        
        <div>

        

            <form onSubmit={handleSubmit}>
               
                    
                        <p>
                            <FormLabel>BASIC INFO</FormLabel>
                            </p>
                    
                    <Stack direction={'column'} spacing={4}>
                       

                        
                        <TextField  style={{width:"7cm"}} type="text" label="Offers" variant="outlined" value={values.offers} onChange={e => setValues({...values,offers: e.target.value})} required  />
                        <TextField  style={{width:"30cm"}} type="text" label="Discription" variant="outlined" value={values.couponinfo} onChange={e => setValues({...values,couponinfo: e.target.value})} required  />
                       
                        <button style={{borderRadius:"4%",height:"1.5cm",width:"7cm",borderColor:"#2c3136",backgroundColor:"#2c3136",color:"white"}}>UPDATE COUPON</button>
   
                <FormLabel>Your wings already exist. All you have to do is fly.</FormLabel>
                    </Stack>
                   
               

            
            </form>

            </div>
    </div>
    </Stack>
</div>
        );
    
}
 
export default UpdateCoupon;