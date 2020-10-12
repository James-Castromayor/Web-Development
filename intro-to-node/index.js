//Activate filesytem of node.js
//const - constant, cannot change the value
//nodejs.org/docs/latest/api/fs.html
const fs = require("fs");

fs.copyFileSync ("file1.txt", "file2.txt");
