import "./css/normalize.css";
import "./css/base.css";
import JsonToClasses from "./modules/JsonToClasses";
import { TodoItem, TodoProject } from "./modules/todoData";
import JSON_PROJ_DATA from "./data/PROJECTS.json";
import InternalState from "./modules/InternalState";

const state = new InternalState(JsonToClasses.parseAllData(JSON_PROJ_DATA));
const id = "a";

// state.deleteProject(id);
state.addProject(new TodoProject({ title: "hello world" }));
console.log(state.getState());
