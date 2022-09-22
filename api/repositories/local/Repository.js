const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);

class Repository {
    constructor() {
    }

    repo_function(){
      // Here to write the repository
    }
    
}

module.exports = Repository;