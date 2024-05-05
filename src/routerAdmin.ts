import express from "express";
import restaurantController from "./controllers/restaurant.controller";

const routerAdmin = express.Router();

routerAdmin.get('/', restaurantController.goHome)
routerAdmin
    .get("/login", restaurantController.getLogIn)
    .post("/login", restaurantController.processLogin)
routerAdmin
    .get("/signup", restaurantController.getSignUp)
    .post("/signup", restaurantController.processSignup)


export default routerAdmin;