package com.flight.booking.service;

import com.flight.booking.dto.LoginDTO;
import com.flight.booking.dto.PassengerDTO;
import com.flight.booking.response.LoginMessage;

public interface PassengerService {

	String postPassenger(PassengerDTO passengerDTO);
	LoginMessage loginPassenger(LoginDTO loginDTO);
}
