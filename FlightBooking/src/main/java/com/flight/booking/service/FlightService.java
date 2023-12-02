package com.flight.booking.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import com.flight.booking.model.Flight;
import com.flight.booking.repository.FlightRepository;

import jakarta.transaction.Transactional;

@Service
public class FlightService {
	@Autowired
	FlightRepository fr;
	
	public List<Flight> getAllFlightDetails(){
		
		return fr.findAll();
	}
	
	
	
	public Flight postFlight(@RequestBody Flight id) {
		
		return fr.save(id);
		
	}
	
	public Flight putFlight(@RequestBody Flight id) {
		
		return fr.save(id);
		
	}
	
	public Flight getFlightDetailsById(@RequestParam int id) {
		
		return fr.findById(id).orElse(null);
	}
	
	public void deleteFlightById(@PathVariable int id) {
		
		fr.deleteById(id);
	}

	public List<Flight> sortFlightDetails(@RequestParam String field,@RequestParam String fields) {
		
		return fr.findAll(Sort.by(field,fields));
	}

	public List<Flight> sortFlightDetailsDes(String field) {
		
		
		return fr.findAll(Sort.by(Direction.DESC,field));
		
	}

	public List<Flight> sortFlightDetailsTwo(String field1, String field2) {
		
		return fr.findAll((Sort.by(Direction.DESC,field1)).and (Sort.by(Direction.ASC,field2)));
	}

	public List<Flight> pageFlightDetails(int offset, int pagesize) {
		
		Page<Flight> paging=fr.findAll(PageRequest.of(offset, pagesize));
		return paging.getContent();
	}

	public List<Flight> pageSort(int offset, int pagesize, String field) {
		
		Page<Flight> paging=fr.findAll(PageRequest.of(offset, pagesize).withSort(Sort.by(field)));
		return paging.getContent();
	}

	public List<Flight> getSortPrefix(String prefix) {
		
		return fr.findByFlightnameStartingWith(prefix);
	}

	public List<Flight> getSortSuffix(String suffix) {
		
		return fr.findByFlightnameEndingWith(suffix);
	}

	public List<Flight> positionalParameter(String from, String to) {
		
		return fr.getFlightByFrom(from, to);
	}

	public List<Flight> namedParameter(String flightname) {
		
		return fr.getFlightByFlightname(flightname);
	}

	@Transactional
	public int deleteFlightnumber(String flightnumber) {
		
		return fr.deleteFlightByFlightnumber(flightnumber);
	}

	@Transactional
	public int UpdateFlight(int seats, String flightnumber) {
		
		return fr.updateSeats(seats, flightnumber);
	}

	
	
	
	

	
	
	

}
