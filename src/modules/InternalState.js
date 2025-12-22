// Single responsibility is to hold and modify an internal state of todo data
export default class InternalState {
	#state;

	constructor(state) {
		this.#state = state;
	}

	getState() {
		return this.#state;
	}

	// Deletes project from internal state by matching UUID
	deleteProject(id) {
		this.#state = this.#state.filter((project) => id !== project.id);
	}

	// Returns project from internal state by matching UUID
	getProject(id) {
		return this.#state.filter((project) => id === project.id);
	}

	// Adds a project to internal state
	addProject(projectInstance) {
		this.#state.push(projectInstance);
	}
}
