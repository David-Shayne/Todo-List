import "./css/normalize.css";
import "./css/base.css";
import JsonClassesConverter from "./modules/JsonClassesConverter";
import InternalState from "./modules/InternalState";
import INITIAL_STATE_DATA from "./data/INITIAL_STATE_DATA.json";
import LocalStorageAPI from "./modules/LocalStorageAPI";

InternalState.setState(JsonClassesConverter.getJsonToStateObject(INITIAL_STATE_DATA));
console.log(InternalState.getState());
const Json = JsonClassesConverter.getStateObjectToJson(InternalState.getState());

LocalStorageAPI.storeState(Json);
