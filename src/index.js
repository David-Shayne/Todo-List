import "./css/normalize.css";
import "./css/base.css";
import dataParser from "./modules/dataParser";
import { TodoItem, TodoProject } from "./modules/todoData";
import JSON_PROJ_DATA from "./data/PROJECTS.json";

const items = dataParser.parseProjectArray(JSON_PROJ_DATA);
console.log(items);
