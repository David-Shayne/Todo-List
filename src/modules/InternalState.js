//I now have the backend classes objects and the ability to transform JSON data into them
//Will use localstorage for browser state and have an internal state (array of projects) running that syncs to it after every updating action.

//State class with an instance of state to monitor the state internally. property is the state passed in and methods are updateTodos, updateProject, updateTotalState. These are CRUD methods.
//Effectively the instance of this state class will be the database stored in local memory and localStorage on browser

// Single responsibility is to hold and modify an internal state
class InternalState {
	#state;

	constructor(state) {
		this.#state = state;
	}

	get state() {
		return this.#state;
	}

	getProjects() {
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

class LocalStorageAPI {}

export { LocalStorageAPI, InternalState };
