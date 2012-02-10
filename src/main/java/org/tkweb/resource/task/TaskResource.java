package org.tkweb.resource.task;

import java.io.IOException;
import java.util.Scanner;

import org.restlet.representation.Representation;
import org.restlet.resource.Put;
import org.restlet.resource.ServerResource;
import org.tkweb.application.TimeKeeperApplication;
import org.tkweb.model.Task;

import com.google.gson.Gson;

public class TaskResource extends ServerResource {

	@Put("json")
	public Representation updateTask(Representation representation)
			throws IOException {

		Scanner sc = new Scanner(representation.getStream());
		StringBuilder sb = new StringBuilder();
		while (sc.hasNext()) {
			sb.append(sc.nextLine());
		}

		Gson gson = new Gson();
		Task task = gson.fromJson(sb.toString(), Task.class);

		TimeKeeperApplication.updateTask(task);

		return null;
	}

}
