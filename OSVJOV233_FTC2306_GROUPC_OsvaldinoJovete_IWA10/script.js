const currentYear = new Date().getFullYear();

const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: `16 December ${currentYear}`,
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`1 April ${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`26 December ${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`1 January ${currentYear}`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`9 August ${currentYear}`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`24 September ${currentYear}`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`25 December ${currentYear} 13:25`),
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`16 June ${currentYear}`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`21 March ${currentYear}`)
    },
}

const christmas = 6;
const futureId = 9;

// Do not change code above this comment

console.log(`ID ${futureId} not created yet`);

let copied = { ...holidays[christmas] }; // Create a copy of the object
copied.name = 'X-mas Day';

// Set the time to midnight
copied.date.setHours(0);
copied.date.setMinutes(0);

const isEarlier = copied.date.getTime() < holidays[christmas].date.getTime();
console.log('New date is earlier:', isEarlier);

if (isEarlier) {
    holidays[christmas] = copied;
}

console.log('ID change:', holidays[christmas].id !== copied.id || copied.id);
console.log('Name change:', holidays[christmas].name !== copied.name || copied.name);
console.log('Date change:',  (holidays[christmas].date !== copied.date || copied.date).toLocaleDateString({ day: '2-digit', month: '2-digit', year: 'numeric' }));


const holidayTimestamps = Object.values(holidays).map(holiday => holiday.date.getTime());
const firstHolidayTimestamp = Math.min(...holidayTimestamps);
const lastHolidayTimestamp = Math.max(...holidayTimestamps);

const firstDay = new Date(firstHolidayTimestamp).getDate().toString().padStart(2, '0');
const firstMonth = (new Date(firstHolidayTimestamp).getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
const lastDay = new Date(lastHolidayTimestamp).getDate().toString().padStart(2, '0');
const lastMonth = (new Date(lastHolidayTimestamp).getMonth() + 1).toString().padStart(2, '0');

console.log(`${firstDay}/${firstMonth}/${currentYear}`);
console.log(`${lastDay}/${lastMonth}/${currentYear}`);

const randomIndex = Math.floor(Math.random() * Object.keys(holidays).length);
const randomHoliday = holidays[randomIndex];
const randomDate = randomHoliday.date;
const randomDay = new Date(randomDate).getDate().toString().padStart(2, '0');
const randomMonth = (new Date(randomDate).getMonth() + 1).toString().padStart(2, '0');

console.log(`${randomDay}/${randomMonth}/${currentYear}`);