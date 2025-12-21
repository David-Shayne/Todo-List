import { TodoItem, TodoProject } from "./todoData";

export default class dataParser {
	constructor() {}

	static #parseTodoItems(todoItemArrayData) {
		const todosArray = [];
		for (let todoItemObj of todoItemArrayData) {
			todosArray.push(new TodoItem(todoItemObj));
		}
		return todosArray;
	}

	static #parseProject(projectData) {
		const project = new TodoProject(projectData);
		project.overwriteTodoItemArray(this.#parseTodoItems(projectData.todoItemArray));
		return project;
	}

	static parseProjectArray(data) {
		const projectArray = [];
		for (let project of data) {
			projectArray.push(this.#parseProject(project));
		}
		return projectArray;
	}
}
