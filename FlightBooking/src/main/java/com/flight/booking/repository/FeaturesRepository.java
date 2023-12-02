package com.flight.booking.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.flight.booking.model.Features;

@Repository
public interface FeaturesRepository extends JpaRepository<Features,Integer>{

	
}
