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

	// Returns project from internal state by matching UUID
	static getProject(id) {
		const project = this.#state.filter((project) => id === project.id);

		if (!project[0]) {
			console.error(`Project with id ${id} not found`);
			return null;
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
}
