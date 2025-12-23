// Single Responsibility is to transfer data to and from LocalStorage and InternalState instance in the JSON format
export default class LocalStorageJsonAPI {
	static #storageName = "todoState";

	static storeState(stateJSON) {
		localStorage[this.#storageName] = stateJSON;
	}

	static getState() {
		return localStorage[this.#storageName];
	}
}
