package com.example.demo.Repository;



import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.model1;


@org.springframework.stereotype.Repository
public interface  Repository1 extends JpaRepository<model1, Integer>{

}