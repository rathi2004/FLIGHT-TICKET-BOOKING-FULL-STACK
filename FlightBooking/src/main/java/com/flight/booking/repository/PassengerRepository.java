package com.flight.booking.repository;


import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import com.flight.booking.model.Passenger;

@EnableJpaRepositories
@Repository

public interface PassengerRepository extends JpaRepository<Passenger,Integer>{

	Passenger findByEmail(String email);
	Optional<Passenger> findOneByEmailAndPassword(String email,String password);

}
