const fs = require('fs');
const pt = require('path');


//arguments from the CLI, path to check file 
//const path = process.argv[2];

module.exports = {


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
}



	//validar ruta




	//function mdLinks (path){
	//}
  // aquí deberían ir las funciones o qué ?



 // process.argv te regresa un array donde el primer elemento es 'node, el segundo es el path, y el 3 -index 2- es lo que le escribas'
 //lo que te regrese va a ser tipo string
