import moment from "moment";
const currentTime = moment().format("YYYY MM DD")
console.log("Execution!")
console.log(currentTime)

interface Person {
    name: string;
    age: number;
    applied_job: boolean
}
const obj: Person = {
    name: "Andy",
    age: 23,
    applied_job: false
}