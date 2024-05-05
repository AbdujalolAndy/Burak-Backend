import memberSchema from "../schema/member.schema";
import { Member, MemberInput } from "../libs/types/member";

class MemberService {
    private readonly memberModel;
    constructor() {
        this.memberModel = memberSchema
    }
    public async processSignup(input: MemberInput): Promise<Member> {
        try {
            const result = await this.memberModel.create(input);
            result.memberPassword = ""
            return result
        } catch (err: any) {
            throw err
        }
    }
}

export default MemberService;