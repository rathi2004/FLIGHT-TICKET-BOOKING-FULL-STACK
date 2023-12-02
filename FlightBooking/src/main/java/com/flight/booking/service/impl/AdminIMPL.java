package com.flight.booking.service.impl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.flight.booking.dto.AdminDTO;
import com.flight.booking.dto.AdminLoginDTO;
import com.flight.booking.model.AdminLogin;
import com.flight.booking.repository.AdminLoginRepository;
import com.flight.booking.response.LoginMessage;
import com.flight.booking.service.AdminService;

@Service
public class AdminIMPL implements AdminService {
	
	@Autowired
	AdminLoginRepository ar;
	
	
	@Override
    public String postAdmin(AdminDTO adminDTO) {
 
        AdminLogin user = new AdminLogin(
 
        		adminDTO.getId(),
        		adminDTO.getAdminname(),
        		adminDTO.getPassword(),
        		adminDTO.getEmail(),
        		adminDTO.getBirth(),
        		adminDTO.getJoining(),
        		adminDTO.getAge(),
        		adminDTO.getExperience(),
        		adminDTO.getGender(),
        		adminDTO.getMobileno()
 
        );
        ar.save(user);
 
        return user.getEmail();
    }
    
    @Override
    public LoginMessage  loginAdmin(AdminLoginDTO loginDTO) {
    	
       
        AdminLogin user1 = ar.findByEmail(loginDTO.getEmail());
        
       
        
        if (user1 != null) {
        	
            String password = loginDTO.getPassword();
    
            if (password.equals(password)) {
            	
                Optional<AdminLogin> user = ar.findOneByEmailAndPassword(loginDTO.getEmail(), password);
                
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
