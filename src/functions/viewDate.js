import moment from "moment";

export default function viewTime(date, showTime = false) {
    if (!date || typeof date !== "string") return "";
    let _moment = moment(date).locale("fr");
    let formattedDate = _moment.format("L");
    if (showTime) {
        let time = _moment.format("LT");
        formattedDate = `${formattedDate} ${time}`;
    }
    return formattedDate;
}
