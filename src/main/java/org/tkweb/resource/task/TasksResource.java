package org.tkweb.resource.task;

import java.io.IOException;
import java.util.List;
import java.util.Scanner;

import org.restlet.representation.Representation;
import org.restlet.resource.Get;
import org.restlet.resource.Post;
import org.restlet.resource.ServerResource;
import org.tkweb.application.TimeKeeperApplication;
import org.tkweb.model.Task;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

public class TasksResource extends ServerResource {

	@Get
	public String getResource() {
		Gson gson = new Gson();
		List<Task> tasks = TimeKeeperApplication.getTasks();
		return gson.toJson(tasks);
	}

	@Post("json")
	public Representation acceptRepresentation(Representation representation) {
		System.out.println("HIT POST - Tasks");
		try {
			Scanner sc = new Scanner(representation.getStream());
			StringBuilder sb = new StringBuilder();
			while (sc.hasNext()) {
				sb.append(sc.nextLine());
			}
			Gson gson = new GsonBuilder()
					.excludeFieldsWithoutExposeAnnotation().create();
			Task task = gson.fromJson(sb.toString(), Task.class);
			task.setIdUndefined();
			TimeKeeperApplication.addTask(task);
		} catch (IOException e) {
			e.printStackTrace();
		}
		return null;
	}
}
