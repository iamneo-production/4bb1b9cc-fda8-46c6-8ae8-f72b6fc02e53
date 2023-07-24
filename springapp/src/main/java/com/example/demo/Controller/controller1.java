package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.model1;
import com.example.demo.Service.service1;

@CrossOrigin
@RestController
public class controller1 {
	@Autowired
	service1 dservice;
	
	@GetMapping("/displayDetails")
	public List <model1> show() {
		return dservice.showDetails();
	}
	
	@PutMapping("/changeDetails")
	public String update(@RequestBody model1 ee) {
		return dservice.updateDetails(ee);
	}
	
	@DeleteMapping("/removeDetails/{eid}")
	public String delete(@PathVariable("eid") int id) {
		return dservice.deleteDetails(id);
	}
	
	@PostMapping("/postDetails")
	public String add(@RequestBody model1 ee) {
		return dservice.addDetails(ee);
		
	}
}