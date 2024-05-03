//ZH-TASK
const randomList: number[] = [1, 2, 4, 6, 9, 12, 17];

function findDisappearedNums(arr: number[]): number[] | string {
    try {
        if (arr && !arr[0]) {
            throw new Error("Emypty list, fill arr with nums");
        }
        const sortedList: number[] = arr.sort((a, b) => a - b);
        const result: number[] = [];
        for (let num = 0; num <= sortedList[arr.length - 1]; num++) {
            if (num >= sortedList[0] && !arr.includes(num)) result.push(num);
        }
        return result;
    } catch (err: any) {
        return err.message;
    }
}
console.log("Non-existed Nums", findDisappearedNums(randomList));