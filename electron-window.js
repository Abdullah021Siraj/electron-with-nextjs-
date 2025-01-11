/**
 * @typedef {Object} IpcRenderer
 * @property {function(string, ...any): void} send - Sends a message to the main process
 * // Define other ipcRenderer methods you use here
 */

/**
 * @typedef {Object} Electron
 * @property {IpcRenderer} ipcRenderer - The ipcRenderer object
 */

/**
 * @typedef {Object} CustomWindow
 * @property {Electron} electron - The Electron object
 */

/**
 * @type {CustomWindow}
 */
window;

// This line ensures the file is treated as a module
export {};