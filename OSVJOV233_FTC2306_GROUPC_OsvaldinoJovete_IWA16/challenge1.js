// Properly declared variables using const or let.
// Fixed the variable assignments by using destructuring where needed.
// Corrected the syntax for creating HTML elements by using quotation marks around tag names.
// Extracted athlete data correctly using data.response.data[athleteId].
// Calculated the total time for the latest race by summing the lap times.
// Formatted the date and time strings according to the desired format.


const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const data = {
  response: {
    requestType: "FETCH_ATHLETE_DATA",
    requestBy: "ALL_MATCHING_ATHLETES",
    forDisplay: "BEST_RACES",

    data: {
      NM372: {
        firstName: "Nwabisa",
        surname: "Masiko",
        id: "NM372",
        races: [
          {
            date: '2022-11-18T20:00:00.000Z',
            time: [9, 7, 8, 6],
          },
          {
            date: '2022-12-02T20:00:00.000Z',
            time: [6, 7, 8, 7],
          },
        ],
      },

      SV782: {
        firstName: "Schalk",
        surname: "Venter",
        id: "SV782",
        races: [
          {
            date: '2022-11-18T20:00:00.000Z',
            time: [10, 8, 3, 12],
          },
          {
            date: '2022-11-25T20:00:00.000Z',
            time: [6, 8, 9, 11],
          },
          {
            date: '2022-12-02T20:00:00.000Z',
            time: [10, 11, 4, 8],
          },
          {
            date: '2022-12-09T20:00:00.000Z',
            time: [9, 8, 9, 11],
          },
        ],
      },
    },
  },
};

const createHtml = (athleteId) => {
  const athlete = data.response.data[athleteId];
  const races = athlete.races;
  const latestRace = races[races.length - 1];

  const fragment = document.createDocumentFragment();

  const title = document.createElement('h2');
  title.textContent = athlete.id;
  fragment.appendChild(title);

  const list = document.createElement('dl');

  const latestDate = new Date(latestRace.date);
  const day = latestDate.getDate();
  const month = MONTHS[latestDate.getMonth()];
  const year = latestDate.getFullYear();

  const total = latestRace.time.reduce((acc, lapTime) => acc + lapTime, 0);
  const hours = Math.floor(total / 60);
  const minutes = total % 60;

  list.innerHTML = /* html */ `
    <dt>Athlete</dt>
    <dd>${athlete.firstName} ${athlete.surname}</dd>

    <dt>Total Races</dt>
    <dd>${races.length}</dd>

    <dt>Event Date (Latest)</dt>
    <dd>${day} ${month} ${year}</dd>

    <dt>Total Time (Latest)</dt>
    <dd>${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}</dd>
  `;

  fragment.appendChild(list);
  return fragment;
};

const NM372Section = document.querySelector('[data-athlete="NM372"]');
const SV782Section = document.querySelector('[data-athlete="SV782"]');

NM372Section.appendChild(createHtml('NM372'));
SV782Section.appendChild(createHtml('SV782'));
