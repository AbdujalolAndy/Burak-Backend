import { T } from "../libs/types/common";
import { Response, Request } from "express"

const restaurantController: T = {};

restaurantController.goHome = (req: Request, res: Response) => {
    try {
        res.send("HomePage")
    } catch (err: any) {
        console.log(`Error, goHome: ${err.message}`)
    }
}
restaurantController.getSignUp = (req: Request, res: Response) => {
    try {
        res.send("SignUp Page")
    } catch (err: any) {
        console.log(`Error, getSignUp: ${err.message}`)
    }
}
restaurantController.getLogIn = (req: Request, res: Response) => {
    try {
        res.send("LogIn Page")
    } catch (err: any) {
        console.log(`Error, getLogIn: ${err.message}`)
    }
}

export default restaurantController