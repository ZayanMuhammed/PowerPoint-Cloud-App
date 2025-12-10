const { app, BrowserWindow } = require('electron');

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        frame: true,
        title: "PowerPoint Cloud",
        icon: __dirname + '/icons8-powerpoint-48.png',
        //<a target="_blank" href="https://icons8.com/icon/HQPitXKj0IMC/microsoft-powerpoint-2025">Powerpoint</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
        titleBarStyle: "customButtonsOnHover",
        webPreferences: {
            nodeIntegration: true, // Be cautious with enabling nodeIntegration for external content
            contextIsolation: false // Be cautious with disabling contextIsolation for external content
        }
    });

    // Load a remote URL
    mainWindow.setMenuBarVisibility(false);
    mainWindow.autoHideMenuBar = true;

    mainWindow.loadURL('https://powerpoint.cloud.microsoft/');

    // Alternatively, load a local HTML file
    // mainWindow.loadFile('index.html'); 
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});