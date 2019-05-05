const http = require('http');
const https = require('https');

const options = {
	validate: (object) => {

	//recibe un array de objetos
		const result = [];
		for(let i = 0; i<object.length; i++){
			const regexHttps = /https:\/\/.+/;
			const regexHttp = /http:\/\/.+/;

			if(regexHttp.test(object[i].href)){
				http.get(object[i].href, function(res) {  
					//TODO handle redirection
					//TODO handle order response, they are not showing in the order they were called
					if(res.statusCode === 200){
						result.push(`${object[i].file} ${object[i].href} OK ${res.statusCode} ${object[i].text}`);
						//callback(result);
					 	//console.log(`${object[i].file} ${object[i].href} OK ${res.statusCode} ${object[i].text}`);
					 	console.log(result);
					}

					else if(res.statusCode >= 400){
					 	result.push(`${object[i].file} ${object[i].href} fail ${res.statusCode} ${object[i].text}`);
					 	//callback(result);
					 	//console.log(`${object[i].file} ${object[i].href} fail ${res.statusCode} ${object[i].text}`);

					}
				})
				
			}
			else if(regexHttps.test(object[i].href)){
				https.get(object[i].href, function(res) {  
					//let result;
					//TODO handle redirection
					//TODO handle order response, they are not showing in the order they were called
					if(res.statusCode === 200){
						result.push(`${object[i].file} ${object[i].href} OK ${res.statusCode} ${object[i].text}`);
						//callback(result);
					 	//console.log(`${object[i].file} ${object[i].href} OK ${res.statusCode} ${object[i].text}`);
					}

					else if(res.statusCode >= 400){
					 	result.push(`${object[i].file} ${object[i].href} fail ${res.statusCode} ${object[i].text}`);
					 	//callback(result);
					 	//console.log(`${object[i].file} ${object[i].href} fail ${res.statusCode} ${object[i].text}`);

					}

				})


			}
		}
	if(result === object.length){console.log(result)}
	}
}
module.exports = options;

/* 
validate: (object,callback) => {

	//recibe un array de objetos
		const result = [];
		for(let i = 0; i<object.length; i++){
			const regexHttps = /https:\/\/.+/;
			const regexHttp = /http:\/\/.+/;

			if(regexHttp.test(object[i].href)){
				http.get(object[i].href, function(err, res) { 
					if(err){
						callback(err);
					} 
					//TODO handle redirection
					//TODO handle order response, they are not showing in the order they were called
					else if(res.statusCode === 200){
						result.push(`${object[i].file} ${object[i].href} OK ${res.statusCode} ${object[i].text}`);

					}

					else if(res.statusCode >= 400){
					 	result.push(`${object[i].file} ${object[i].href} fail ${res.statusCode} ${object[i].text}`);
					}
				})
				
			}
			else if(regexHttps.test(object[i].href)){
				https.get(object[i].href, function(err, res) {
					if(err){
						callback(err);
					}  
					else if(res.statusCode === 200){
						result.push(`${object[i].file} ${object[i].href} OK ${res.statusCode} ${object[i].text}`);
					 	//console.log(`${object[i].file} ${object[i].href} OK ${res.statusCode} ${object[i].text}`);
					}

					else if(res.statusCode >= 400){
					 	result.push(`${object[i].file} ${object[i].href} fail ${res.statusCode} ${object[i].text}`);

					}

				})


			}
		}
	callback(result);	
	}
*/