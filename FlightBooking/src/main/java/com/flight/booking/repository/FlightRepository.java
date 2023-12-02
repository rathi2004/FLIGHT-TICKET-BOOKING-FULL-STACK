package com.flight.booking.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.flight.booking.model.Flight;

@Repository
public interface FlightRepository extends JpaRepository<Flight,Integer>{
	
	List<Flight> findByFlightnameStartingWith(String prefix);

	List<Flight> findByFlightnameEndingWith(String suffix);
	
	//positional parameter
	
	@Query("select s from Flight s where s.from=?1 and s.to=?2")
	List<Flight> getFlightByFrom(String from,String to);
	
	
	
	//named parameter
	
	@Query("select s from Flight s where s.flightname=:flightname")
	List<Flight> getFlightByFlightname(String flightname);
	
	
	//DML-Delete
	
	@Modifying
	@Query("delete from Flight s where s.flightnumber=?1")
	public int deleteFlightByFlightnumber(String flightnumber);
	
	@Modifying
	@Query("update Flight s set s.seats=?1 where s.flightnumber=?2")
	public int updateSeats(int seats,String flightnumber);
	
	
	
}
