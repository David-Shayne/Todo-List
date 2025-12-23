import "./css/normalize.css";
import "./css/base.css";
import JsonClassesConverter from "./modules/JsonClassesConverter";
import InternalState from "./modules/InternalState";
import INITIAL_STATE_DATA from "./data/INITIAL_STATE_DATA.json";
import LocalStorageAPI from "./modules/LocalStorageAPI";
import { TodoProject } from "./modules/todoClasses";

// Populates given Json state with all missing default properties
function getPopulatedJsonData(INITIAL_STATE_DATA) {
	return JsonClassesConverter.getStateObjectToJson(
		JsonClassesConverter.getJsonToStateObject(INITIAL_STATE_DATA)
	);
}

// Registers whether there is a localStorage state saved and either loads that or loads given data in JSON.
function initLocalStorageState(INITIAL_STATE_DATA) {
	if (!LocalStorageAPI.getState()) {
		LocalStorageAPI.storeState(INITIAL_STATE_DATA);
	}
}

// Push internal state to local state (sync them)
function syncLocalState(internalState) {
	LocalStorageAPI.storeState(JsonClassesConverter.getStateObjectToJson(internalState));
}

function syncInternalState(localState) {
	InternalState.setState(JsonClassesConverter.getJsonToStateObject(localState));
}

// Turn initial JSON object data given to JSON string data for localStorage
INITIAL_STATE_DATA = JSON.stringify(INITIAL_STATE_DATA);
INITIAL_STATE_DATA = getPopulatedJsonData(INITIAL_STATE_DATA);

initLocalStorageState(INITIAL_STATE_DATA);
syncInternalState(LocalStorageAPI.getState());
