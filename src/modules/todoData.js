//Module that includes data objects for the todo functionality
class TodoObject {
	#id = crypto.randomUUID();

	constructor(title, desc = "") {
		this.title = title;
		this.desc = desc;
	}

	get id() {
		return this.#id;
	}
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

	// Matches a todo item to the passed ID and removes it
	removeTodoItem = function (todoItemId) {
		this.#todoItemArray.forEach((currentTodoItem, index) => {
			if (currentTodoItem.id === todoItemId) {
				this.#todoItemArray.splice(index, 1);
			}
		});
	};

	get todoItemArray() {
		return this.#todoItemArray;
	}

	overwriteTodoItemArray = function (todoItemArray) {
		this.#todoItemArray = todoItemArray;
	};
}

class TodoItem extends TodoObject {
	#completed;
	#priority;

	constructor(title, desc, priority = 1, completed = false, dueDate = Date.now()) {
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
