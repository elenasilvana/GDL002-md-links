//que forma se debería utilizar?  import o link de abajo
//los modulos en html se agregaban indicando en el script que eran type="module"
// aqui el archivo dice module.exports
//import {funciones que se importan} from 'path';
const mdLinks = require('../src/md-links.js');
const pathFile = '/home/elenasilvana/Documents/movies.txt';
const pathDirectory = '/home/elenasilvana/Documents';
//multiples archivos md en un directorio
const pathMdDir = '/home/elenasilvana/Documents/Laboratoria/Proyectos/2/GDL002-data-lovers'; 


describe('mdLinks', () => {

  it('should be an object', () => {
  	expect(typeof mdLinks).toBe('object');
    console.log('is an object');
  });


});


describe('fileOrDirectory', () => {

//test fileOrDirectory
  it('fileOrDirectory should be a function', () => {
  	expect(typeof mdLinks.fileOrDirectory).toBe('function');
  });

//test if path is a file
  it('fileOrDirectory should say if path go to a file', () => {

  	mdLinks.fileOrDirectory(pathFile, function(result){
  		expect(result).toBe('es un archivo');
  	});
  });
//test if path is a directory
	it('fileOrDirectory should say if path go to a directory', () => {

		mdLinks.fileOrDirectory(pathDirectory, function(result){
			expect(result).toBe('es un directorio');
		});
	});


})


//function for reading directory and filter .md files
describe('filterMd', () => {

	it('should be a function', () => {

		expect(typeof mdLinks.filterMd).toBe('function');
	});

	it('filterMd should filter .md files in a directory', () => {
		//debería retornar un array con los resultados de los archivos encontrados
		expect(mdLinks.filterMd(pathMdDir, function(result){
			expect(result.length).toBe(3);
			/* debería tener un archivo md que encontrar */
			})
		);
	});

});

//function for open and reading file
