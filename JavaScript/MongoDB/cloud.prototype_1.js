const mongodb = require('mongoose');

class setup {
 constructor(URI) {
  this.connect(URI);
 }
 
 this.connect(URI) {
  let user = URI.slice(14).split(':')[0];
  mongodb.connect(URI, {
   useNewUrlParser: true,
   useUnifiedTopology: true,
  })
   .then(() => {
     console.log(`Conectado a \x1b[32mMongoDB\x1b[0m\nUsuario: \x1b[1m${user}\x1b[0m`)
   })
   .catch((error) => {
    console.log("\x1b[41m\x1b[30m[!ERR]\x1b[0m " + error.message)
   });
 }
}
