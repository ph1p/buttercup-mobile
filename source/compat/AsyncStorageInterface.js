import AsyncStorage from "@react-native-community/async-storage";
import { storage as ButtercupStorage } from "../library/buttercupCore.js";

const { StorageInterface } = ButtercupStorage;

/**
 * Interface for localStorage
 * @augments StorageInterface
 */
export default class AsyncStorageInterface extends StorageInterface {
    constructor() {
        super();
        this._storage = AsyncStorage;
    }

    get storage() {
        return this._storage;
    }

    /**
     * Get all keys from storage
     * @returns {Promise.<Array.<String>>} A promise that resolves with an array of keys
     */
    getAllKeys() {
        return this.storage.getAllKeys();
    }

    /**
     * Get the value of a key
     * @param {String} name The key name
     * @returns {Promise.<String>} A promise that resolves with the value
     */
    getValue(name) {
        return this.storage.getItem(name);
    }

    /**
     * Remove a key from the storage
     * @param {String} key The key to remove
     * @returns {Promise} A promise that resolves once the item has been removed
     */
    removeKey(key) {
        return this.storage.removeItem(key);
    }

    /**
     * Set the value for a key
     * @param {String} name The key name
     * @param {String} value The value to set
     * @returns {Promise} A promise that resolves when the value is set
     */
    setValue(name, value) {
        return this.storage.setItem(name);
    }
}
