'use strict';

var electron = require('electron');

// electron/src/preload.ts
electron.contextBridge.exposeInMainWorld("electron", {
  ipcRenderer: {
    send: (channel, data) => electron.ipcRenderer.send(channel, data),
    on: (channel, listener) => electron.ipcRenderer.on(channel, listener)
  }
});
