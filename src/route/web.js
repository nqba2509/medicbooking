import express from "express"
import homeController from '../controllers/homeController'

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);

    router.get('/bookingmedic', (req,res) => {
        return res.send('Hi')
    })

    return app.use("/",router)  
}

module.exports = initWebRoutes;