package org.tkweb.model;

import org.ektorp.support.CouchDbDocument;

public class Task extends CouchDbDocument {

	private static final long serialVersionUID = 1L;

	public static final int UNDEFINED_ID = -1;

	private String description;
	private int time;
	private boolean done;

	public Task() {
		super();
	}

	public Task(String description, int time, boolean done) {
		super();
		this.description = description;
		this.time = time;
		this.done = done;
	}

	public Task(int id, String description, int time) {
		super();
		this.description = description;
		this.time = time;
	}

	public String getDescription() {
		return description;
	}

	public int getTime() {
		return time;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public void setTime(int time) {
		this.time = time;
	}

	public void setDone(boolean done) {
		this.done = done;
	}

	public boolean isDone() {
		return done;
	}
}
