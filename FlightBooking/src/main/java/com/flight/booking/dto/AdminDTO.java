package com.flight.booking.dto;

import java.time.LocalDate;

public class AdminDTO {
	
	

	private int id;
	
	private String adminname;
	
	private String password;
	
	private String email;
	
	private LocalDate birth;
	
	private LocalDate joining;
	
	private int age;
	
	private int experience;
	
	private String gender;
	
	private String mobileno;
	
	AdminDTO(){}
	
	public AdminDTO(int id, String adminname, String password, String email, LocalDate birth, LocalDate joining,
			int age, int experience, String gender, String mobileno) {
		super();
		this.id = id;
		this.adminname = adminname;
		this.password = password;
		this.email = email;
		this.birth = birth;
		this.joining = joining;
		this.age = age;
		this.experience = experience;
		this.gender = gender;
		this.mobileno = mobileno;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getAdminname() {
		return adminname;
	}

	public void setAdminname(String adminname) {
		this.adminname = adminname;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public LocalDate getBirth() {
		return birth;
	}

	public void setBirth(LocalDate birth) {
		this.birth = birth;
	}

	public LocalDate getJoining() {
		return joining;
	}

	public void setJoining(LocalDate joining) {
		this.joining = joining;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public int getExperience() {
		return experience;
	}

	public void setExperience(int experience) {
		this.experience = experience;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getMobileno() {
		return mobileno;
	}

	public void setMobileno(String mobileno) {
		this.mobileno = mobileno;
	}


	

	
	
	
	
}
