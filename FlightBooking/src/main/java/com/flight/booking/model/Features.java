package com.flight.booking.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="features")
public class Features {

	@Id
	private int fid;
	
	@Column(name="flight_type")
	private String type;
	
	@Column(name="flight_class")
	private String classes;
	
	@Column(name="food_type")
	private String food;
	
	@Column(name="special")
	private String special;	
	
	Features(){}

	public int getFid() {
		return fid;
	}

	public void setFid(int fid) {
		this.fid = fid;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getClasses() {
		return classes;
	}

	public void setClasses(String classes) {
		this.classes = classes;
	}

	public String getFood() {
		return food;
	}

	public void setFood(String food) {
		this.food = food;
	}

	public String getSpecial() {
		return special;
	}

	public void setSpecial(String special) {
		this.special = special;
	}

	public Features(int fid, String type, String classes, String food, String special) {
		this.fid = fid;
		this.type = type;
		this.classes = classes;
		this.food = food;
		this.special = special;
	}
	
	
	
}
