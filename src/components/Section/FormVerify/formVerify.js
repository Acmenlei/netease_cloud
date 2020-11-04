export function FormVerify(value) {
    let temp = value / 10000;
    if(temp >= 1) {
        return parseInt(temp) + "万";
    } else {
        return value;
    }
}