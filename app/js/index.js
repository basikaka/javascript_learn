/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */

logTitle('Array Dstructure')

const names = ['Anna', 'Mariam', 'Joe', 'Mark', 'Matt'];
// const anna = names[0];
// const mariam = names[1];
// const joe = names[2];

const [anna, , joe, ...toRestName] = names
log(`${anna}  ${joe}`);
log(toRestName)


