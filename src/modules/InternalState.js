//I now have the backend classes objects and the ability to transform JSON data into them
//Will use localstorage for browser state and have an internal state (array of projects) running that syncs to it after every updating action.

//State class with an instance of state to monitor the state internally. property is the state passed in and methods are updateTodos, updateProject, updateTotalState. These are CRUD methods.
//Effectively the instance of this state class will be the database stored in local memory and localStorage on browser

export default class InternalState {
	#state;

	constructor(state) {
		this.#state = state;
	}

	updateState(data, location) {
		this.#state[location] = data;
	}

	getProject(id) {
		let project;

		//
		this.#state.forEach((element) => {
			if (id === element.id) {
				project = element;
				return;
			}
		});

		return project;
	}

	getState() {
		return this.#state;
	}
}
