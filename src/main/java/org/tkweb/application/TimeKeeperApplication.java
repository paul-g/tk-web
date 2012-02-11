package org.tkweb.application;

import java.util.ArrayList;
import java.util.List;

import org.restlet.Application;
import org.tkweb.model.Task;

public class TimeKeeperApplication extends Application {

	static List<Task> tasks = new ArrayList<Task>();
	private static int idGen = 1;

	public TimeKeeperApplication() {
		super();
		System.out.println("Starting application!");
		addTask(new Task("First task", 10, true));
		addTask(new Task("Second task", 30, false));
	}

	public static List<Task> getTasks() {
		return tasks;
	}

	public static void addTask(Task task) {
		if (task.idUndefined()) {
			task.setId(getNewId());
		}
		tasks.add(task);
	}

	private static int getNewId() {
		return idGen++;
	}

	public static void removeTask(int id) {
		for (Task t : tasks)
			if (t.getId() == id) {
				tasks.remove(t);
				break;
			}
	}

	public static void updateTask(Task task) {
		removeTask(task.getId());
		addTask(task);
	}
}
