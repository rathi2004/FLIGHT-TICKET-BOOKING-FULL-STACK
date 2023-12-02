package com.flight.booking.service;

import com.flight.booking.dto.AdminDTO;
import com.flight.booking.dto.AdminLoginDTO;
import com.flight.booking.response.LoginMessage;

public interface AdminService {

	String postAdmin(AdminDTO adminDTO);
	LoginMessage loginAdmin(AdminLoginDTO loginDTO);
}
