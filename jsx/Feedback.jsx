import React from 'react';
import {Card, CardContent } from '@mui/material';
import Vedio3 from '../assests/video3.mp4';
import { useNavigate } from 'react-router-dom';
import Appbar from './AppBar';
import '../css/Feedback.css';
import axios from "axios";
import { useState } from "react";

function Feedback(){
   
    const [feedbackType, setFeedbackType] = useState("");
    const [comment, setComment] = useState("");

    async function handleSubmit(event)
    {
        event.preventDefault();
    try
        {
       
       
         await axios.post("http://localhost:8080/postfeedback",
        {
       
            feedbackType:feedbackType,
            comment:comment,
           
            
        
        });
        
        alert("SUCCESS: Feedback given Successfully");
        
        setFeedbackType("");
        setComment("");
          
          

        }
    catch(err)
    {
      alert("Feedback not saved");
    }

   }
        
        
        return (
           
            <div >
                <Appbar/>
                <div className='videoTag'>
                    <video  autoPlay loop  
                    style={{position:"absolute",
                    width:"100%",
                    height:"100%" ,
                    left:"50%",
                    top:"50%",
                    objectFit:"cover",
                    transform:"translate(-50%,-50%)",
                    zIndex:"-1",
                    marginTop:"0%"}}>
                         <source src={Vedio3} />
                    </video>   
                 
                </div>
                
                <div id="safesen" >
               
                <b><p className='feedtop1'>Feedback or complaints</p></b>
                <p className='feedtop2'>
                Use this form to make a complaint or to give us feedback on any of our products and services.
                </p>
                
                <Card id="feedbox8">
                    <CardContent>
                    <p><b>FEEDBACK OR COMPLAINT TYPE</b></p>
                    <p>
                    Help us to identify what kind of feedback or complaint you want to send.
                    If this is regarding an Dragon booking but the flight was with another airline
                     e.g. Qantas or flydubai, please select the third option below and include your ticket number in the comments.
                    </p>
                    <form onSubmit={handleSubmit}>
                    <div>
                    <select id="feedinput1" onChange={(event) =>{setFeedbackType(event.target.value);}} required>
                        <option>Feedback or complient type</option>
                        <option>I would like to make a complaint about a past flight or service</option>
                        <option>I would like to give feedback about a past flight or service</option>
                        <option>I would like to five feedback about something else</option>
                    </select>
                    </div>
                    <br></br>
                    <div>
                        <p><b>Comments</b></p>
                        <input type="text" placeholder="Please don't insert special characters " id="feedinput" onChange={(event) =>{setComment(event.target.value);}} required></input>
                    </div><br></br>
                    <button id="feedbutton">Submit</button>
                    </form>
                    </CardContent>
                </Card>
            </div>
            </div>
        );
    }
export default Feedback;