import { TodoItem, TodoProject } from "./todoData";

export default class JsonToClasses {
	constructor() {}

	static #parseTodoItems(todoItemObjects) {
		let itemInstanceArray = [];
		for (let itemObject of todoItemObjects) {
			const itemInstance = new TodoItem(itemObject);
			itemInstanceArray.push(itemInstance);
		}
		return itemInstanceArray;
	}

	static #parseProject(projectObject) {
		projectObject.todoItemArray = this.#parseTodoItems(projectObject.todoItemArray);
		const projectInstance = new TodoProject(projectObject);
		return projectInstance;
	}

	static parseAllData(projectArray) {
		const projects = [];
		for (let project of projectArray) {
			projects.push(this.#parseProject(project));
		}
		return projects;
	}
}
