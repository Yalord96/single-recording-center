const path = require ('path');
module.export = {
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, "./dist/js/"),
        filename: "main.js",
    }
};