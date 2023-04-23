// require('shelljs/global');
const { exec } = require('child_process');
const _cwd = __dirname
let cmd = 'cd ../sk-ui && npm run dev-lib'
// let terminal1 = spawn('bash')
terminal1 = exec(cmd)
terminal1.stdout.on('data', function (data) {
    console.log('输出: ' + data);
});

terminal1.stderr.on('data', function (data) {
    console.log('完成: ' + data);
});

