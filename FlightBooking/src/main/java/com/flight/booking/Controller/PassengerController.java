package com.flight.booking.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.flight.booking.dto.LoginDTO;
import com.flight.booking.dto.PassengerDTO;
import com.flight.booking.model.Passenger;
import com.flight.booking.repository.PassengerRepository;
import com.flight.booking.response.LoginMessage;
import com.flight.booking.service.PassengerService;


@CrossOrigin("*")
@RestController
public class PassengerController {

	@Autowired
	PassengerService ps;
	
	
	@Autowired
	PassengerRepository pr;
	
	@GetMapping("/alldetails")
	
	public List<Passenger> getAllPassenger(){
		
		return pr.findAll();
	}
	
	@PostMapping("/postpassenger")
	
	public String savePassenger(@RequestBody Passenger id) {
		
		pr.save(id);
		return "Details saved";
	}
	
	@PostMapping("/postdetails")
	public String postDetails(@RequestBody PassengerDTO passengerDTO) {
		
			ps.postPassenger(passengerDTO);
		return "Details Saved";
	}
	
	@PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginDTO loginDTO)
    {
   	 LoginMessage loginMessage=ps.loginPassenger(loginDTO);
   	 
   	 return ResponseEntity.ok(loginMessage);
    }
	

	
	
	
	
}
