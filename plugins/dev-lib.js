// require('shelljs/global');
const { exec } = require('child_process');
const _cwd = __dirname
let cmd = 'yalc add smartbi-ka-ui && npm run serve'
// let terminal1 = spawn('bash')
terminal1 = exec(cmd)
terminal1.stdout.on('data', function (data) {
    console.log('输出: ' + data);
});

terminal1.stderr.on('data', function (data) {
    console.log('完成: ' + data);
});

terminal1.on('close', (code) => {
    console.log(`child process close all stdio with code ${code}`);
});
  
terminal1.on('exit', (code) => {
    console.log(`child process exited with code ${code}`);
});