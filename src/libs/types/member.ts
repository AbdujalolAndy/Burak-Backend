import { MemberStatus, MemberType } from "../enums/member.enum";
export interface Member{
    memberType: MemberType;
    memberStatus: MemberStatus;
    memberNick: string;
    memberPhone: number;
    memberPassword?: string;
    memberImage?: string;
    memberDesc?: string;
    memberAddress?: string;
    memberPoints?: number;
    createdAt:Date;
    updatedAt:Date;
}


export interface MemberInput {
    memberType?: MemberType;
    memberStatus?: MemberStatus;
    memberNick: string;
    memberPhone: number;
    memberPassword: string;
    memberImage?: string;
    memberDesc?: string;
    memberAddress?: string;
    memberPoints?: number;
}