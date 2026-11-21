const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 900,
    height: 700,
    roundedCorners: true,
  });

  win.loadURL("http://localhost:5173");
};

app.whenReady().then(createWindow);
