class Controller {
    constructor({ Service }) {
            this._Service = Service;
         }
    
    async function(req, res, next) {
        try{
        // Here you need to write the logic between the request and the service
        const response = this._Service.function(req.params.param)
        res.status(200).send({
            content: response
        });
        }catch(error){
            next(error)
        }
    }

}
    
module.exports = Controller;