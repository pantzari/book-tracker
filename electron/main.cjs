const { app, BrowserWindow } = require("electron");
const path = require("path");
const createWindow = () => {
  const win = new BrowserWindow({
    width: 900,
    height: 700,
    roundedCorners: true,
  });
  if (app.isPackaged) {
    win.loadFile(path.join(__dirname, "../dist/index.html"));
  } else {
    win.loadURL("http://localhost:5173");
  }
};

app.whenReady().then(createWindow);
