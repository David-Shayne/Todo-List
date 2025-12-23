import { TodoProject } from "./todoClasses";

// Single responsibility is to hold and modify an internal state object of todo data
export default class InternalState {
	static #state;

	static getState() {
		return this.#state;
	}

	static setState(stateObject) {
		this.#state = stateObject;
	}

	// Deletes project from internal state by matching UUID
	static deleteProject(id) {
		this.#state = this.#state.filter((project) => id !== project.id);
	}

	// Returns first matching project from internal state by matching UUID
	static getProject(id) {
		const project = this.#state.filter((project) => id === project.id)[0];

		if (!project) {
			throw new Error(`Project with id ${id} not found`);
		}

		return project;
	}

	// Adds a project to internal state
	static addProject(projectInstance) {
		if (!(projectInstance instanceof TodoProject)) {
			throw new Error("Project must be an instance of TodoProject");
		}

		this.#state.push(projectInstance);
	}

	static modifyProject(id, paramater, value) {
		const projectInstance = this.getProject(id);

		if (!projectInstance[paramater]) {
			throw new Error(`Paramater ${paramater} not found in project instance`);
		}

		projectInstance[paramater] = value;
	}
}
