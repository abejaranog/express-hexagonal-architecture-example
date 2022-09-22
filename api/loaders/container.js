const { asClass, asFunction, asValue, createContainer} = require('awilix');

// Loaders
const Init = require('./Init');
const Server = require('./Server');

// Config
const config = require('../config/environments');

// Routes
const Routes = require('../api/routes');
const ExampleRouter = require('../api/routes/router');

// Controllers
const { Controller }  = require('../api/controllers');

// Services
const { Service } = require('../services');

// Repositories

const { Repository } = require('../repositories');


const container = createContainer();

container.register({
    app: asClass(Init).singleton(),
    server: asClass(Server).singleton()
})
.register({
    router: asFunction(Routes).singleton(),
    Routes: asFunction(ExampleRouter).singleton()
})
.register({
    Controller: asClass(Controller).singleton()
})
.register({
    config: asValue(config)
})
.register({
    Service: asClass(Service).singleton()
})
.register({
    Repository: asClass(Repository).singleton()
})

module.exports = container;