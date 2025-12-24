import "./css/normalize.css";
import "./css/base.css";

import JsonStateConverter from "./modules/JsonStateConverter";
import InternalState from "./modules/InternalState";
import LocalStorageAPI from "./modules/LocalStorageAPI";

import INITIAL_STATE_DATA from "./data/INITIAL_STATE_DATA.json";

// Populates given Json string or object with all missing default properties and returns a JSON string
function getPopulatedData(data) {
	// Checks whether JSON data is stringified and stringifies it if not
	let jsonStrData = data;

	// Stringifies data if given a JSON object
	if (typeof data !== "string") {
		jsonStrData = JSON.stringify(data);
	}

	//Populates JSON data to include all default properties by turning it into a state of instances
	const populatedData = JsonStateConverter.getJsonToState(jsonStrData);

	// Turns the state back into stringified JSON data
	const populatedJsonData = JsonStateConverter.getStateToJson(populatedData);

	return populatedJsonData;
}

// Registers whether there is a localStorage state saved and either loads that or loads given data in JSON.
function initLocalStorageState(INITIAL_STATE_DATA) {
	if (!LocalStorageAPI.getState()) {
		LocalStorageAPI.storeState(INITIAL_STATE_DATA);
	} else {
		// Makes sure the localStorage state is populated with the relevent instance properties
		LocalStorageAPI.storeState(getPopulatedData(LocalStorageAPI.getState()));
	}
}

// Push internal state to local state (sync them)
function syncLocalState(internalState) {
	LocalStorageAPI.storeState(JsonStateConverter.getStateToJson(internalState));
}

function syncInternalState(localState) {
	InternalState.setState(JsonStateConverter.getJsonToState(localState));
}

// Beginning of programme
// Turn initial JSON object data given to JSON string data for localStorage
INITIAL_STATE_DATA = getPopulatedData(INITIAL_STATE_DATA);

initLocalStorageState(INITIAL_STATE_DATA);
syncInternalState(LocalStorageAPI.getState());
