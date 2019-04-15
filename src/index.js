//export module from md-links file
const mdLinks = require('./md-links.js');

//arguments from the CLI, path to check file 
const path = process.argv[2];

mdLinks.fileOrDirectory(path, elLogqueImprime);	