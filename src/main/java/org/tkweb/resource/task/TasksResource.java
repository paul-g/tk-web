package org.tkweb.resource.task;

import org.restlet.data.Form;
import org.restlet.data.Parameter;
import org.restlet.resource.Get;
import org.restlet.resource.Post;
import org.restlet.resource.Put;
import org.restlet.resource.ServerResource;

public class TasksResource extends ServerResource {

	private static final String JSON_STRING = "{ 'success': true,  'results': [ {'id':1, 'description':'A very strange task'}, {'id':2, 'description':'An evil task'} ] }";

	@Get
	public String getResource() {
		return JSON_STRING;
	}

	@Post
	public void addValue() {
		System.out.println("HIT POST - Tasks");
		// values.add(getFirstValue("miau"));
		getFirstValue("");
	}

	@Put
	public void changeValue() {
		System.out.println("HIT PUT - Tasks");
		getFirstValue("");
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
