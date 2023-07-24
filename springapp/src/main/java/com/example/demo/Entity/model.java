package com.example.demo.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="servie")
public class model {
	@Id
	private String name;
	private String mobilemodel;
	private String probdesc;
    private String date;
	

	

	public String getName() {
		return name;
	}




	public void setName(String name) {
		this.name = name;
	}




	public String getMobilemodel() {
		return mobilemodel;
	}




	public void setMobilemodel(String mobilemodel) {
		this.mobilemodel = mobilemodel;
	}




	public String getProbdesc() {
		return probdesc;
	}




	public void setProbdesc(String probdesc) {
		this.probdesc = probdesc;
	}




	public String getDate() {
		return date;
	}




	public void setDate(String date) {
		this.date = date;
	}




	public model(String name, String mobilemodel, String probdesc, String date) {
		super();
		this.name = name;
		this.mobilemodel = mobilemodel;
		this.probdesc = probdesc;
		this.date = date;
	}




	public model()
	{
		
	}
}

	
	
