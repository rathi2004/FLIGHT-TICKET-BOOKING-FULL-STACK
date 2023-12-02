package com.flight.booking.model;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import jakarta.persistence.Table;

@Entity
@Table(name="flight_details")
public class Flight {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
	
	@Column(name="flying_from",nullable = false, length = 20)
    private String from;
	
	@Column(name="flying_to",nullable = false, length = 20)
    private String to;
	
	@Column(name = "departure_date")
    private LocalDate departure;
	
	@Column(name = "returning_data")
    private LocalDate returning;
	
	@Column(name = "departure_time")
	private String departuretime;
	
	@Column(name = "arraival_time")
	private String arrivingtime;
	
	@Column(name = "available_seats")
	private int seats;
	
	@Column(name = "available_ticket")
	private String ticket;
	
	@Column(name="flight_name")
	private String flightname;
	
	@Column(name="flight_number")
	private String flightnumber;
	
	private int price;
	
	
	


	public Flight(){}
	
	public int getPrice() {
		return price;
	}
	
	public void setPrice(int price) {
		this.price = price;
	}
	
	public String getDeparturetime() {
		return departuretime;
	}

	public void setDeparturetime(String departuretime) {
		this.departuretime = departuretime;
	}

	public String getArrivingtime() {
		return arrivingtime;
	}

	public void setArrivingtime(String arrivingtime) {
		this.arrivingtime = arrivingtime;
	}

	public String getFlightname() {
		return flightname;
	}

	public void setFlightname(String flightname) {
		this.flightname = flightname;
	}

	public String getFlightnumber() {
		return flightnumber;
	}

	public void setFlightnumber(String flightnumber) {
		this.flightnumber = flightnumber;
	}


	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFrom() {
		return from;
	}

	public void setFrom(String from) {
		this.from = from;
	}

	public String getTo() {
		return to;
	}

	public void setTo(String to) {
		this.to = to;
	}


	public LocalDate getDeparture() {
		return departure;
	}

	public void setDeparture(LocalDate departure) {
		this.departure = departure;
	}

	public LocalDate getReturning() {
		return returning;
	}

	public void setReturning(LocalDate returning) {
		this.returning = returning;
	}

	public int getSeats() {
		return seats;
	}

	public void setSeats(int seats) {
		this.seats = seats;
	}

	public String getTicket() {
		return ticket;
	}

	public void setTicket(String ticket) {
		this.ticket = ticket;
	}
	
	
	
	
	
	

}
