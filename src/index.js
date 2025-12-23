import "./css/normalize.css";
import "./css/base.css";
import JsonClassesConverter from "./modules/JsonClassesConverter";
import InternalState from "./modules/InternalState";
import INITIAL_STATE_DATA from "./data/INITIAL_STATE_DATA.json";
import LocalStorageAPI from "./modules/LocalStorageAPI";

const todoState = new InternalState();
console.log(todoState.getState());
todoState.setState(JsonClassesConverter.getJsonToStateObject(INITIAL_STATE_DATA));
console.log(todoState.getState());
const Json = JsonClassesConverter.getStateObjectToJson(todoState.getState());

LocalStorageAPI.storeState(Json);
