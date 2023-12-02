package com.flight.booking.dto;

public class AdminLoginDTO {

	
	private String email;
	private String password;
	
	AdminLoginDTO(){}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public AdminLoginDTO(String email, String password) {
		super();
		this.email = email;
		this.password = password;
	}
	
	
}
