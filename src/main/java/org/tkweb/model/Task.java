package org.tkweb.model;

import com.google.gson.annotations.Expose;

public class Task {

	public static final int UNDEFINED_ID = -1;
	private int id = UNDEFINED_ID;
	@Expose
	private String description;
	@Expose
	private int time;
	@Expose
	private boolean done;

	public Task(String description, int time, boolean done) {
		this.description = description;
		this.time = time;
		this.done = done;
	}

	public Task(int id, String description, int time) {
		this.id = id;
		this.description = description;
		this.time = time;
	}

	public int getId() {
		return id;
	}

	public String getDescription() {
		return description;
	}

	public int getTime() {
		return time;
	}

	public void setId(int id) {
		this.id = id;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public void setTime(int time) {
		this.time = time;
	}

	public boolean idUndefined() {
		return id == UNDEFINED_ID;
	}

	public void setIdUndefined() {
		id = UNDEFINED_ID;
	}
}
