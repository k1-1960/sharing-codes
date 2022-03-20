const fs = require('fs');
const path = require('path');

class localdb {
  constructor() {
    this.route = "./database";
    if(!fs.existsSync(this.route)) {
      fs.mkdirSync(this.route.slice(2));
    }
    this.files = fs.readdirSync(this.route).filter(file => file.endsWith('.json'));
  }
  
  
  
  async create(name) {
    let content = {
      
    };
  if(fs.existsSync(`${path.join(this.route, name)}.json`)) return;
    
  fs.writeFile(`${path.join(this.route, name)}.json`, JSON.stringify(content, null, 2), (e) => {
    if(e) {
      console.log(e)
    }
  });
    console.log('FILE CREATED.')
  }
  
  async set(filename, name, property, value) {
    let file = require(`${this.route}/${filename}.json`);

    file[name] = {
      [property]: value
    }

    fs.writeFileSync(`${this.route}/${filename}.json`, JSON.stringify(file, null, 2));
  }

  async get(filename, id){
    const file = require(`${this.route}/${filename}.json`)
    return file[id];
  }
}

module.exports = {
  localdb,
}
