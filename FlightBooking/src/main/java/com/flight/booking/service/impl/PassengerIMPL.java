package com.flight.booking.service.impl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.flight.booking.dto.LoginDTO;
import com.flight.booking.dto.PassengerDTO;
import com.flight.booking.model.Passenger;
import com.flight.booking.repository.PassengerRepository;
import com.flight.booking.response.LoginMessage;
import com.flight.booking.service.PassengerService;

@Service
public class PassengerIMPL implements PassengerService{

	
	@Autowired
    PassengerRepository pr;
   
    @Override
    public String postPassenger(PassengerDTO passengerDTO) {
 
        Passenger user = new Passenger(
 
        		passengerDTO.getId(),
        		passengerDTO.getEmail(),
        		passengerDTO.getPassword(),
        		passengerDTO.getFirstName(),
        		passengerDTO.getLastName(),
        		passengerDTO.getMobileno(),
        		passengerDTO.getGender(),
        		passengerDTO.getAge(),
        		passengerDTO.getType()
 
        );
        pr.save(user);
 
        return user.getEmail();
    }
    
    @Override
    public LoginMessage  loginPassenger(LoginDTO loginDTO) {
    	
       
        Passenger user1 = pr.findByEmail(loginDTO.getEmail());
        
       
        
        if (user1 != null) {
        	
            String password = loginDTO.getPassword();
    
            if (password.equals(password)) {
            	
                Optional<Passenger> user = pr.findOneByEmailAndPassword(loginDTO.getEmail(), password);
                
                if (user.isPresent()) {
                	
                    return new LoginMessage("Login Success", true);
                    
                } 
                else {
                	
                    return new LoginMessage("Password not match", false);
                }
            } 
            else {
 
                return new LoginMessage("Email not exist", false);
            }
        }
        else {
        	
            return new LoginMessage("check your email and password", false);
        }
 
 
    }
    
}
