
const FREE_WARNING = 'Free shipping only applies to single customer orders';
const BANNED_WARNING = 'Unfortunately, we do not ship to your country of residence';
const NONE_SELECTED = 0;

let shipping = null;
const location_1 = 'NK'; 
const customers = 1;
const currency = null; 

const shoes = 300 * 1;
const toys = 100 * 5;
const shirts = 150 * NONE_SELECTED;
const batteries = 35 * 2;
const pens = 5 * NONE_SELECTED;

let totalCost = shoes + toys + shirts + batteries + pens;
const shippingCost = calculateShippingCost(location_1, currency);

if (location_1 === 'NK') {
  console.log(BANNED_WARNING);
} else {
  if (totalCost >= 1000 && (location_1 === 'RSA' || location_1 === 'NAM') && customers === 1) {
    shipping = 0;
    { totalCost += shippingCost;
    console.log('Price:', 'R' + totalCost);
}   
  } else {
    if (customers !== 1) {
      console.log(FREE_WARNING);
    }
  }
  totalCost += shippingCost;
  console.log('Price:', 'R' + totalCost);
}

function calculateShippingCost(location_1, currency) {
  if (location_1 === 'RSA') {
    return 400;
  } else if (location_1 === 'NAM') {
    return 600;
  } else {
    return 800;
  }
}
