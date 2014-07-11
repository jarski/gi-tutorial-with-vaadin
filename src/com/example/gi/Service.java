package com.example.gi;

public class Service {

	public Address getAddressForZipCode(String zipCode) {
		Address address = new Address();
		address.setZipCode(zipCode);
		address.setCity("City for "+zipCode);
		address.setState("State for "+zipCode);
		return address;
	}

}
