<h1 align="center">Base de datos local</h1>
<p align="center">JavaScript/TypeScript</p>

### Que usa esta base de datos?
<p>Esta base de datos usa el formato <code>JSON(JavaScript Object Notation)</code>, cuyos datos podemos pedir con un simple require o usando el metodo <db>.get()</p>

### Modo de uso
Bien, iniciemos, vamos a crear un archivo llamado <code>db.ts</code> en nuestra carpeta raíz y dentro de ese archivo pegas el [codigo de la db](https://github.com/k1-1960/sharing-codes/blob/main/TypeScript/database/local.prototype_3.ts), tendrias lista tu db, ahora vamos a usarla.

Vamos a el archivo donde quieres pedir tu dato, primero debes crear la db;

una db de prefixes para servidores de discord:
```js
const { localdb } = require("./db.ts"); // este archivo esta al lado de db.ts
const db = new localdb('prefixes'); // con esto creamos nuestro archivo JSON y inicializamos una db.

// id del gremio/servidor↓ |↓propiedad |↓ nuevo valor
db.set("123456789012345678", "prefix", '!'); // Guardamos|establecemos un dato, una vez establecido deberia quedar algo asi en el archivo user.json:
/* json:
{
 "123456789012345678": {
  "prefix": "!"
 }
}
* Object/JavaScript/TypeScript:
{
 "123456789012345678": {
  prefix: "!"
 }
}
*/
```
como habrás visto, el metodo `set()` tiene/ocupa 3 parámetros: `identificador, propiedad, valor`
