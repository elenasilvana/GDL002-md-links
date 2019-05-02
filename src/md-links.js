const fs = require('fs');
const pt = require('path');



const mdLinksObject = {
	
//validate if path is true
	validatePath: function (path, callback) {
		let result;
		if(path){
			//console.log('hay un path');
			result = true;
			//call function fileOrDirectory


		}
		else if (!path) { 
			console.log('por favor ingrese una ruta');
			result = false;

		}
		return result;
	},


//check if the path is file or directory
	fileOrDirectory: function (path, callback) { 
		fs.stat(path, (err,stat) => {
		let result; 
			if(err) {
			callback(err + ' your path is not valid, try again');
			}

			else if((stat.isDirectory()) === true){
				result = 'directorio';
				callback(result);
				//hay que llamar el filterMd
			}
			else if(stat.isFile()=== true){
				result = 'archivo';
				callback(result);
				//llamar readAndGetLinks
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

	fileType: function () {
		//validate .md fileType
		/*if(validation === true){
			call function that readfile
		else { message 'this file is not .md file'}

		} */
	},


	readAndGetLinks: (path, callback) => {
	//open and read file
	fs.readFile(path, (err, filecontents) => {
		
		if(err){
			callback(err);
		};

		const showContent = filecontents.toString();
		const regExpr = /\[[\(|\`]*(.+)[\)|\`]*\]\((.+)\)/gm;
		const regExpr2 = /\[[\(|\`]*(.+)[\)|\`]*\]\((.+)\)/;

		//result array matches
		const extractLinks = showContent.match(regExpr);
		const links = []; 
		for(let x in extractLinks){
			let groupData = regExpr2.exec(extractLinks[x]);
			let objectGroup = {
				href: groupData[2],
				text: groupData[1],
				file: path
			};
			//console.log(objectGroup);
			links.push(objectGroup);
		}
		callback(links);
		
	})		

	}


}

module.exports = mdLinksObject;

