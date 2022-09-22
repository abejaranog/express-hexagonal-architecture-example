require('source-map-support/register');
const serverlessExpress = require('@vendia/serverless-express');
const container = require('./loaders/container');

let serverlessExpressInstance;

async function setup (event, context) {
  const initInstance = container.resolve("app");
  const app = await initInstance.startLambda();

  serverlessExpressInstance = serverlessExpress({ app });
  
  return serverlessExpressInstance(event, context);
}

async function handler (event, context) {
  if (serverlessExpressInstance) return serverlessExpressInstance(event, context);

  return await setup(event, context);
}

exports.handler = handler;