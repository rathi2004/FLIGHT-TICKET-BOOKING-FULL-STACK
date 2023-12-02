package com.flight.booking.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.flight.booking.model.Flight;
import com.flight.booking.repository.FlightRepository;
import com.flight.booking.service.FlightService;

import io.swagger.v3.oas.annotations.tags.Tag;

@CrossOrigin("*")
@RestController
@Tag(name="Get",description="get data")
public class FlightController {

	@Autowired
	FlightService fs;
	
	@Autowired
	FlightRepository fr;
	
	
	@GetMapping("/allflight")
	public List<Flight> getAllFlightDetails(){
		
		return fs.getAllFlightDetails();
	}
	
	@PostMapping("/postFlight")
	public String postFlightDetails(@RequestBody Flight id) {
		
		fs.postFlight(id);
		return "Flight details are Saved";
	}
	
	@PutMapping("/putFlight")
	public String putFlightDetails(@RequestBody Flight id) {
		
		fs.putFlight(id);
		return "Flight details are Edited";
	}
	
	
	
	@PutMapping("/flights/{id}")
	 public ResponseEntity<Flight> updateFlight(@PathVariable("id") int id, @RequestBody Flight flight){
	   Flight b = fr.findById(id).get();
	      if(b.getId()!=0) {
	        b.setPrice(flight.getPrice());
	        b.setDeparturetime(flight.getDeparturetime());
	        b.setArrivingtime(flight.getArrivingtime());
	        b.setFlightname(flight.getFlightname());
	        b.setFlightnumber(flight.getFlightnumber());
	        b.setFrom(flight.getFrom());
	        b.setTo(flight.getTo());
	        b.setDeparture(flight.getDeparture());
	        b.setReturning(flight.getReturning());
	        b.setSeats(flight.getSeats());
	        b.setTicket(flight.getTicket());
	       
	      }
	  return new ResponseEntity<Flight>(fr.save(b),HttpStatus.OK);
	 }
	
	
	
	@GetMapping("/flightbyid/{id}")
	
	public Flight getFlightById(@PathVariable int id) {
		
		return fs.getFlightDetailsById(id);
	}
	
	@DeleteMapping("/deleteflight/{id}")
	
	public String deleteFlight(@PathVariable int id) {
		
		fs.deleteFlightById(id);
		return "Flight details are deleted";
	}
	
	@GetMapping("/sortflightDetails")
	
	public List<Flight> sortFlightDetails(@RequestParam String field,@RequestParam String fields){
		
		return fs.sortFlightDetails(field,fields);
	}
	
	@GetMapping("/sortflightdetailsdes")
	public List<Flight> sortFlightDetailsDes(@RequestParam String field){
		
		return fs.sortFlightDetailsDes(field);
	}
	
	@GetMapping("/sortflightdetailstwo")
	public List<Flight> sortFlightDetailsTwo(@RequestParam String field1,@RequestParam String field2){
		
		return fs.sortFlightDetailsTwo(field1,field2);
	}
	
	@GetMapping("/pagination")
	public List<Flight> pageFlightDetails(@RequestParam int offset,@RequestParam int pagesize){
		
		return fs.pageFlightDetails(offset,pagesize);
	}
	
	@GetMapping("/pagesort")
	public List<Flight> pageSort(@RequestParam int offset,@RequestParam int pagesize,@RequestParam String field){
		
		return fs.pageSort(offset,pagesize,field);
	}
	
	@GetMapping("/sortprefix")
	public List<Flight> sortPrefix(@RequestParam String prefix){
		
		return fs.getSortPrefix(prefix);
	}
	
	@GetMapping("/sortsuffixflight")
	public List<Flight> sortSuffix(@RequestParam String suffix){
		
		return fs.getSortSuffix(suffix);
	}
	
	@GetMapping("/positionalparameter")
	public List<Flight> positionalParameter(@RequestParam String from,@RequestParam String to){
		
		return fs.positionalParameter(from,to);
	}
	
	@GetMapping("/namedparameter")
	public List<Flight> namedParameter(@RequestParam String flightname){
		
		return fs.namedParameter(flightname);
	}
	
	@DeleteMapping("/deletequery")
	public String deleteFlightnumber(@RequestParam String flightnumber) {
		
		int result=fs.deleteFlightnumber(flightnumber);
		if(result>0) {
			
			return "Flightnumber record deleted";
		}
		else {
			
			return "Flightnumber record not deleted";
		}
	}
	
	@PutMapping("/updatequery")
	public String UpdateFlight(@RequestParam int seats,@RequestParam String flightnumber) {
		
		int result=fs.UpdateFlight(seats,flightnumber);
		if(result>0) {
			
			return "Flightseats record updated";
		}
		else {
			
			return "Flightseats record not updated";
		}
	}
	
	
	
}
