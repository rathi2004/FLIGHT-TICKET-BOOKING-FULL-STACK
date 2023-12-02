package com.flight.booking.model;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="admin_login")
public class AdminLogin {
	
	
	@Id
	private int id;
	
	@Column(name="admin_name",nullable=false)
	private String adminname;
	
	@Column(name="password",nullable=false)
	private String password;
	
	@Column(name="email",nullable=false,unique=true)
	private String email;
	
	@Column(name="date_birth")
	private LocalDate birth;
	
	@Column(name="date_joining")
	private LocalDate joining;
	
	@Column(name="age")
	private int age;
	
	@Column(name="experience")
	private int experience;
	
	@Column(name="gender")
	private String gender;
	
	@Column(name="mobileno")
	private String mobileno;
	
	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	AdminLogin(){}

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

	public String getMobileno() {
		return mobileno;
	}

	public void setMobileno(String mobileno) {
		this.mobileno = mobileno;
	}

	public AdminLogin(int id, String adminname, String password, String email, LocalDate birth, LocalDate joining,
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

	@Override
	public String toString() {
		return "AdminLogin [id=" + id + ", adminname=" + adminname + ", password=" + password + ", email=" + email
				+ ", birth=" + birth + ", joining=" + joining + ", age=" + age + ", experience=" + experience
				+ ", gender=" + gender + ", mobileno=" + mobileno + "]";
	}

	

	
	
	
	

}
