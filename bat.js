const { spawn } = require('child_process');
const batchFilePath = 'index.bat';

const child = spawn('cmd.exe', ['/c', 'start', '', batchFilePath], {
    detached: true,
    stdio: 'ignore'
});

child.unref(); 
