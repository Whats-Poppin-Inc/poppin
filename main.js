const path = require('path')
const { app, BrowserWindow } = require('electron')
// modify your existing createWindow() function
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join('./', 'preload.js')
    }
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()
  })