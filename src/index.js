import "./css/normalize.css";
import "./css/base.css";
import JsonToClasses from "./modules/JsonClassesConverter";
import InternalState from "./modules/InternalState";
import INITIAL_STATE_DATA from "./data/INITIAL_STATE_DATA.json";

const todoState = new InternalState(JsonToClasses.getJsonToStateObject(INITIAL_STATE_DATA));
console.log(todoState.getState());
