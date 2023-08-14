const leoName = 'Leo';
const leoSurname = 'Musvaire      ';
const leoBalance = -9394;

const sarahName = 'Sarah          ';
const sarahSurname = 'Kleinhans';
const sarahBalance = -4582.2;

const divider = '----------------------------------';

// Calculate the total owed amount
const owed = Math.abs(leoBalance) + Math.abs(sarahBalance);
const formattedOwed = owed.toFixed(2)/*This code adds spaces between and plays as a thousands seperator*/.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

// Construct the output lines
const leoLine = `${leoName} ${leoSurname} (Owed: R ${Math.abs(leoBalance).toFixed(2)})`;
const sarahLine = `${sarahName} ${sarahSurname} (Owed: R ${Math.abs(sarahBalance).toFixed(2)})`;
const totalLine = `  Total amount owed: R ${formattedOwed}`;

// Output the result
console.log('\n' + leoLine);
console.log(sarahLine);
console.log('\n' + divider);
console.log(totalLine);
console.log(divider);
