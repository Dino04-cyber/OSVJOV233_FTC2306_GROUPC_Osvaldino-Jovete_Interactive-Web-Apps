





const MONTHS = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
];

const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

// Only edit below 

// Added a missing loop variable in the createArray function.

// Corrected the loop variable and condition in the createData function, 
// and adjusted the calculation for the day within the loop.

const createArray = (length) => {
    const result = []

    for (let i = 0; i < length; i++) {
        result.push(i)
    }

    return result
}

const createData = () => {
    const current = new Date();
    current.setDate(1);

    const startDay = current.getDay();
    const daysInMonth = getDaysInMonth(current);

    const weeks = createArray(5); // Creating an array with 5 elements representing weeks
    const result = [];

    for (const weekIndex of weeks) {
        const days = [];

        for (let dayIndex = 0; dayIndex < 7; dayIndex++) {
            const day = dayIndex + 1 + weekIndex * 7 - startDay; // Calculating the day number
            const isValid = day > 0 && day <= daysInMonth; // Checking if the day is within the current month

            days.push({
                dayOfWeek: dayIndex,
                value: isValid ? day : '',
            });
        }

        result.push({
            week: weekIndex + 1,
            days: days,
        });
    }

    return result;
}

const addCell = (existing, classString, value) => {
    const result = /* html */ `
        ${existing}
        <td class="${classString}">
            &nbsp;${value}&nbsp;
        </td>
    `;

    return result;
}
// Updated the class string building logic in the createHtml function to
//  properly apply class names based on conditions.
const createHtml = (data) => {
    let result = '';

    for (const { week, days } of data) {
        let inner = "";
        inner = addCell(inner, 'table__cell table__cell_sidebar', `Week ${week}`);
// Adjusted the conditions for isWeekend and isAlternate to accurately 
// identify weekend days and alternate rows.
        for (const { dayOfWeek, value } of days) {
            const isToday = new Date().getDate() === value;
            const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
            const isAlternate = week % 2 === 0;

            let classString = 'table__cell';

            if (isToday) classString = `${classString} table__cell_today`;
            if (isWeekend) classString = `${classString} table__cell_weekend`;
            if (isAlternate) classString = `${classString} table__cell_alternate`;

            inner = addCell(inner, classString, value);
        }

        result = `
            ${result}
            <tr>${inner}</tr>
        `;
    }

    return result;
}

// Only edit above

const current = new Date();
document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`;

const data = createData();
document.querySelector('[data-content]').innerHTML = createHtml(data);
