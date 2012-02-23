package org.tkweb.model;

import org.ektorp.CouchDbConnector;
import org.ektorp.support.CouchDbRepositorySupport;

public class TaskRepository extends CouchDbRepositorySupport<Task> {

	public TaskRepository(CouchDbConnector db) {
		super(Task.class, db);
	}

}