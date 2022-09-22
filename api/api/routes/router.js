const { Router } = require('express');

module.exports = ({ Controller }) => {
    const ExampleRouter = Router();
    
    ExampleRouter.get('/:param', Controller.function.bind(Controller)); // Create routes with HTTP Methods, calling controller functions with bind
    
    const errorMidw = (error, request, response, next) => {
        console.error(error.message) // log the error
        const status = error.status || 500
        const message = error.message || "Internal Server Error"
        response.status(status).send(message)
    }
    ExampleRouter.use(errorMidw)
    return ExampleRouter;
}