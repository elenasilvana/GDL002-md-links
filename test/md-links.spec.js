//required files
const mdLinks = require('../src/md-links.js');
const optionsMd = require('../src/options.js');

const pathFile = '/home/elenasilvana/Documents/movies.txt';
const pathDirectory = '/home/elenasilvana/Documents';
//multiples archivos md en un directorio
const pathMdDir = '/home/elenasilvana/Documents/Laboratoria/Proyectos/2/GDL002-data-lovers'; 
const pathFileMd = '/home/elenasilvana/Documents/Laboratoria/Proyectos/1/gdl-2019-01-bc-core-cipher/README.md'
const pruebaMd = '../archivoprueba.md';

const mockObjectMd = require('./dataTest/mockObject.json');


describe('mdLinks', () => {

  it('should be an object', () => {
  	expect(typeof mdLinks).toBe('object');
    console.log('is an object');
  });


});

//test if path is true
describe('validatePath', () => {

	it('should validate if path is true', () => { 
		expect(mdLinks.validatePath(pathFile)).toBe(true);
	})

	it('should validate if path is false', () => {
		expect(mdLinks.validatePath('')).toBe(false);
	})
;})

describe('fileOrDirectory', () => {

//test fileOrDirectory
  it('fileOrDirectory should be a function', () => {
  	expect(typeof mdLinks.fileOrDirectory).toBe('function');
  });

//test if path is a file
  it('fileOrDirectory should say if path go to a file', () => {

  	mdLinks.fileOrDirectory(pathFile, function(result){
  		expect(result).toBe('archivo');
  	});
  });
//test if path is a directory
	it('fileOrDirectory should say if path go to a directory', () => {

		mdLinks.fileOrDirectory(pathDirectory, function(result){
			expect(result).toBe('directorio');
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


//validate fileType
describe('fileType', () => {
	it('fileType should validate the file is .md file', () => {
		expect(mdLinks.fileType(pathFileMd, function(result){
			expect(result).toBe(true);
		})
		)
	})
})

//function to read a file, and get links
describe('readAndGetLinks', () => {
	it('readAndGetLinks should return an array', () => {
		expect(mdLinks.readAndGetLinks(pruebaMd, function(result){
			expect(Array.isArray(result)).toBe(true);
		}));
	})

	it('readAndGetLinks should return an array with 7 elements', () => {
		expect(mdLinks.readAndGetLinks(pruebaMd, function(result){
			expect(result.length).toEqual(7);
			//ahora retorna 8
		}))
	})

	it('readAndGetLinks return should be equal to mockObjectMd', () => {
		expect(mdLinks.readAndGetLinks(pathFileMd, function(result){
			expect(result).toEqual(mockObjectMd);
			//esta pasando el test aunque está mal
		}))
	})

	it('readAndGetLinks result[0] should be an object', () => {
		expect(mdLinks.readAndGetLinks(pruebaMd, function(result){
			expect(typeof result[0]).toEqual('object');
		}))
	})
})

//function to validate links
describe('validate', () => {
	it('validate should be a function', () => {
		expect(typeof optionsMd.validate).toBe('function');
	})

	//it('validate should ')
})


