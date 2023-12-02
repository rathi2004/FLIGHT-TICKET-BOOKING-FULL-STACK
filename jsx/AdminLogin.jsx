import React, {useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/AdminLogin.css';
import { Button, Stack, Typography } from '@mui/material';
import axios from 'axios';


function AdminLogin () {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navadminhome = useNavigate();

    async function checkdata(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8080/adminlogin", {
        email:email,
        password: password,
        }).then((res) =>
        {
        console.log(res.data);
        let email=document.getElementById("adminemail").value;
        let password=document.getElementById("adminpassword").value;
        console.log(email);

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
            
          navadminhome("/adminhome");
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
            <div className='adminall'>


<Stack direction={"row"} spacing={2}>

            
           
                
                    <div id="adminsigncontent">
                        
                        <h3 id="adminsign1">SIGN IN</h3> 
                        <p>with your company account</p>

                            <Stack direction={"column"} spacing={4}>
                                <form>
                                    <p>

                                    <label id="adminlable" for="adminemail">Email</label>
                                    </p>
                                    <p><input type="email" id="adminemail" name="adminemail" value={email}
                                    onChange={(event) => {setEmail(event.target.value);
                                    }}/></p>

                                    <label id="adminlable" for="adminpassword">Password</label>
                                    <p><input type="password" id="adminpassword" name="adminpassword"  value={password}
                                    onChange={(event) => {
                                        setPassword(event.target.value);
                                    }}/></p>
                                    
                                    <button onClick={checkdata}id="adminbut">Log in</button>
                                </form>

                                <div>
                                    <Button><Link to="/" style={{textDecoration:"none",color:"rgba(36, 11, 54, 0.8)"}}>User Login</Link></Button>
                                </div>
                            </Stack>
                    </div>
                    <div class="adminloginimg">
                        <Stack direction={"column"} spacing={1} id="adminsign2">

                            <Typography><h1>Dragon Air</h1></Typography>
                            <Typography><p>Commodo labore do voluptate do tempor adipisicing dolore enim labore officia adipisicing ea labore</p></Typography>
                        </Stack>
                        

                    </div>
            
</Stack>
                

            </div>
        
        );
    }

 
export default AdminLogin;