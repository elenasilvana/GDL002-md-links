const http = require('http');

const options = {
	validate: (object) => {
		//recibe an objects array
	for(let i = 0; i<object.length; i++){

		http.get(object[i].href, function(res) {  
			//TODO handle redirection
			//TODO handle order response, they are not showing in the order they were called
			if(res.statusCode === 200){
				//result +=`${object[i].file} ${object[i].href} OK ${res.statusCode} ${object[i].text}`;
				//callback(result);
			 	//console.log(object[i].href, ' OK ' + res.statusCode + object[i].text);
			 	console.log(`${object[i].file} ${object[i].href} OK ${res.statusCode} ${object[i].text}`);
			}

			else if(res.statusCode >= 400){
			 	//console.log('fail' + res.statusCode);
			 	//result += `${object[i].file} ${object[i].href} fail ${res.statusCode} ${object[i].text}`;
			 	//callback(result);
			 	console.log(`${object[i].file} ${object[i].href} fail ${res.statusCode} ${object[i].text}`);

			}
		})
	}

	}
}

module.exports = options;