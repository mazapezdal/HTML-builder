
const fs = require('fs');
const path = require('path');

const text = path.join(__dirname, 'text.txt');
const stream = fs.createReadStream(text);


stream.on('data',
    function (str) {
        console.log(String(str));
    }
);



/*   'node 01-read-file'
Работает, но это без ReadStream



const fs = require('fs')
const path = require('path');

fs.readFile(
    path.join(__dirname, 'text.txt'),
    'utf-8',
    (err, data) => {
        if (err) throw err;
        console.log(data);
    }
);

*/