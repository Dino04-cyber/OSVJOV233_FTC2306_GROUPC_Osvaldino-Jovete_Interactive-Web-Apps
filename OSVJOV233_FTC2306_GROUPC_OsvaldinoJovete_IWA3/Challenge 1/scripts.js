// scripts.js
import {year} from './configuration.js';
import {company} from './configuration.js';

// console.log(year,company)

const message = '© ' + company + ' (' + year + ')';
document.querySelector('footer').innerText = message;
