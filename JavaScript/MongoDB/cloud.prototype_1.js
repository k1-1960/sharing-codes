const mongodb = require('mongoose');
const fs = require('fs');
const path = require('path');

class setup {
 constructor(URI) {
  this.connect(URI);
  this.path = path.resolve('./');
  this.success = (user) => {
    console.log(`─━─━─━─━─[ MongoDB ]─━─━─━─━─\n🟢 Conectado a \x1b[32mMongoDB\x1b[0m\n👤 Usuario: \x1b[34m${user}\x1b[0m\n─━─━─━─━─━─━─━─━─━─━─━─━─━─━─`)
  };
  this.error = (error) => {
    console.log(`─━─━─━─━─[ MongoDB ]─━─━─━─━─\n\x1b[41m\x1b[30m[!ERR]\x1b[0m ${error.message}\n─━─━─━─━─━─━─━─━─━─━─━─━─━─━─`)
  }
   if(!fs.existsSync(`${this.path}/MongoDB/models`)) {
fs.mkdir(`${this.path}/MongoDB`, (err) => {
  if(err) {
  this.error(err);
  }
})
fs.mkdir(`${this.path}/MongoDB/models`, (err) => {
  if(err) {
  this.error(err);
  }
})
   }
 }
 
 connect(URI) {
   let user = URI.slice(14).split(':')[0];
  mongodb.connect(URI, {
   useNewUrlParser: true,
   useUnifiedTopology: true,
  })
   .then(() => {
     this.success(user);
   })
   .catch((error) => {
    this.error(error);
   });
 }
}

module.exports = {
  setup: setup,
}
