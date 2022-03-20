const fs = require('fs');

class localdb {
  constructor(filename) {
    this.file = require(`./database/${filename}.json`);
    this.filename = `${filename}.json`;
    if(!fs.existsSync('./database')) {
      fs.mkdirSync('./database');
    }
    if(fs.existsSync(`./database/${filename}.json`)) return;
    
      let empty = {
        
      };
      fs.writeFileSync(`./database/${filename}.json`, JSON.stringify(empty, null, 2));
    
  }
  
  async get(id) {
    let file = require(`./database/${this.filename}`);
    return file[id];
  }

  async set(id, pr, vl) {
    this.file[id] = {
      [pr]: vl
    }
    fs.writeFileSync(`./database/${this.filename}`, JSON.stringify(this.file, null, 2));
  }

  async delete(id) {
    let file = this.file;
    let newf = file.filter(e => e !== id);

    fs.writeFileSync(`./database/${this.filename}`, JSON.stringify(newf, null, 2));
  }
}

module.exports = {
  localdb
}
