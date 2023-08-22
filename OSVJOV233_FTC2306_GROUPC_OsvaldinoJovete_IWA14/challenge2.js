// script.js

const add = (a, b) => {
    return a + b;
  }
  
  const multiply = (a, b) => {
    return a * b;  // Corrected the multiplication operation
  }
  
  const internal = function() {
    this.added = add(this.a, this.b);  // Changed to use 'this.added'
    this.multiplied = multiply(this.a, this.b);  // Added 'this.multiplied'
    return this;
  }
  

// Not allowed to change below this

const example1 = {
	internal: {
		a: 2,
		b: 4,
		c: 8,
	},
	add,
	multiply,
  calculate: internal
}

const example2 = {
	internal: {
		a: 2,
		b: 2,
		c: 3,
	},
	add,
	multiply,
  calculate: internal
}

example1.calculate();
example2.calculate();


