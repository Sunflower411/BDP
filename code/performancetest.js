const { spawn } = require('child_process');


for (let i = 0; i < 10; i++){
    const ls = spawn('node', ['dataingest.js']);
    ls.stdout.on('data',data => {
                 console.log(`stdout: ${data}`);
                 })
    ls.stderr.on('data',data => {
                 console.log(`stderr: ${data}`);
                 })
    ls.on('close',code => {
          process.exit(code
                       )
          })
}


