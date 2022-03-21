<h1 align="center">Base de datos local</h1>
<p align="center">JavaScript/TypeScript</p>

### Que usa esta base de datos?
<p>Esta base de datos usa el formato <code>JSON(JavaScript Object Notation)</code>, cuyos datos podemos pedir con un simple require o usando el metodo <db>.get()</p>

### Modo de uso
Bien, iniciemos, vamos a crear un archivo llamado <code>db.ts</code> en nuestra carpeta raíz y dentro de ese archivo pegas el [codigo de la db](https://github.com/k1-1960/sharing-codes/blob/main/TypeScript/database/local.prototype_2.ts), tendrias lista tu db, ahora vamos a usarla.

Vamos a el archivo donde quieres pedir tu dato, primero debes crear la db;
```js
const { localdb } = require("./db.ts"); // este archivo esta al lado de db.ts
const db = new localdb('user'); // con esto creamos nuestro archivo JSON y inicializamos una db.

db.set(userid, name, 'Usuarioxd'); // Guardamos|establecemos un dato, una vez establecido deberia quedar algo asi en el archivo user.json:
/*
{
 "userid": {
  "name": "Usuarioxd"
 }
}
*/
```
como habrás visto, el metodo `set()` tiene/ocupa 3 parámetros: `identificador, propiedad, valor`
