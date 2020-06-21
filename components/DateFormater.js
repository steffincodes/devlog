export default function DateFormater({ dateString }) {
  const newDate = new Date(dateString);
  return <time dateTime={dateString}> {dateFormating(newDate)} </time>;
  return <></>;
}

function dateFormating(date) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  var d = date.getDate();
  var month = months[date.getMonth()]; //Month from 0 to 11
  var y = date.getFullYear();
  var h = date.getHours();
  var m = date.getMinutes();
  return ` ${month} ${d <= 9 ? "0" + d : d},${y} ${h <= 9 ? "0" + h : h}:${m <= 9 ? "0" + m : m} `;
}
