package com.example.demo.Service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.demo.Entity.model1;
import com.example.demo.Repository.Repository1;




@org.springframework.stereotype.Service
public class service1 {
	
		@Autowired
		Repository1 repo;
		public String addDetails(model1 ee) {
			repo.save(ee);
			return "Data added";
		}
		public String updateDetails(model1 ee) {
			repo.saveAndFlush(ee);
			return "Data updated";
		}
		
		public String deleteDetails(int id) {
			repo.deleteById(id);
			return "data Deleted";
		}
		public List<model1> showDetails() {
				return repo.findAll();
		}

}