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
		return this.#state.filter((project) => id === project.id);
	}

	// Adds a project to internal state
	static addProject(projectInstance) {
		this.#state.push(projectInstance);
	}
}
