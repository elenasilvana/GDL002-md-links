#!/usr/bin/env node
//export module from md-links file
const mdLinks = require('../src/md-links.js');
const optionsMd = require('../src/options.js');

//arguments from the CLI, path to check file 
const path = process.argv[2];
//options: --validate --stats --stats && --validate
const options = process.argv[3];

if(!mdLinks.validatePath(path)){
	process.exit(2);
}

mdLinks.fileOrDirectory(path, (result)=>{
	
	if(result === 'directorio'){
		mdLinks.filterMd(path, (result)=>{
			const route = `${path}\/${result[0]}`;
			mdLinks.readAndGetLinks(route, (res)=>{
				console.log(res);
			});			
		});
	}
	else if(result === 'archivo'){
		mdLinks.readAndGetLinks(path, (result)=>{
			console.log(result);
		});
	}


});

/*
const pathMdDir = '/home/elenasilvana/Documents/Laboratoria/Proyectos/2/GDL002-data-lovers'; 
const pathFileMd = '/home/elenasilvana/Documents/Laboratoria/Proyectos/1/gdl-2019-01-bc-core-cipher/README.md'
const pruebaMd = '../archivoprueba.md';
*/

//ruta filterMd  /home/elenasilvana/Documents/Laboratoria/Proyectos/2/GDL002-data-lovers

//mdLinks.filterMd(path, (result)=> {console.log(result)});	
