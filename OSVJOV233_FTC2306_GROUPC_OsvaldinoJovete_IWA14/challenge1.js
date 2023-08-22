//added 'const' to define the variables 
const firstName = 'John';
const age = 35;
const hobby = 'Coding';

//added 'Parameter' to the log twice function so it can be defined
const logTwice = (Parameter) => {
  console.log(Parameter);
  console.log(Parameter);
};

//gave the function a new name since hobby was already defined at the top
function GreetingHobby () {
  logTwice(`Hello, ${firstName} (${age}). I love ${hobby}!`)
};

GreetingHobby();