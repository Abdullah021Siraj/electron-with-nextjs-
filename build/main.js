'use strict';

var utils = require('@electron-toolkit/utils');
var electron = require('electron');
var getPortPlease = require('get-port-please');
var startServer = require('next/dist/server/lib/start-server');
var path = require('path');

// electron/src/main.ts
var createWindow = () => {
  const mainWindow = new electron.BrowserWindow({
    width: 900,
    height: 670,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true
    }
  });
  mainWindow.on("ready-to-show", () => mainWindow.show());
  const loadURL = async () => {
    if (utils.is.dev) {
      mainWindow.loadURL("http://localhost:3000");
    } else {
      try {
        const port = await startNextJSServer();
        console.log("Next.js server started on port:", port);
        mainWindow.loadURL(`http://localhost:${port}`);
      } catch (error) {
        console.error("Error starting Next.js server:", error);
      }
    }
  };
  loadURL();
  return mainWindow;
};
var startNextJSServer = async () => {
  try {
    const nextJSPort = await getPortPlease.getPort({ portRange: [30011, 5e4] });
    const webDir = path.join(electron.app.getAppPath(), "app");
    await startServer.startServer({
      dir: webDir,
      isDev: false,
      hostname: "localhost",
      port: nextJSPort,
      customServer: true,
      allowRetry: false,
      keepAliveTimeout: 5e3,
      minimalMode: true
    });
    return nextJSPort;
  } catch (error) {
    console.error("Error starting Next.js server:", error);
    throw error;
  }
};
electron.app.whenReady().then(() => {
  createWindow();
  electron.ipcMain.on("ping", () => console.log("pong"));
  electron.app.on("activate", () => {
    if (electron.BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});
electron.app.on("window-all-closed", () => {
  if (process.platform !== "darwin") electron.app.quit();
});
