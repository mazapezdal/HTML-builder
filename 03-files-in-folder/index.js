const fs = require('fs');
const path = require('path');
const text = path.join(__dirname, 'secret-folder');

//const options = { withFileTypes: true };

fs.readdir(text,
    function (err, el) {

        el.forEach((el) => {
            let fileInfo = path.parse(el)

            fs.stat(path.resolve(text, el),

                function (err, file) {
                    if (!file.isFile()) {
                        return
                    }

                    console.log(`${fileInfo.name} - ${fileInfo.ext.replace('.', '')} - ${file.size / 1024}kb`)
                }

            );

        });

    }
);