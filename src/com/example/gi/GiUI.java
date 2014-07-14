package com.example.gi;

import javax.servlet.annotation.WebServlet;

import com.vaadin.annotations.Theme;
import com.vaadin.annotations.VaadinServletConfiguration;
import com.vaadin.server.VaadinRequest;
import com.vaadin.server.VaadinServlet;
import com.vaadin.ui.Button;
import com.vaadin.ui.Button.ClickEvent;
import com.vaadin.ui.Button.ClickListener;
import com.vaadin.ui.Component;
import com.vaadin.ui.GridLayout;
import com.vaadin.ui.HorizontalLayout;
import com.vaadin.ui.Label;
import com.vaadin.ui.TextField;
import com.vaadin.ui.UI;
import com.vaadin.ui.VerticalLayout;

@SuppressWarnings("serial")
@Theme("gi")
public class GiUI extends UI implements ClickListener {

	@WebServlet(value = "/*", asyncSupported = true)
	@VaadinServletConfiguration(productionMode = false, ui = GiUI.class)
	public static class Servlet extends VaadinServlet {
	}

	private TextField zipInput;
	private Service service = new Service();
	private TextField cityField;
	private TextField stateField;

	@Override
	protected void init(VaadinRequest request) {
		final VerticalLayout layout = new VerticalLayout();
		layout.setSizeFull();
		setContent(layout);
		
		Component inputArea = createInputArea();
		Component outputArea = createOutputArea();
		
		layout.addComponent(inputArea);
		layout.addComponent(outputArea);
		layout.setExpandRatio(outputArea, 1);
	}
	
	private HorizontalLayout createInputArea() {
		Label label = createLabel("Type Zip Code");
		zipInput = new TextField();
		Button button = new Button("Find City and State");
		button.addClickListener(this);
		HorizontalLayout inputArea = new HorizontalLayout(label, zipInput, button);
		inputArea.setSpacing(true);
		inputArea.setMargin(true);
		inputArea.addStyleName("inputarea");
		inputArea.setWidth("100%");
		inputArea.setHeight(null);
		inputArea.setExpandRatio(button, 1);
		return inputArea;
	}

	private Component createOutputArea() {
		cityField = new TextField();
		cityField.setEnabled(false);
		stateField = new TextField();
		stateField.setEnabled(false);
		GridLayout outputArea = new GridLayout(2,2, createLabel("City"), cityField, createLabel("State"), stateField);
		outputArea.setSpacing(true);
		outputArea.setMargin(true);
		outputArea.addStyleName("outputarea");
		outputArea.setSizeFull();
		outputArea.setRowExpandRatio(1, 1);
		outputArea.setColumnExpandRatio(1, 1);
		return outputArea;
	}

	private Label createLabel(String text) {
		Label label = new Label(text);
		label.setWidth("100px");
		return label;
	}

	@Override
	public void buttonClick(ClickEvent event) {
		String zipCode = zipInput.getValue();
		Address address = service.getAddressForZipCode(zipCode);
		cityField.setValue(address.getCity());
		stateField.setValue(address.getState());
	}

}