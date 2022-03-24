const fs = require('fs');
const path = require('path');
  class localdb {
  constructor(filename) {
    this.filename = `${filename}.json`;
    this.project_path = path.resolve('./');
    
    if (!fs.existsSync('./database')) {
      fs.mkdirSync('./database');
    }
    if (fs.existsSync(`./database/${filename}.json`)) {
      let filecontent = fs.readFileSync(`./database/${filename}.json`);
      this.file = require(`${this.project_path}/database/${this.filename}`);
    } else {
      let empty = {
        
      };
      fs.writeFileSync(`./database/${filename}.json`, JSON.stringify(empty, null, 2));

    }
  }

  async get(id) {
      let file = this.file;
      return file[id];
  }

  async set(id, pr, vl) {
    let file = this.file;

    file[id] = {
      [pr]: vl
    }
    fs.writeFileSync(`./database/${this.filename}`, JSON.stringify(file, null, 2));


    return file[id];
  }

  async delete(id) {
    let file = require(`${this.project_path}/database/${this.filename}`);
    let fc = file;
    delete fc[id];

    fs.writeFileSync(`./database/${this.filename}`, JSON.stringify(fc, null, 2));
  }
}

module.exports = {
  localdb
}
