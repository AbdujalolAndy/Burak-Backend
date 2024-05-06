import { T } from "../libs/types/common";
import { Response, Request } from "express"
import MemberService from "../models/Member.service"
import { LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";

const restaurantController: T = {};

restaurantController.goHome = (req: Request, res: Response) => {
    try {
        console.log("HomePage")
        res.render("home", { title: "Home" })
    } catch (err: any) {
        console.log(`Error, goHome: ${err.message}`)
    }
}

restaurantController.getSignUp = (req: Request, res: Response) => {
    try {
        console.log("getSignup")
        res.render("signup", { title: "SignUp" })
    } catch (err: any) {
        console.log(`Error, getSignUp: ${err.message}`)
    }
}

restaurantController.getLogIn = (req: Request, res: Response) => {
    try {
        console.log("LoginPage")
        res.render("login", { title: "LogIn" })
    } catch (err: any) {
        console.log(`Error, getLogIn: ${err.message}`)
    }
}

restaurantController.processSignup = async (req: Request, res: Response) => {
    try {
        console.log("processSignup");

        const memberInput: MemberInput = req.body;
        memberInput.memberType = MemberType.RESTAURANT;

        //TODO: SESSION AUTHENTICATION
        const memberService = new MemberService()
        const result = await memberService.processSignup(memberInput)

        res.json({ state: "sucess", value: result })
    } catch (err: any) {
        console.log(`Error, processSignup, ${err.message}`)
        res.json({ state: "fail", message: err.message })
    }
}

restaurantController.processLogin = async (req: Request, res: Response) => {
    try {
        console.log("processLogin");
        const memberInput: LoginInput = req.body;

        //TODO: SESSION AUTHENTICATION
        const memberService = new MemberService();
        const result = await memberService.processLogin(memberInput);

        res.send(result)
    } catch (err: any) {
        console.log(`ERROR, processLogin, ${err.message}`)
        res.send(err)
    }
}
export default restaurantController