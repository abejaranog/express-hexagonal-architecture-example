const express = require('express');

class Server {
    constructor({ config, router }) {
        this._config = config;
        this._express = express();
        this._express.use(router);
    }

    start() {
        return new Promise ((resolve, reject) => {
            const http = this._express.listen(this._config.port, () => {
                const { port } = http.address();

                console.log(`Listening on port ${port}`);
            });

            resolve();
        });
    }

    async getInstance() {
        return this._express;
    }
}

module.exports = Server;