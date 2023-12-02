import * as React from 'react';

import MenuItem from '@mui/material/MenuItem';

import { Stack } from '@mui/system';

import {Card, CardContent, TextField, Typography } from '@mui/material';

import { useNavigate } from 'react-router-dom';

import FormLabel from '@mui/material/FormLabel';
import axios from "axios";
import { useState } from "react";
import '../css/UserSignup.css';

function Signup(){

  const [firstName, setfName] = useState("");
  const [lastName, setlName] = useState("");
  const [password, setPass] = useState("");
  const [mobileno, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const[gender,setGender]=useState("");
  const[age,setAge]=useState("");
  const[type,setType]=useState("");

  const navigate=useNavigate();
   async function handleSubmit(event)
    {
        event.preventDefault();
    try
        {
         await axios.post("http://localhost:8080/postpassenger",
        {
       
        email:email,
        password:password,
        firstName: firstName,
        lastName:lastName,
        mobileno:mobileno,
        gender:gender,
        age:age,
        type:type
        });
          
        
        alert("User Registeration Successful");

          setfName("");
          setlName("");
          setPass("");
          setMobile("");
          setEmail("");
          setGender("");
          setAge("");
          setType("");

          if(setfName!==""&&setlName!==""&&setPass!==""&&setMobile!==""&&setEmail!==""&&setGender!==""&&setAge!==""&&setType!==""){

            navigate("/");
          }

        }
    catch(err)
    {
      alert("User Registation Failed");
    }

   }


    return(
        <div className="signup">

        <p id="sign1">FLY BETTER</p>
                                <div id="sign2">
                                    <p id="signletspace">LOYALTY</p>
                                    <p id="sign3">Join Dragon Skywards</p><br></br>
                                    <p id="sign5">Open up a world of rewards every time you travel. <br></br>Enjoy reward flights, upgrades, exclusive benefits and more.
                                    </p>
                                </div>
                <div >
            <Card id="sign6">
                <CardContent>

                    <form onSubmit={handleSubmit} >
                        
                            
                                <p>
                                    <FormLabel id="tripcolor">Your name must be entered in English as it appears on your passport.</FormLabel>
                                    </p>
                            
                            <Stack direction={'column'} spacing={4}>
                                <Stack direction={'row'} spacing={3}>

                                <TextField style={{width:"4cm"}} select label="Type" onChange={(event) =>{setType(event.target.value);}} >
                                    {title.map((option) => (
                                        <MenuItem key={option.value} value={option.value} >
                                        {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField >


                                <TextField  style={{width:"6cm"}} type="text" label="First name" variant="outlined" onChange={(event) =>{setfName(event.target.value);}}  id="fname" />
                                <TextField style={{width:"6cm"}}  type="text"  label="Last name" variant="outlined"  onChange={(event) =>{setlName(event.target.value);}} id="lname" />
                                </Stack>
                                <Stack direction={'row'} spacing={2}>

                                <TextField style={{width:"8.4cm"}} type="email"  label="Email" variant="outlined" onChange={(event) =>{setEmail(event.target.value);}}  id="email" />
                                <TextField style={{width:"8.4cm"}} type="password"  label="Password" variant="outlined" onChange={(event) =>{setPass(event.target.value);}} id="pass"/>
                                </Stack>
                                <Stack direction={'row'} spacing={3} >

                                    <TextField style={{width:"4cm"}} select label="Gender" onChange={(event) =>{setGender(event.target.value);}}>
                                    {genders.map((option) => (
                                        <MenuItem key={option.value} value={option.value} >
                                        {option.label}
                                        </MenuItem>
                                    ))}
                                    </TextField>

                                    <TextField style={{width:"6cm"}} type="number"  label="Age" variant="outlined" onChange={(event) =>{setAge(event.target.value);}} id="age" />
                                    <TextField style={{width:"6cm"}} type="text"  label="Mobileno" variant="outlined" onChange={(event) =>{setMobile(event.target.value);}} id="mobileno" />

                                </Stack>
                        <Typography>By creating an account you are agreeing to the Dragon Skywards programme rules</Typography>
                            </Stack>
                           
                       
                        <button id="signbutton" class="btn btn-secondary" >CREATE ACCOUNT</button><br></br>

                    
                    </form>

                </CardContent>

            </Card>
        </div>

        </div>
    )
}

const genders = [
    {
        value: 'Female',
        label: 'Female',
    },
    {
        value: 'Male',
        label: 'Male ',
    },
    {
        value: 'Other',
        label: 'Other',
    },
    
];
const title = [
    {
        value: 'Miss',
        label: 'Miss',
    },
    {
        value: 'Mr',
        label: 'Mr ',
    },
    {
        value: 'Mrs',
        label: 'Mrs',
    },
    {
        value: 'Ms',
        label: 'Ms',
    }
    
];

export default Signup;