const mongodb = require('mongoose');
const fs = require('fs');
const path = require('path');
const proyectpath = path.resolve('./');
const error = (error) => {
    console.log(`─━─━─━─━─[ MongoDB ]─━─━─━─━─\n\x1b[41m\x1b[30m[!ERR]\x1b[0m ${error.message}\n─━─━─━─━─━─━─━─━─━─━─━─━─━─━─`)
};
const newErr = (name, desc) => {
  let obj = {
    name,
    message: desc,
  }
  return obj;
}

function existsDir() {
if(!fs.existsSync(`${proyectpath}/MongoDB/models`)) {
fs.mkdir(`${proyectpath}/MongoDB`, (err) => {
  if(err) {
  error(err);
  }
})
fs.mkdir(`${proyectpath}/MongoDB/models`, (err) => {
  if(err) {
  error(err);
  }
});
  } else {
  return true;
  }
}


class setup {
 constructor(URI) {
  this.connect(URI);
  this.success = (user) => {
    console.log(`─━─━─━─━─[ MongoDB ]─━─━─━─━─\n🟢 Conectado a \x1b[32mMongoDB\x1b[0m\n👤 Usuario: \x1b[34m${user}\x1b[0m\n─━─━─━─━─━─━─━─━─━─━─━─━─━─━─`)
  };
   existsDir();
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
    error(error);
   });
 }
}

class model {
  constructor(model, modelname) {
    this.model = model;
    this.modelname = modelname;
    if(!fs.existsSync(`${proyectpath}/MongoDB/models`)) {
      existsDir();
    }

    if(!model) return error(newErr('Sin objeto \"modelo\"', `Debes crear un modelo, definirlo en una variable e introducirla en la función model como primer parametro.`));
  }
}

module.exports = {
  setup: setup,
  model: model,
}
