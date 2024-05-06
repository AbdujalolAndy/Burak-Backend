import memberSchema from "../schema/member.schema";
import { LoginInput, Member, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";
import { MemberStatus } from "../libs/enums/member.enum";
import Errors, { HttpCode, Message } from "../libs/Errors";
import bcryptjs from "bcryptjs"

class MemberService {
    private readonly memberModel;
    constructor() {
        this.memberModel = memberSchema
    }
    public async processSignup(input: MemberInput): Promise<Member> {
        const exist = await this.memberModel.findOne({
            memberType: MemberType.RESTAURANT,
            memberStatus: MemberStatus.ACTIVE
        }).exec()
        if (exist) throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED)

        const salt = await bcryptjs.genSalt();
        input.memberPassword = await bcryptjs.hash(input.memberPassword, salt)

        try {
            const result = await this.memberModel.create(input);
            return result
        } catch (err: any) {
            throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED)
        }
    }

    public async processLogin(input: LoginInput) {
        try {
            const member = await this.memberModel.findOne({ memberNick: input.memberNick }, { memberNick: 1, memberPassword: 1 }).exec()
            if (!member) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);

            const isMatch = await bcryptjs.compare(input.memberPassword, member.memberPassword);
            if (!isMatch) throw new Errors(HttpCode.UNAUTHORIZED, Message.WRONG_PASSWROD);

            return await this.memberModel.findById(member._id).exec();
        } catch (err: any) {
            throw err
        }
    }
}

export default MemberService;