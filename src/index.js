//export module from md-links file
const mdLinks = require('./md-links.js');

//arguments from the CLI, path to check file 
const path = process.argv[2];

mdLinks.fileOrDirectory(path, (result)=>{console.log(result)});

//ruta filterMd  /home/elenasilvana/Documents/Laboratoria/Proyectos/2/GDL002-data-lovers

mdLinks.filterMd(path, (result)=> {console.log(result)});	
