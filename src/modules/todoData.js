//Module that includes data objects for the todo functionality
class TodoObject {
	#id = crypto.randomUUID();

	constructor(title, desc) {
		this.title = title;
		this.desc = desc;
	}

	getID = function () {
		return this.#id;
	};
}

class TodoProject extends TodoObject {
	#todoItemArray;

	constructor(title, desc, todoItemArray = []) {
		super(title, desc);
		this.#todoItemArray = todoItemArray;
	}

	addTodoItem = function (todoItem) {
		this.#todoItemArray.push(todoItem);
	};

	removeTodoItem = function (todoItemId) {
		this.#todoItemArray.forEach((currentTodoItem, index) => {
			currentTodoItem.getID() === todoItemId ?? this.#todoItemArray.splice(index, 1);
		});
	};

	getTodoItemArray = function () {
		return this.#todoItemArray;
	};
}

class TodoItem extends TodoObject {
	#completed;
	#priority;

	constructor(title, desc, priority, completed, dueDate) {
		super(title, desc);
		this.#priority = priority;
		this.#completed = completed;
		this.dueDate = dueDate;
	}

	get completed() {
		return this.#completed;
	}

	toggleCompleted = function () {
		this.#completed = !this.completed;
	};

	set priority(int) {
		if (int > 1 && int <= 3) {
			this.#priority = int;
			return;
		}

		throw new Error("Priority value must be an integer between 1 and 3");
	}

	get priority() {
		return this.#priority;
	}
}

export { TodoItem, TodoProject };
