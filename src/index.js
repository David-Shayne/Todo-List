import "./css/normalize.css";
import "./css/base.css";
import JsonToClasses from "./modules/JsonToClasses";
import InternalState from "./modules/InternalState";
import INITIAL_STATE_DATA from "./data/INITIAL_STATE_DATA.json";

const todoState = new InternalState(JsonToClasses.parseAllData(INITIAL_STATE_DATA));
console.log(todoState.state);
