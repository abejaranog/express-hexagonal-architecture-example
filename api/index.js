const container = require('./loaders/container');

const application = container.resolve("app");
console.log("Common entry point");
application.startServer().catch(err => {
  console.log(err);
  process.exit();
});