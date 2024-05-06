export enum HttpCode {
    OK = 200,
    CREATED = 201,
    NOT_MODIFIED = 304,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    INTERNAL_SERVER_ERROR = 500,
}

export enum Message {
    SOMETHING_WENT_WRONG = "Something went wrong!",
    NO_DATA_FOUND = "No data is found!",
    CREATE_FAILED = "Created is failed!",
    UPDATE_FAILED = "Update is failed!",
    NO_MEMBER = "There is no member with that nick!",
    WRONG_PASSWROD = "You are inserting wrong phone or password!",
    DUBLICATED = "There is already taken nick!"
}

class Errors extends Error {
    public code: HttpCode
    public message: Message

    constructor(statusCode: HttpCode, statusMessage: Message) {
        super()
        this.code = statusCode;
        this.message = statusMessage
    }
}

export default Errors