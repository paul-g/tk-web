package org.tkweb.resource.demo;

import java.util.ArrayList;
import java.util.List;

import org.restlet.data.Form;
import org.restlet.data.Parameter;
import org.restlet.resource.Get;
import org.restlet.resource.Post;
import org.restlet.resource.ServerResource;

public class TimeKeeperResource extends ServerResource {

	private static final List<String> values = new ArrayList<String>();

	@Get
	public String getResource() {
		return "Hello World!" + values.toString();
	}

	@Post
	public void addValue() {
		values.add(getFirstValue("miau"));
	}

	private String getFirstValue(String param) {

		Form form = getRequest().getResourceRef().getQueryAsForm();

		System.out.println("*********Start PARAMS***********");
		for (Parameter p : form) {
			System.out.println("name: " + p.getName() + " value: "
					+ p.getValue());
		}

		System.out.println("*********End PARAMS***********");
		return form.getFirstValue(param);
	}
}
