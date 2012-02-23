package org.tkweb.application;

import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.Logger;
import org.ektorp.CouchDbConnector;
import org.ektorp.CouchDbInstance;
import org.ektorp.http.HttpClient;
import org.ektorp.http.StdHttpClient;
import org.ektorp.impl.StdCouchDbInstance;
import org.restlet.Application;
import org.tkweb.model.Task;
import org.tkweb.model.TaskRepository;

public class TimeKeeperApplication extends Application {

	public static Logger log = Logger.getLogger(TimeKeeperApplication.class);

	static List<Task> tasks = new ArrayList<Task>();
	private static int idGen = 1;

	private static CouchDbConnector db;

	private static TaskRepository taskRepository;

	public TimeKeeperApplication() {
		super();
		log.info("Starting application!");

		log.info("Connecting to CouchDB using ektorp");
		HttpClient httpClient = new StdHttpClient.Builder().build();
		CouchDbInstance dbInstance = new StdCouchDbInstance(httpClient);
		db = dbInstance.createConnector("first_db", true);

		log.info("Loading tasks from database");
		taskRepository = new TaskRepository(db);
		// TODO
	}

	public static List<Task> getTasks() {
		return taskRepository.getAll();
	}

	public static void addTask(Task task) {

		/*
		 * if (task.idUndefined()) { task.setId(getNewId()); } tasks.add(task);
		 */
		System.out.println("Add task");
		taskRepository.add(task);
	}

	private static int getNewId() {
		return idGen++;
	}

	public static void removeTask(int id) {
		/*
		 * for (Task t : tasks) if (t.getId() == id) { tasks.remove(t); break; }
		 */
		System.out.println("Remove task");
	}

	public static void updateTask(Task task) {
		taskRepository.update(task);
	}

}
