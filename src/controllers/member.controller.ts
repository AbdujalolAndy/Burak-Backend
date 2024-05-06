import MemberService from "../models/Member.service";
import { T } from "../libs/types/common";
import { Response, Request } from "express"
import { LoginInput, MemberInput } from "../libs/types/member";
import Errors from "../libs/Errors";
const memberService = new MemberService()
const memberController: T = {};
//React
memberController.signup = async (req: Request, res: Response) => {
    try {
        //TODO: TOKENS AUTHENTICATION
        const input: MemberInput = req.body,
            result = await memberService.signup(input)
        res.json({ member: result })
    } catch (err: any) {
        console.log(`ERROR, signup: ${err.messega}`);
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standart.code).json(Errors.standart)
    }
}

memberController.login = async (req: Request, res: Response) => {
    try {
        //TODO: TOKENS AUTHENTICATION
        const input: LoginInput = req.body,
            result = await memberService.login(input);
        res.json({ member: result })
    } catch (err: any) {
        console.log(`ERROR, login: ${err.message}`);
        if (err instanceof Errors) res.status(err.code).json(err);
        ;
    }
}

export default memberController