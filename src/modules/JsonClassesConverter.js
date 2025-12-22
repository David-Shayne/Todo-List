import { TodoItem, TodoProject } from "./todoClasses";

// Single responsibility is to convert JSON to todo instances and vice versa (used in localStorageAPI and internal state)
export default class JsonClassesConverter {
	constructor() {}

	// Turns an array of JS objects into an array of instanced TodoItem's
	static #parseTodoItems(todoObjects) {
		let todoInstanceArray = [];

		for (let todoObject of todoObjects) {
			const todoInstance = new TodoItem(todoObject);
			todoInstanceArray.push(todoInstance);
		}
		return todoInstanceArray;
	}

	// Turns a JS object into an instanced TodoProject
	static #parseProject(projectObject) {
		// Replacing the current todoItemArray of objects with TodoItem instances
		projectObject.todoItemArray = this.#parseTodoItems(projectObject.todoItemArray);

		return new TodoProject(projectObject);
	}

	// returns an object with todo instances from JSON data
	static getJsonToStateObject(stateJSON) {
		// Converts the JSON state to a JS Object
		const stateObject = JSON.parse(stateJSON);
		const projects = [];

		// Iterates through projects in state object and creates a new object with Instanced projects
		for (let project of stateObject) {
			projects.push(this.#parseProject(project));
		}
		return projects;
	}

	// Takes in the state object and returns a stringified JSON object for storage in LocalStorage
	static getStateObjectToJson(state) {
		const cleanObjectState = state.map((project) => project.toCleanObject());
		return JSON.stringify(cleanObjectState);
	}
}
