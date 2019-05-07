# Markdown Links
![md-links](https://i.postimg.cc/wxNzvnNf/Screenshot-from-2019-05-07-05-21-06.png)


En ocasiones estamos investigando o leyendo archivos markdown en los cuales podemos encontrar valiosos recursos referenciados por medio de links, desafortunadamente al cabo de algún tiempo algunos de estos links podrían ya no estar habilitados, con lo cual dejamos al usuario interesado sin acceso a esta información que hemos referenciado. 

Esta librería busca dar solución a la problematica de hacer una validación  rapida y eficiente de los links en archivos markdown, esto ingresando una ruta, puede ser un archivo o directorio en la que deseemos buscar archivos markdown.

En está primer versión al ingresar el path (es decir la ruta), recibiremos un array de objetos con las propiedades href, text, file. 

La siguiente librería sirve para leer archivos.md y extraer los links contenidos en el archivo

## Instalacion
Deberás utilizar tu CLI o terminal

1. Instala Node.js
2. `npm install @elesilvana/md-links` si estás usando Linux y esto falla trata anteponiendo `sudo`

3. Ejecuta `md-links` si falla `@elesilvana/md-links`


## Instrucciones de uso

1. Ejecuta `md-links`

2. md-links <ruta-archivo-directorio>

3. Retornará un array con objetos cuyas propiedades son:
   `href`: URL encontrada.
   `text`: Texto que aparecía dentro del link (`<a>`).
   `file`: Ruta del archivo donde se encontró el link.




### Desarrollo del proyecto
![Diagrama de flujo mdLinks](https://i.postimg.cc/nz1TbptQ/ruta-absoluta.jpg)

Historias de usuario
Caso 1: ruta absoluta: 
1. crear funciones de  validación para posteriormente invocar md-links
1. escribir test md-links ruta absoluta
1. crear funcion md-links ruta absoluta


