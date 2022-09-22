const qa   = require('./qa');
const local = require('./local');
const prod  = require('./prod');

const { NODE_ENV } = process.env;

switch (NODE_ENV) {
    case 'prod':
        currentEnv = prod;
        break;
    case 'qa':
        currentEnv = qa;
        break;
    default:
        currentEnv = local;
}

module.exports = currentEnv;