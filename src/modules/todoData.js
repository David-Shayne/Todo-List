//Module that includes data objects for the todo functionality
class TodoObject {
	#id;

	constructor(title, desc = "", id = crypto.randomUUID()) {
		this.title = title;
		this.desc = desc;
		this.#id = id;
	}

	get id() {
		return this.#id;
	}

	set id(id) {
		return id;
	}
}

class TodoProject extends TodoObject {
	#todoItemArray;

	//Takes in a parsed JSON object to create the instance
	constructor({ title, desc, todoItemArray = [], id }) {
		super(title, desc, id);
		this.#todoItemArray = todoItemArray;
		this.id = id;
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

	// Returns a cleaned object including private properties
	toCleanObject() {
		const cleanedTodoItemArray = this.todoItemArray.map((todo) => todo.toCleanObject());
		return { title: this.title, desc: this.desc, id: this.id, todoItemArray: cleanedTodoItemArray };
	}
}

class TodoItem extends TodoObject {
	#completed;
	#priority;

	//Takes in a parsed JSON object to create the instance
	constructor({ title, desc, priority = 1, completed = false, dueDate = Date.now() } = {}) {
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

	// Returns a cleaned object including private properties
	toCleanObject() {
		return {
			title: this.title,
			desc: this.desc,
			id: this.id,
			priority: this.priority,
			completed: this.completed,
		};
	}
}

export { TodoItem, TodoProject };
