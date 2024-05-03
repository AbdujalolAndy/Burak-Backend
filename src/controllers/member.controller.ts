import { T } from "../libs/types/common";
import { Response, Request } from "express"

const memberController: T = {};

memberController.goHome = (req: Request, res: Response) => {
    try {
        res.send("HomePage")
    } catch (err: any) {
        console.log(`Error, goHome: ${err.message}`)
    }
}
memberController.getSignUp = (req: Request, res: Response) => {
    try {
        res.send("SignUp Page")
    } catch (err: any) {
        console.log(`Error, getSignUp: ${err.message}`)
    }
}
memberController.getLogIn = (req: Request, res: Response) => {
    try {
        res.send("LogIn Page")
    } catch (err: any) {
        console.log(`Error, getLogIn: ${err.message}`)
    }
}

export default memberController