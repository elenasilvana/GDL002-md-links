//export module from md-links file
const mdLinks = require('./md-links.js');

//arguments from the CLI, path to check file 
const path = process.argv[2];

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

//ruta filterMd  /home/elenasilvana/Documents/Laboratoria/Proyectos/2/GDL002-data-lovers

//mdLinks.filterMd(path, (result)=> {console.log(result)});	
