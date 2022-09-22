const YAML = require('yaml')

class Service {
    _content = "";

    constructor({ Repository, config }) {
        this._Repository = Repository;
        this._config = config;
    }
    
    async init_function() {
        //Init function logic
    }

    function(msg){
        // Here to write the service logic
        return msg
    }

}

module.exports = Service;