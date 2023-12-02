package com.flight.booking.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import com.flight.booking.model.AdminLogin;

@EnableJpaRepositories
@Repository
public interface AdminLoginRepository extends JpaRepository<AdminLogin,Integer> {
	
	AdminLogin findByEmail(String email);
	Optional<AdminLogin> findOneByEmailAndPassword(String email,String password);

}
