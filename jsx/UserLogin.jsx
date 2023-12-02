import '../css/UserLogin.css';
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import {Button, IconButton,Stack } from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import {  useState } from "react";
import axios from "axios";
import FormControl from '@mui/material/FormControl';
import userlogin from '../assests/userlogini.webp';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function UserLogin (){
       
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navhome = useNavigate();
  console.log(email);

  async function checkdata(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8080/login", {
        email:email,
        password: password,
        }).then((res) =>
        {
        console.log(res.data);
        let email=document.getElementById("email").value;
        let password=document.getElementById("password").value;

        if(email===""){
          alert("please enter email");
        }

        else if(password===""){
            alert("please enter password");
        }
         else if (res.data.message === "Email not exits")
         {
           alert("Email not exits");
         }
         else if(res.data.message === "Login Success")
         {
            
          navhome("/home");
         }
          else
         {
            alert("check your Email and Password");
         }
      }, fail => {
       console.error(fail); 
});
    }

     catch (err) {
      alert(err);
    }
  
  }

        return (
            
            <div className='bc'>
                <div >

               <Card id="cardsize">
                <Stack direction={"row"} spacing={25}>

                <Typography id="logininput">
               
                    <CardActions>

                        <img id="limg" src={userlogin} alt="e" />

                    </CardActions>
                

                </Typography>
                <Typography id="logininput">
                    <form id="loginform" >

                        <Stack direction={"column"} spacing={4}>


                        <Typography id="logquote">Good To See You Again</Typography>
                        <Button><Link to="/adminlogin" style={{textDecoration:"none"}}>Admin Login</Link></Button>
                        <TextField 
                           value={email}
                           onChange={(event) => {setEmail(event.target.value);
                         }}
                           id="email"
                            label="Email"
                            type="email"
                            autoComplete="current-password"
                        />
                      
                        <FormControl  variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
             id="password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
                        <button  onClick={checkdata} id="logbut" type="button" class="btn btn-secondary">LOGIN</button><br></br>

                        </Stack>

                    </form>
                    <Typography>
                    <Stack direction={"row"} spacing={9}>

                        <Typography><Link to="/signup">Don't have an account?</Link></Typography>
                        <Typography><Link to="/userchangepassword">Forget password?</Link></Typography>

                    </Stack>

                    </Typography>
                </Typography>
                </Stack>
               </Card>
            </div>
                </div>
        );
    
}
 
export default UserLogin;