import "./css/normalize.css";
import "./css/base.css";
import dataParser from "./modules/dataParser";
import { TodoItem, TodoProject } from "./modules/todoData";
import JSON_PROJ_DATA from "./data/PROJECTS.json";

let data = JSON_PROJ_DATA;

const items = dataParser.parseProjectArray(data);
console.log(items);
