export function FormVerify(value) {
    let temp = value / 10000;
    if(temp >= 1) {
        return parseInt(temp) + "万";
    } else {
        return value;
    }
}

export function FormVerifyTime(value) {
    let datetime = parseInt(value / 1000);
    let minutes = parseInt(datetime / 60);
    let seconds = parseInt(datetime % 60);
    if(minutes < 10) {
        minutes = "0"+minutes;
    }
    if(seconds < 10) {
        seconds = "0"+seconds;
    }
    return `${minutes}:${seconds}`;
}