// Here your code for the get previous date function goes
// you can refer to the getNextDate function and make minor changes
function getPreviousDate(month, day, year) {
    var currentDate = new Date();
    var previousDate = new Date(currentDate);
    previousDate.setDate(currentDate.getDate() - 1);
    return previousDate;
}

module.exports = getPreviousDate;

const lastDayOfMonth = require('./lastDayOfMonth');

function getPreviousDate(month, day, year) {
    const lastDay = lastDayOfMonth(month, year);
    if (day < lastDay) {
        return { month, day: day + 1, year };
    } else {
        if (month < 12) {
            return { month: month + 1, day: 1, year };
        } else {
            return { month: 1, day: 1, year: year + 1 };
        }
    }
}

module.exports = getNextDate;
