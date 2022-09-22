const { Router } = require('express');
const bodyParser = require('body-parser');

module.exports = ({ Routes, config }) => {
    
    const router = Router();
    const apiRouter = Router();
    
    // Middlewares
    apiRouter
        .use(bodyParser.urlencoded({ extended: true }))
        .use(bodyParser.json({
            verify: (req, res, buf) => {
                req.rawBody = buf
            }
        }));
    
    apiRouter.use('/', Routes);
    
    router.use(config.routeGrouper, apiRouter);

    return router;
}