import { TodoItem, TodoProject } from "./todoClasses";

export default class JsonToClasses {
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

	static parseAllData(stateJSON) {
		// Converts the JSON state to a JS Object
		const stateObject = JSON.parse(stateJSON);
		const projects = [];

		// Iterates through projects in state object and creates a new object with Instanced projects
		for (let project of stateObject) {
			projects.push(this.#parseProject(project));
		}
		return projects;
	}

	static getStateJSON(state) {
		const cleanObjectState = state.map((project) => project.toCleanObject());
		return JSON.stringify(cleanObjectState);
	}
}
