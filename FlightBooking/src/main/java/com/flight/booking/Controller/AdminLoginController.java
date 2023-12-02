package com.flight.booking.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.flight.booking.dto.AdminDTO;
import com.flight.booking.dto.AdminLoginDTO;
import com.flight.booking.response.LoginMessage;
import com.flight.booking.service.AdminService;



@CrossOrigin("*")
@RestController
public class AdminLoginController {
	
	@Autowired
	AdminService ls;
	
	@PostMapping("/postadmindetails")
	public String postDetails(@RequestBody AdminDTO adminDTO) {
		
			ls.postAdmin(adminDTO);
		return "Details Saved";
	}
	
	@PostMapping("/adminlogin")
    public ResponseEntity<?> loginUser(@RequestBody AdminLoginDTO loginDTO)
    {
   	 LoginMessage loginMessage=ls.loginAdmin(loginDTO);
   	 
   	 return ResponseEntity.ok(loginMessage);
    }

}
