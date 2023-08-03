const date = 2050; // Use const instead of let for constant values
const status = 'student'; // Use const instead of let for constant values
let count = 0; // Use let to allow updating the count

if (date === 2050) { // Use === for comparison instead of =
  console.log("January", 'New Year’s Day'); // Add missing closing parenthesis
  console.log("March", 'Human Rights Day');
  console.log('April', 'Family Day'); // Use 'April' instead of date as the month
  console.log('April', 'Freedom Day'); // Use 'April' instead of date as the month
  count += 4; // Increment count by 4

  if (status === "student") { // Use === for comparison instead of =
    console.log('June', 'Youth Day');
    count += 1; // Increment count by 1
  }

  console.log('August', 'Women’s Day');
  console.log('September', 'Heritage Day');
  console.log('December', 'Day of Reconciliation'); // Use 'December' instead of date as the month
  count += 3; // Increment count by 3

  if (status === "parent") { // Use === for comparison instead of =
    console.log('December', 'Christmas Day');
    count += 1; // Increment count by 1
  }

  console.log('December', 'Day of Goodwill'); // Use 'December' instead of date as the month
  count += 1; // Increment count by 1
}

console.log('Your status is:', status);
console.log('The year is:', date);
console.log('The total holidays is:', count);
