//console.log(module);

console.log(__dirname);

const path = require('path')
console.log(path.join(__dirname, 'myfile.txt'));

const os = require('os');
console.log(`Free memory: ${os.freemem()}`);
console.log(`Free memory: ${os.totalmem()}`);

const fs = require('fs')
const files = fs.readdirSync('./')
console.log(files);

fs.readdir(__dirname + '____________', (err, files) => {
    if (err)
        console.error(`[async] Error ${err}`);
    else {
        console.log(`[async] Files: `);
        console.log(files);
    }
})
