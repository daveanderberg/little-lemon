export const standardTime = (timeStr) => {
    const timeSplit = timeStr.split(":");
    if (timeSplit.length !== 2)
        return timeStr;

    let time = "";
    let hours = Number(timeSplit[0]);
    const minutes = timeSplit[1];

    if (hours > 0 && hours <= 12) {
        time = `${hours}:${minutes} ${hours === 12 ? "PM" : "AM"}`;
    } else if (hours > 12) {
        time = `${hours - 12}:${minutes} PM`;
    } else if (hours === 0) {
        time = `12:${minutes} AM`;
    }

    return time;
}