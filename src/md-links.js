const fs = require('fs');
const pt = require('path');


//arguments from the CLI, path to check file 
//const path = process.argv[2];

module.exports = {
	//validar ruta


//check if the path is file or directory
	fileOrDirectory: function (path, callback) {
		fs.stat(path, (err,stat) => {
		let result; 
			if(err) {
			callback(error);
			}

			else if((stat.isDirectory()) === true){
				result = 'es un directorio';
				callback(result);
				//hay que llamar el filter que busca por tipo de archivo md
			}
			else if(stat.isFile()=== true){
				result = 'es un archivo';
				callback(result);
				//hay que leer el archivo
			}
		});
	},

//find md files on the path directory
	filterMd: function (path, callback) {

		const ext = 'md'; 
		fs.readdir(path, (err, dirContents) => {
			let result = []; 

			if(err) {
				callback(error);
				}
				
			dirContents.forEach((file) => {
				if(('.' + ext) === pt.extname(file)){
					result.push(file);
				}
			})
					
					callback(result);	
		})	


	},
}


