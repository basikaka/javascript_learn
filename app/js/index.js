/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */

logTitle('Enhanced Object Properties')

const pricePropName = 'PRICE';

const calculator = (name, price) => {
    return {
        name,
        add(n1, n2) {
            return n1 + n2;
        },
        [pricePropName.toLowerCase()]: price
    }
}

const calc = calculator('casio louse', 19.99)

log(calc.name);
log(calc.add(12,30));
log(calc.price)

const getCurrentUser = (userName,age) => {
    return {
        userName,
        age
    }
}

const currentUser = getCurrentUser('Alex Jams', 23)

log(JSON.stringify(currentUser))