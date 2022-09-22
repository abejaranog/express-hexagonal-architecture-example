class Init {
    constructor({ server, Service }) {
        this._server = server;
        this._service = Service;
    }

    async init() {
        await this._service.init_function();
    }

    async startServer() {
        await this.init();
        await this._server.start();
    }

    async startLambda() {
        await this.init();
        return this._server.getInstance();
    }
}

module.exports = Init;