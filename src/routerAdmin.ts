import express from "express";
import restaurantController from "./controllers/restaurant.controller";

const routerAdmin = express.Router();

routerAdmin.get('/', restaurantController.goHome)
routerAdmin.get("/login", restaurantController.getLogIn)
routerAdmin.get("/signup", restaurantController.getSignUp)


export default routerAdmin;