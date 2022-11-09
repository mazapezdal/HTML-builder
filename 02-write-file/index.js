const fs = require('fs');
const path = require('path');

const { stdout } = process;
const { stdin } = process;

const text = path.join(__dirname, 'text.txt');
const output = fs.createWriteStream(text);

stdout.write('Hello, you can enter your text!\n');


stdin.on('data',
    function (str) {
        if (str.toString().trim() === 'exit') {
            process.exit();
        }
        output.write(str);
    }
);

process.on('exit', () => stdout.write('\nBy!\n'));
process.on('SIGINT', () => process.exit());