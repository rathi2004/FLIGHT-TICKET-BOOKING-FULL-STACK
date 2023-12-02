import React, {useState } from 'react';
import { Link} from 'react-router-dom';
import '../css/UserForgetPassword.css';
import { Button, Stack, Typography } from '@mui/material';
import axios from 'axios';


function ChangePassword () {
    
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    } else if (name === 'confirmPassword') {
      setConfirmPassword(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    if (password !== confirmPassword) {
      console.error('New password and confirm password do not match.');
      return;
    }


    axios.put(`http://localhost:8080/updatepassword/${password}/${email}`, {
      email: email,
      newPassword: password,
    })
      .then((res) => {
        console.log(res.data);
        if (res.data.message === "not updated")
              {
                alert("Not Updated");
              }
                else
              {
                  alert("updated");
              }
      })
      .catch((error) => {
        console.error('Error changing password:', error);
      });
  };
        return (
            <div className='adminall'>


                  <Stack direction={"row"} spacing={2}>
                
                    <div id="userforgetcontent">
                        
                        <h2 id="userforget1">User Change Password</h2> 
                        <p>with your company account</p>

                            <Stack direction={"column"} spacing={4}>
                                <form onSubmit={handleSubmit}>
                                    <p>

                                    <label id="userlable1" for="useremail">Email</label>
                                    </p>
                                    <p><input type="email" id="useremail" name="email" value={email} onChange={handleChange}
                                    /></p>

                                    <label id="userlable2" for="userpassword">New Password</label>
                                    <p><input type="password" id="userpassword" name="password"  value={password} onChange={handleChange}/></p>
                                    <label id="userlable3" for="userpassword">Confirm Password</label>
                                    <p><input type="password" id="userpassword" name="confirmPassword"  value={confirmPassword} onChange={handleChange}/></p>
                                    
                                    <button id="userbut">Change Password</button>
                                </form>

                                <div class="text-info">
                                    <Button><Link to="/" style={{textDecoration:"none",color:"rgba(36, 11, 54, 0.8)"}}>User Login</Link></Button>
                                </div>
                            </Stack>
                    </div>
                    <div class="userforgetimg">
                        <Stack direction={"column"} spacing={1} id="userforget2">

                            <Typography><h1>Dragon Air</h1></Typography>
                            <Typography><p>Commodo labore do voluptate do tempor adipisicing dolore enim labore officia adipisicing ea labore</p></Typography>
                        </Stack>
                        

                    </div>
            
                  </Stack>           

            </div>
        
        );
    }

 
export default ChangePassword;