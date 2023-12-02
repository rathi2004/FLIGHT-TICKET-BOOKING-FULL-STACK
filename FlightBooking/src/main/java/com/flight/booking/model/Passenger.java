package com.flight.booking.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="passengerdetails")

public class Passenger {

	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
     
    @Column(nullable = false, unique = true, length = 45)
    private String email;
     
    @Column(nullable = false, length = 64)
    private String password;
     
    @Column(nullable = false, length = 20)
    private String firstName;
     
    @Column( nullable = false, length = 20)
    private String lastName;
    
    @Column( nullable = false, length = 12)
    private String mobileno;
    
    @Column( nullable = false, length = 12)
    private String gender;
    
    @Column( nullable = false,length = 3)
    private int age;
    
    @Column(nullable=false, length = 4)
    private String type;
    
    Passenger(){}
    
    public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	
    
    public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

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

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getMobileno() {
		return mobileno;
	}

	public void setMobileno(String mobileno) {
		this.mobileno = mobileno;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public Passenger(int id, String email, String password, String firstName, String lastName, String mobileno,
			String gender, int age, String type) {
		super();
		this.id = id;
		this.email = email;
		this.password = password;
		this.firstName = firstName;
		this.lastName = lastName;
		this.mobileno = mobileno;
		this.gender = gender;
		this.age = age;
		this.type = type;
	}
    
    
    
    
}
